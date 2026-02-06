import React from 'react'
import PropTech from './client'


export async function generateMetadata() {

    return {
      title: 'Careers | Explore various oppurtunities',
      description: 'Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs.',
      openGraph: {
        title: 'PropTech Services | AI-Driven Real Estate Solutions',
        description: 'Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/careers`,
      },
    };
  }
  

function PropTechpage() {
    return (
        <div>
                      <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Careers</h1>
                      <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Explore various oppurtunities</h2>
            <PropTech />
        </div>
    )
}

export default PropTechpage;