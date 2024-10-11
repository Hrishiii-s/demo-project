import React from 'react'
import PropTech from './client'


export async function generateMetadata() {

    return {
      title: 'PropTech Services | AI-Driven Real Estate Solutions',
      description: 'Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs.',
      openGraph: {
        title: 'PropTech Services | AI-Driven Real Estate Solutions',
        description: 'Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs.',
        images: { url: `/assets/img/meta/prop.png` },
        url: `https://www.ecesistech.com/services-details/proptech`,
      },
    };
  }
  

function PropTechpage() {
    return (
        <div>
            <PropTech />
        </div>
    )
}

export default PropTechpage;