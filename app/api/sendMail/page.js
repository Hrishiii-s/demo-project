// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    const encodedData = req.searchParams.data;
    const decodedData = JSON.parse(atob(encodedData)); // Decode Base64 and parse JSON
    // console.log("decodedData",decodedData)

        const { name, email, phone, message } = decodedData;
        // console.log("name, email, phone, message",name, email, phone, message)

        // Step 3: Configure the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // use your email service provider (e.g., Gmail, Outlook)
            auth: {
                user: process.env.EMAIL , // your email address
                pass: process.env.PASSWORD  // your email password or app password if using Gmail
            }
        });

        try {
            // Step 4: Set up the email data
            await transporter.sendMail({
                from: process.env.EMAIL, // sender address
                to: ['sidharth.ecesis@gmail.com'], // recipient address
                subject: `New Lead From Ecesis Website - ${name}`, // subject line
                text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}\n`, // plain text body
                headers: {
                    'Message-ID': `<${Date.now()}@ecesistech.com>`, // Unique Message-ID
                    'References': '', // Clear References to prevent threading
                    'In-Reply-To': '', // Clear In-Reply-To to prevent threading
                }
            });

            // Step 5: Send a success response
            console.log({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            console.log({ message: 'Error sending email', error });
        }
   
}
