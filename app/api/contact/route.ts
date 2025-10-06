// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Create SMTP transporter from env (configure these below)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email address / SMTP user
        pass: process.env.SMTP_PASS, // SMTP password / app password
      },
    });

    // Build email
    const to = process.env.CONTACT_TO || process.env.SMTP_USER!;
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER!;

    const text = [
      `New EPK inquiry`,
      `-----------------`,
      `Name: ${name}`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : null,
      ``,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const info = await transporter.sendMail({
      from, // "EPK Contact <no-reply@yourdomain>"
      to, // where you want to receive it
      replyTo: email, // so you can reply directly to the sender
      subject: subject || "EPK Booking/Press Inquiry",
      text,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("contact error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
