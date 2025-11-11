import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    await db.collection("messages").insertOne({ name, email, message, date: new Date() });

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
