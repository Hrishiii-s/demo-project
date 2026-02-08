import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Ecesis Website" <${process.env.EMAIL}>`,
      to: ["vishnu.vinayan@ecesistech.com"],
      subject: `New Consultation Request – ${company}`,
      text: `
New Consultation Request

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("FinalCTA email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
