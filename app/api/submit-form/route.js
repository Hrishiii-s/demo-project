import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, mobile, company, requirements } = await req.json();

    if (!name || !email || !requirements) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log({
      user: process.env.EMAIL,
      pass: !!process.env.PASSWORD,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // prevents some corporate firewall issues
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL}>`,
      // to: 'vishnu.nair@ecesistech.com, rachel.roy@ecesistech.com',
      to: 'sarath_rs@ecesisgroups.com',
      subject: 'New Enquiry On Ecesis Landing Page 1',
      html: `
        <h2>Hi</h2>
        <p>A new enquiry has been submitted.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${mobile ? `<p><strong>Mobile:</strong> ${mobile}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Requirements:</strong> ${requirements}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('EMAIL ERROR:', error);

    return NextResponse.json(
      { message: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
