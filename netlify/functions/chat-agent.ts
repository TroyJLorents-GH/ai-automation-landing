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

    // Build messages array with conversation history
    const messages = [
      ...conversationHistory,
      { role: "user", content: message }
    ];

    // Log for debugging (remove later)
    console.log("Calling endpoint:", endpoint);
    console.log("Request payload:", JSON.stringify({ input: messages, stream: false }, null, 2));
    console.log("API key prefix:", apiKey.substring(0, 10) + "...");

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        input: messages,
        stream: false,
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

    // Extract the assistant's response from the API response
    let assistantMessage = "";

    if (data.output) {
      // Handle different response formats
      if (typeof data.output === "string") {
        assistantMessage = data.output;
      } else if (Array.isArray(data.output)) {
        const lastMessage = data.output.find((item: any) => item.role === "assistant");
        assistantMessage = lastMessage?.content || "";
      } else if (data.output.content) {
        assistantMessage = data.output.content;
      }
    } else if (data.choices && data.choices[0]) {
      assistantMessage = data.choices[0].message?.content || "";
    } else if (data.message) {
      assistantMessage = data.message;
    }

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
