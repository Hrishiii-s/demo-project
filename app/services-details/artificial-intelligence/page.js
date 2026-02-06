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
                      <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>AI Solutions for Businesses</h1>
                      <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Driving Innovation with Artificial Intelligence Services</h2>
            <AI />
        </div>
    )
}

export default AIpage;