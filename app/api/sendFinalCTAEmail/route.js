import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, company, message, source } = await request.json();

    if (!name || !email || !company || !message || !source) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const isQA = source === 'QA';
    const isWebsiteCTA = source === 'Website CTA';

    let subject = '';
    if (isQA) {
      subject = `QA Consultation Request - ${company}`;
    } else if (isWebsiteCTA) {
      subject = `New Website Project Inquiry - ${company}`;
    } else {
      subject = `B2B BPO Landing Page Request - ${company}`;
    }

    let emailBody = `
Source: ${source}

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
    `;

    if (isQA) {
      emailBody = `QA Consultation Request\n\n${emailBody}`;
    } else if (isWebsiteCTA) {
      emailBody = `Website CTA - New Project Inquiry\n\n${emailBody}`;
    } else {
      emailBody = `B2B BPO Landing Page Request\n\n${emailBody}`;
    }

    await transporter.sendMail({
      from: `"Ecesis Website" <${process.env.EMAIL}>`,
      to: ['info@ecesistech.com'],
      subject: subject,
      text: emailBody,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('FinalCTA email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
