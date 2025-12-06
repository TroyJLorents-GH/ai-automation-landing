import type { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const sig = event.headers["stripe-signature"];

  if (!sig) {
    return { statusCode: 400, body: "Missing stripe-signature header" };
  }

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body!,
      sig,
      webhookSecret
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${errorMessage}`);
    return { statusCode: 400, body: `Webhook Error: ${errorMessage}` };
  }

  // Handle the event
  switch (stripeEvent.type) {
    case "checkout.session.completed": {
      const session = stripeEvent.data.object as Stripe.Checkout.Session;
      console.log("✅ Payment successful!", {
        customerId: session.customer,
        customerEmail: session.customer_email,
        subscriptionId: session.subscription,
        plan: session.metadata?.plan,
      });
      
      // TODO: Add your business logic here
      // - Send welcome email
      // - Create user account
      // - Grant access to services
      // - Update your database
      break;
    }

    case "customer.subscription.updated": {
      const subscription = stripeEvent.data.object as Stripe.Subscription;
      console.log("📝 Subscription updated:", {
        subscriptionId: subscription.id,
        status: subscription.status,
      });
      
      // TODO: Handle subscription changes
      // - Update user's plan in your database
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = stripeEvent.data.object as Stripe.Subscription;
      console.log("❌ Subscription cancelled:", {
        subscriptionId: subscription.id,
      });
      
      // TODO: Handle cancellation
      // - Revoke access
      // - Send cancellation confirmation email
      break;
    }

    case "invoice.payment_failed": {
      const invoice = stripeEvent.data.object as Stripe.Invoice;
      console.log("⚠️ Payment failed:", {
        customerId: invoice.customer,
        invoiceId: invoice.id,
      });
      
      // TODO: Handle failed payment
      // - Send payment failure notification
      // - Retry or pause service
      break;
    }

    default:
      console.log(`Unhandled event type: ${stripeEvent.type}`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

export { handler };

