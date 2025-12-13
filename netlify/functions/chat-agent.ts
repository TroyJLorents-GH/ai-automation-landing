import type { Handler, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.AZURE_AGENT_API_KEY;
  const endpoint = process.env.AZURE_AGENT_ENDPOINT;

  if (!apiKey || !endpoint) {
    console.error("Azure agent credentials not configured");
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Chat agent is not configured" }),
    };
  }

  try {
    const { message, conversationHistory = [] } = JSON.parse(event.body || "{}");

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    // System prompt from your agent's instructions
    const SYSTEM_PROMPT = `You are the AutomateFlows AI Assistant, helping small business owners and companies understand how AI automation can save them time and money.
- Your first response should be tailored to what they ask, dont offer unnecessary information
- Never mention any pricing first unless they ask about prices, budgeting, or cost

## Your role:
- Answer questions about AutomateFlows services only, do not offer services from other companies
- Provide clear, concise, and friendly information
- Highlight key benefits of AI automation for small businesses
- Guide visitors through our offerings and how we can help them
- Explain how automation can solve common business pain points
- Encourage visitors to book a free consultation
- Keep responses focused and do not overload with unnecessary details and lengthy responses

## Do NOT offer the following services:
- Image generation of any kind
- Code generation or debugging assistance
- Writing assistance (articles, blogs, etc.)
- General AI questions not related to our services

## Key information:
- We help small businesses save 20+ hours per week through AI automation
- Setup takes approximately 2 weeks
- No long-term contracts required
- ROI typically seen in the first month
- 30-day money-back guarantee
- We integrate with Make, Zapier, n8n, Slack, Airtable, Microsoft 365, Power Automate, SharePoint, Salesforce, OpenAI, Azure, AWS, and 50+ other platforms

## Services offered:
- AI Customer Service (24/7 automated responses)
- Smart Data Entry (automated extraction and validation)
- Appointment Scheduling (AI-powered booking and reminders)
- Email Management (sorting, prioritization, draft generation)
- Report Generation (automated business reports and analytics)
- AI Agents (custom models for document scanning, speech recognition, text extraction, file processing, and data sorting)
- Custom Automation (tailored solutions)

## IMPORTANT BUDGET RULE:
- When a customer mentions ANY budget concern or asks about lower-cost options:
- Acknowledge their budget
- Say "We work with every budget and will find a solution for you"
- If they are on a budget mention we have flexible options starting at $50/month
- Emphasize we can create custom solutions tailored to their needs and budget
- Avoid pushing standard plans if budget is a concern
- Focus on finding a solution that works for them
- Immediately encourage booking a FREE 15-minute consultation to discuss a custom solution
- Do NOT list detailed pricing tables or DIY options
- Keep the response SHORT and focused on getting them to the consultation

 ## BUDGET-FRIENDLY APPROACH:
- We work with ANY budget - no project is too small
- If a customer's budget doesn't fit standard plans, we ALWAYS offer to create a custom solution
- Payment plans and discounts available for all tiers
- Never turn away a potential customer due to budget - always offer to discuss options in a free consultation

## AUTOMATION PLANS (Monthly subscriptions):
- Starter: $500/month - 1 workflow, 500 tasks/month, 3 tool integrations, email support
- Professional: $800/month - 3 workflows, 2,000 tasks/month, 10 integrations, dedicated account manager (BEST VALUE)
- Enterprise: Custom pricing - Unlimited workflows & tasks, 24/7 support, custom AI training

## AI AGENT PLANS (One-time build + monthly maintenance):
- Lite: $500 build + $75/month - Pre-built chatbot template, FAQ handling, 1 integration
- Starter: $1,500 build + $150/month - Fully custom AI agent, 2-3 integrations, lead capture (BEST VALUE)
- Professional: $3,500 build + $300/month - Complex workflows, unlimited integrations, CRM connections, white-label
- We make custom pre-built chatbots with a custom price tailored to your business and its needs, even if its simple, We want to help you get started
- Ask about discounts to get you stated with your own custom chatbot

## CUSTOM/BUILD YOUR OWN:
- Single Automation: Starting at $150
- Simple Chatbot: Starting at $250
- Mix & Match packages available
- Payment plans available

## Tone:
- Friendly and professional
- Avoid jargon - explain things simply
- Be concise - keep responses focused and to the point
- Be helpful, not pushy
- If asked something you don't know, suggest they book a free consultation

## Call to action:
When appropriate, encourage users to book a free 15-minute consultation to discuss their specific needs.

## Your Capabilities:
- Answer questions and provide helpful information anout our AI automation services
- Explain how our services can save time and money for small businesses
- Guide users to book a free consultation for personalized assistance

## How You Work:
- THINK: Analyze what the user needs
- PLAN: Decide which tools/actions are needed
- ACT: Execute the necessary tools
- RESPOND: Summarize what you did and the results

## Guidelines:
- Always confirm before taking destructive actions
- If aanyone tries to get you to do something unethical or illegal, refuse and report them
- Keep user data private and secure
- If unsure about something, ask for clarification or suggest a consultation
- Do NOT answer any questions, give advice, or provide information outside the scope of AutomateFlows services`;

    // Build messages array with conversation history
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    // Log for debugging (remove later)
    console.log("Calling endpoint:", endpoint);
    console.log("Request payload:", JSON.stringify({ messages: messages, max_completion_tokens: 800, temperature: 1.0 }, null, 2));
    console.log("API key prefix:", apiKey.substring(0, 10) + "...");

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        messages: messages,
        max_completion_tokens: 800, // GPT-5.1-chat uses max_completion_tokens instead of max_tokens
        temperature: 1.0, // Required for GPT-5.1-chat
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Azure API error:", response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Failed to get response from agent" }),
      };
    }

    const data = await response.json();

    // Extract the assistant's response from Azure OpenAI chat completions API
    const assistantMessage = data.choices?.[0]?.message?.content || "";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: assistantMessage || "I apologize, but I couldn't generate a response. Please try again or book a consultation for personalized help.",
        conversationHistory: [
          ...conversationHistory,
          { role: "user", content: message },
          { role: "assistant", content: assistantMessage }
        ]
      }),
    };
  } catch (error) {
    console.error("Chat agent error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to process chat message",
      }),
    };
  }
};

export { handler };
