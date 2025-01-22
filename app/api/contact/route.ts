import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port:Number(process.env.EMAIL_SERVER_PORT),
  secure: false, 
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const contact = await prisma.contactRequest.create({
      data: {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        service: data.service,
        message: data.message,
      },
    });
        // Send confirmation email
        const mailOptions = {
          from: `"Trajectory Inovations" <${process.env.EMAIL_SERVER_USER}>`,
          to: data.email,
          subject: "Thank you for contacting us!",
          text: `Hi ${data.name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest regards,\nTrajectory Innovations`,
          html: `<p>Hi ${data.name},</p>
                 <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
                 <p>Best regards,<br>Trajectory Innovations</p>`,
        };
    
        await transporter.sendMail(mailOptions);
    
   
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}