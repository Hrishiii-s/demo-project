import React from 'react'
import Digital from './client'

export async function generateMetadata() {

    return {
      title: 'Digital Marketing | Boosting Online Presence & Engagement',
      description: 'Our digital marketing services include SEO, social media, content creation, and more, designed to elevate your brand and increase visibility. Let us help you drive engagement and achieve measurable results.',
      openGraph: {
        title: 'Digital Marketing | Boosting Online Presence & Engagement',
        description: 'Our digital marketing services include SEO, social media, content creation, and more, designed to elevate your brand and increase visibility. Let us help you drive engagement and achieve measurable results.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/digital-marketing`,
      },
    };
  }



function Marketingpage() {
    return (
        <div>
            <Digital />
        </div>
    )
}

export default Marketingpage;