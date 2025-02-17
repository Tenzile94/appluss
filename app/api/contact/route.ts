import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("📨 Received request:", req);

    // ✅ Ensure JSON parsing is correct
    const body = await req.json().catch(() => null);

    if (!body) {
      console.error("❌ Invalid JSON received.");
      return NextResponse.json(
        { success: false, message: "Invalid JSON input" },
        { status: 400 }
      );
    }

    const { name, email, phone, zipcode, service, message } = body;

    if (!name || !email || !phone || !zipcode || !service || !message) {
      console.error("❌ Missing fields in request:", body);
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("✅ Valid request body:", body);

    // ✅ Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.your-email-provider.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "your-email@example.com",
        pass: process.env.SMTP_PASS || "your-app-password",
      },
      tls: { rejectUnauthorized: false },
    });

    // ✅ Send Email to Admin
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
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
