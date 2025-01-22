import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: Request) {
  try {
    const { recipientEmail, subject, content } = await req.json();

    if (!recipientEmail || !subject || !content) {
      return NextResponse.json(
        { message: "Recipient email, subject, and content are required." },
        { status: 400 },
      );
    }

    console.log("Preparing to send email:", {
      recipientEmail,
      subject,
      content,
    });

    // Define the email options
    const mailOptions = {
      from: `"Trajectory Innovations" <${process.env.EMAIL_SERVER_USER}>`,
      to: recipientEmail,
      subject,
      text: content,
      html: `<p>${content.replace(/\n/g, "<br>")}</p>`,
    };

    // Send the email
    const emailResponse = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", emailResponse);

    // Return success response
    return NextResponse.json({
      message: "Email sent successfully",
      emailResponse,
    });
  } catch (error: any) {
    console.error("Error sending email:", error.response || error.message);

    // Return error response
    return NextResponse.json(
      {
        message: "Error sending email",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
