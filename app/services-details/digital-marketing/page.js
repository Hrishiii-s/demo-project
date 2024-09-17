import React from 'react'
import Digital from './client'

export const metadata = {
    title: 'Expert Digital Marketing Services | Boosting Online Presence and Engagement',
    description: 'Our digital marketing services include SEO, social media, content creation, and more, designed to elevate your brand and increase visibility. Let us help you drive engagement and achieve measurable results.',
}


function Marketingpage() {
    return (
        <div>
                <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Expert Digital Marketing Services</h1>
                <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Boosting Online Presence and Engagement</h2>
            <Digital />
        </div>
    )
}

export default Marketingpage;