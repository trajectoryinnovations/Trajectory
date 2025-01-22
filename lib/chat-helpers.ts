// export interface Message {
//   role: "user" | "model";
//   content: string;
// }

// export async function sendChatMessage(messages: Message[]) {
//   try {
//     const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ messages }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send message");
//     }

//     const data = await response.json();
//     return data.response;
//   } catch (error) {
//     console.error("Chat error:", error);
//     throw error;
//   }
// }
export interface Message {
  role: "user" | "bot"; // Changed to match your client-side implementation
  content: string;
}

export async function sendChatMessage(messages: (Message | { type: string; content: string })[]) {
  try {
    // Make the API call
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    // Check if response is OK
    if (!response.ok) {
      throw new Error("Failed to send message. Status: " + response.status);
    }

    // Parse the response data
    const data = await response.json();

    // Ensure the response contains 'response' field
    if (!data?.response) {
      throw new Error("Invalid response from server");
    }

    return data.response;
  } catch (error) {
    // Enhanced error handling with more detailed message
    console.error("Chat error:", error);
    throw new Error(`Chat request failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}
