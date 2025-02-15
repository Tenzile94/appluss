import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, zipcode, service, message } = body;

    if (!name || !email || !phone || !zipcode || !service || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "applusappliance@gmail.com",
        pass: process.env.SMTP_PASS || "jkclissbrzavjkeb",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send Email to Admin
    await transporter.sendMail({
      from: `"Service Request" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || "applusappliance@gmail.com",
      subject: `New Service Request from ${name}`,
      text: `📌 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📍 Zip Code: ${zipcode}
🛠 Service: ${service}
📝 Message: ${message}`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Email sending error:", error.message);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return NextResponse.json(
        { success: false, message: "An unknown error occurred." },
        { status: 500 }
      );
    }
  }
}
