import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("📨 API route reached, processing request...");

    const body = await req.json().catch(() => null);
    if (!body) {
      console.error("❌ Invalid JSON input received.");
      return NextResponse.json(
        { success: false, message: "Invalid JSON input" },
        { status: 400 }
      );
    }

    console.log("✅ Received form data:", body);

    const { name, email, phone, zipcode, service, message } = body;

    console.log("📨 Preparing to send email...");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.your-email-provider.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "your-email@example.com",
        pass: process.env.SMTP_PASS || "your-app-password",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("✅ Nodemailer transporter created, sending email...");

    await transporter.sendMail({
      from: `"Service Request" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || "your-admin-email@example.com",
      subject: `New Service Request from ${name}`,
      text: `📌 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📍 Zip Code: ${zipcode}
🛠 Service: ${service}
📝 Message: ${message}`,
    });

    console.log("📤 Email sent successfully!");

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Nodemailer error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to send email: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
