import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    // const { token } = req.body; // Get reCAPTCHA token from the client
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use an environment variable for the secret key
    console.log("TOKEN", token)

    if (!token) {
        console.log({ success: false, message: 'reCAPTCHA token is required' });
        return NextResponse.json({ success: false, message: 'reCAPTCHA token is required' }) // No need to continue if there's no token
    }

    try {
        // Send request to Google's reCAPTCHA verification API
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
        );
        console.log("recaptch_response",response)
        const { success, score } = response.data;
        console.log("Success_Score",success,score);

        if (success) {
            // reCAPTCHA is valid
            console.log({ success: true, message: 'reCAPTCHA verified' });
            return NextResponse.json({ success: true, message: 'reCAPTCHA verified' }) // No need to continue if there's no token

        } else {
            // reCAPTCHA verification failed
            console.log({ success: false, message: 'reCAPTCHA verification failed' });
            return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed' }) // No need to continue if there's no token

        }
    } catch (error) {
        console.error('Error during reCAPTCHA verification:', error);
        console.log({ success: false, message: 'Internal Server Error' });
        return NextResponse.json({ success: false, message: 'Internal Server Error' }) // No need to continue if there's no token

    }
}
