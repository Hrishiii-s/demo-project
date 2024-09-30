import axios from 'axios';

export default async function handler(req) {
    if (req.method === 'POST') {
        const { token } = req.body; // Get reCAPTCHA token from the client
        const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use an environment variable for the secret key

        if (!token) {
            console.log({ success: false, message: 'reCAPTCHA token is required' });
            return; // No need to continue if there's no token
        }

        try {
            // Send request to Google's reCAPTCHA verification API
            const response = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify`,
                {},
                {
                    params: {
                        secret: secretKey,
                        response: token,
                    },
                }
            );

            const { success, score } = response.data;

            if (success && score >= 0.5) {
                // reCAPTCHA is valid
                console.log({ success: true, message: 'reCAPTCHA verified' });
            } else {
                // reCAPTCHA verification failed
                console.log({ success: false, message: 'reCAPTCHA verification failed' });
            }
        } catch (error) {
            console.error('Error during reCAPTCHA verification:', error);
            console.log({ success: false, message: 'Internal Server Error' });
        }
    } else {
        console.log(`Method ${req.method} Not Allowed`);
    }
}
