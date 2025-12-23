import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, mobile, company, requirements } = req.body;

  if (!name || !email || !requirements) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // 2️⃣ Compose email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'vishnu.nair@ecesistech.com, rachel.roy@ecesistech.com',
      subject: `New Enquiry On Ecesis Landing Page 1`,
      html: `
        <h2>Hi</h2>
        <p>A new enquiry has been submitted,</p>
        <p>Below are the details:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${
          mobile && (
            <p>
              <strong>Mobile:</strong> ${mobile}
            </p>
          )
        }
        ${
          company && (
            <p>
              <strong>Company:</strong> ${company}
            </p>
          )
        }
        <p><strong>Requirements:</strong> ${requirements}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
