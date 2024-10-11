import React from 'react'
import About from './client'


// This function generates dynamic metadata for each page
export async function generateMetadata() {

  return {
    title: 'About Us | Experts in AI, Digital Transformation, and PropTech',
    description: 'We help businesses evolve and thrive with AI-driven solutions and digital transformation. Explore how we create innovative and impactful solutions tailored to your digital growth.',
    openGraph: {
      title: 'About Us | Experts in AI, Digital Transformation, and PropTech',
      description: 'We help businesses evolve and thrive with AI-driven solutions and digital transformation. Explore how we create innovative and impactful solutions tailored to your digital growth.',
      images: { url: `/assets/img/logo/Logo_meta.png` },
      url: `https://www.ecesistech.com/about`,
    },
  };
}

export default function Aboutpage() {
  return (
    <div>
      <About />
    </div>
  )
}

