// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI('AIzaSyBeWtMKKuYKGnPKPWuGkXP0qqzeYfGiTL0');

// export async function POST(request: Request) {
//   try {
//     const { messages } = await request.json();
//     console.log("msg",messages)
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


//     const result = await model.generateContent(messages);
//     console.log(result.response);
//     console.log(result.response.text());
  

//     return NextResponse.json({ response: result.response.text() });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to process chat request" },
//       { status: 500 }
//     );
//   }
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI('AIzaSyBeWtMKKuYKGnPKPWuGkXP0qqzeYfGiTL0');

// export async function POST(request: Request) {
//   try {
//     // Parse the incoming JSON request body
//     const { messages } = await request.json();

//     // Log incoming messages to inspect them
//     console.log("Received messages:", messages);

//     // Extract the most recent user message
//     const latestUserMessage = messages.filter((msg: { type: string; }) => msg.type === 'user').pop();

//     if (!latestUserMessage) {
//       return NextResponse.json({ error: "No user message provided" }, { status: 400 });
//     }

//     // Initialize the AI model
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // Generate content based on the latest user message
//     const result = await model.generateContent([latestUserMessage.content]);

//     // Check if result contains the expected content
//     if (!result?.response) {
//       return NextResponse.json({ error: "Failed to generate response from AI model" }, { status: 500 });
//     }

//     console.log("Generated response:", result.response.text());

//     // Return the AI-generated response to the client
//     return NextResponse.json({ response: result.response.text() });
//   } catch (error) {
//     console.error("Error during chat request:", error);
//     return NextResponse.json(
//       { error: "Failed to process chat request" },
//       { status: 500 }
//     );
//   }
// }
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Document content to be referenced for responses
const documentContent = `Trajectory Innovations - Company Profile
About Trajectory Innovations
Trajectory Innovations is a forward-thinking technology company focused on creating transformative software solutions. Our goal is to deliver groundbreaking technologies that help businesses and individuals adapt, grow, and succeed in the ever-evolving digital world.

We specialize in developing high-quality software products and services including mobile apps, web solutions, AI tools, and desktop applications. By harnessing the power of the latest technologies, we aim to provide scalable and effective solutions that cater to our clients’ unique needs.

Our Founders
Amrutha
Amrutha is one of the visionary co-founders of Trajectory Innovations. With a deep background in technology and business, he has led the company's growth through a combination of strategic insight and technical expertise.

Divya
Divya is the other co-founder of Trajectory Innovations. A passionate innovator, she has played a crucial role in defining the company’s values and ensuring that the solutions we deliver are user-centered and impactful.

Samlet
Samlet is also a co-founder of Trajectory Innovations. He brings a wealth of experience in software development and strategic leadership. With his strong technical skills and forward-thinking approach, Samlet has been instrumental in shaping the direction of the company.

Together, Amruthan, Divya, and Samlet provide the leadership and vision that continues to drive the company forward.

Our Tech Stack
At Trajectory Innovations, we use the most up-to-date and reliable technologies to build powerful, scalable solutions for our clients. Our technology stack includes:

Mobile App Development:

React Native
Flutter
Swift (iOS)
Kotlin (Android)
Web Development:

React
Next.js
Node.js
HTML/CSS
Artificial Intelligence (AI) Tools & Solutions:

Python
TensorFlow
Google AI
Desktop Application Development:

Electron
C#
Cloud Services:

AWS
Azure
Google Cloud
Our Services
Trajectory Innovations offers a comprehensive range of services to address the diverse needs of modern businesses:

1. Mobile Application Development
We specialize in building intuitive and scalable mobile apps for both iOS and Android. Whether it’s a startup or an established enterprise, we ensure seamless user experiences and performance optimization.

2. Web Development
Our web development services encompass everything from building responsive websites to complex, feature-rich web applications. We work with the latest technologies to ensure secure, dynamic, and user-friendly experiences.

3. Artificial Intelligence Solutions
Our AI tools and automation solutions leverage cutting-edge technologies to enhance decision-making, optimize operations, and automate key processes. We help businesses integrate AI into their operations, boosting productivity and intelligence.

4. Desktop Application Development
We provide full-scale desktop application development, creating powerful applications that meet the needs of businesses across various industries. Our desktop solutions are efficient, secure, and easy to use.

5. Consulting and Strategy
We help businesses select the right technology stack, build tailored software solutions, and optimize their workflows to meet their goals. Our consultants guide organizations through the digital transformation process with strategic insights and execution.`

const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY
}`);

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON request body
    const { messages } = await request.json();

    // Extract the most recent user message
    const latestUserMessage = messages.filter((msg: { type: string; }) => msg.type === 'user').pop();

    if (!latestUserMessage) {
      return NextResponse.json({ error: "No user message provided" }, { status: 400 });
    }

    // Check if the user message contains relevant content in the document
    const userQuery = latestUserMessage.content;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Generate a response with the model, restricting the context to the document content
    const result = await model.generateContent([
      `Using the information below, respond strictly based on the content provided. 
    
      If the query is related to the content, answer in detail based on the provided information.
    
      If the query is not related to the content, respond with "I can only help inside Trajectory Innovations."
    
      If the user asks about yourself (e.g., "Who are you?"), respond with "I'm TRAI, trained from Trajectory Innovations."
    
      For casual greetings like "Hi," "Hello," or "How are you?", respond normally in a friendly manner, such as "Hello! How can I assist you today?" or "I'm doing well, thank you for asking! How can I help?"
    
      If the user asks about someone other than the founders, respond with "Not a member of Trajectory Innovations."
    
      If the context is not found, simply say "I'm here to help you inside Trajectory Innovations."
    
      Do not generate content outside the context provided.
    
      Content: 
      ${documentContent}
      
      User Query: ${userQuery}
      
      Answer in detail, strictly based on the provided content.`
    ]);
    
    

    if (!result?.response) {
      return NextResponse.json({ error: "Failed to generate response from AI model" }, { status: 500 });
    }

    // Return the AI-generated response to the client
    return NextResponse.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error during chat request:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

    // const chat = model.startChat({
    //   history: messages.map((msg: any) => ({
    //     role: msg.role,
    //     parts: msg.content,
    //   })),
    // });

    // const result = await chat.sendMessage(messages[messages.length - 1].content);
    // const response = await result.response;