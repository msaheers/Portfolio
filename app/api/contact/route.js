import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Respond immediately (fast)
    const returnResponse = NextResponse.json({ success: true });

    // Process DB + email WITHOUT blocking user
    (async () => {
      try {
        const client = await clientPromise;
        const db = client.db("portfolio_db");
        await db.collection("messages").insertOne({
          name,
          email,
          message,
          date: new Date(),
        });

        // Email (Gmail SMTP)
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          replyTo: email,
          to: process.env.EMAIL_USER,
          subject: `New Message from ${name}`,
          html: `
            <h2>Portfolio Message</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p>${message}</p>
          `,
        });
      } catch (err) {
        console.error("Background Error:", err);
      }
    })();

    return returnResponse;

  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
