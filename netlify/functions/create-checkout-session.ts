import type { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Automation plans - monthly subscriptions only
const AUTOMATION_PRICES: Record<string, string> = {
  starter: process.env.STRIPE_PRICE_STARTER || "",
  professional: process.env.STRIPE_PRICE_PROFESSIONAL || "",
};

// AI Agent plans - one-time build fee + monthly maintenance
// Each plan needs TWO price IDs: one for setup, one for monthly
const AGENT_PRICES: Record<string, { setup: string; monthly: string }> = {
  agent_lite: {
    setup: process.env.STRIPE_PRICE_AGENT_LITE_SETUP || "",
    monthly: process.env.STRIPE_PRICE_AGENT_LITE_MONTHLY || "",
  },
  agent_starter: {
    setup: process.env.STRIPE_PRICE_AGENT_STARTER_SETUP || "",
    monthly: process.env.STRIPE_PRICE_AGENT_STARTER_MONTHLY || "",
  },
  agent_professional: {
    setup: process.env.STRIPE_PRICE_AGENT_PRO_SETUP || "",
    monthly: process.env.STRIPE_PRICE_AGENT_PRO_MONTHLY || "",
  },
};

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { planId, planType, customerEmail } = JSON.parse(event.body || "{}");

    const siteUrl = process.env.URL || "http://localhost:8888";

    let session: Stripe.Checkout.Session;

    // Handle Automation plans (subscription only)
    if (planType === "automation") {
      const priceId = AUTOMATION_PRICES[planId];

      if (!priceId) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Price not configured for this automation plan.",
          }),
        };
      }

      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        customer_email: customerEmail || undefined,
        success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/#pricing`,
        allow_promotion_codes: true,
        billing_address_collection: "required",
        metadata: {
          plan: planId,
          planType: "automation",
        },
      });
    }
    // Handle AI Agent plans (one-time setup + monthly subscription)
    else if (planType === "agent") {
      const agentPrices = AGENT_PRICES[planId];

      if (!agentPrices || !agentPrices.setup || !agentPrices.monthly) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Prices not configured for this AI Agent plan.",
          }),
        };
      }

      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          // One-time setup fee (added to first invoice)
          {
            price: agentPrices.setup,
            quantity: 1,
          },
          // Monthly maintenance subscription
          {
            price: agentPrices.monthly,
            quantity: 1,
          },
        ],
        customer_email: customerEmail || undefined,
        success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/#pricing`,
        allow_promotion_codes: true,
        billing_address_collection: "required",
        metadata: {
          plan: planId,
          planType: "agent",
        },
      });
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid plan type" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url,
      }),
    };
  } catch (error) {
    console.error("Stripe error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to create checkout session",
        details: errorMessage,
      }),
    };
  }
};

export { handler };
