import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    // const { token } = req.body; // Get reCAPTCHA token from the client
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use an environment variable for the secret key
    console.log("Token", token)
    console.log("secret", secretKey)

    if (!secretKey) {
        console.error('Missing reCAPTCHA secret key.');
        return NextResponse.json({
            success: false,
            message: 'Missing reCAPTCHA secret key.',
        });
    }

    if (!token) {
        console.error('Missing reCAPTCHA token.');
        return NextResponse.json({
            success: false,
            message: 'Missing reCAPTCHA token.',
        });
    }

    try {
        // Send request to Google's reCAPTCHA verification API
        const response = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            new URLSearchParams({
                secret: secretKey,
                response: token,
            })
        );

        const { success, score } = response.data;
        console.log("Success_Score", success, score);

        if (success) {
            return NextResponse.json({
                success: true,
                message: 'reCAPTCHA verified.',
                score,
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'reCAPTCHA verification failed.',
                score,
            });
        }

    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error.message); // Log only the message
        return NextResponse.json({
            success: false,
            message: 'Internal Server Error during reCAPTCHA verification.',
        });
    }
}
