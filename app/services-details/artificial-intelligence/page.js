import React from 'react'
import AI from './client'

export async function generateMetadata() {

    return {
      title: 'AI Services | Business Innovation Through AI Solutions',
      description: 'Transform your business with our advanced AI solutions. We offer innovative services that integrate machine learning, automation, and predictive analytics to drive growth, optimize operations, and boost competitive advantage.',
      openGraph: {
        title: 'AI Services | Business Innovation Through AI Solutions',
        description: 'Transform your business with our advanced AI solutions. We offer innovative services that integrate machine learning, automation, and predictive analytics to drive growth, optimize operations, and boost competitive advantage.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/artificial-intelligence`,
      },
    };
  }
  

function AIpage() {
    return (
        <div>
            <AI />
        </div>
    )
}

export default AIpage;