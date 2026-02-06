import React from 'react'
import Contact from './client';

export async function generateMetadata() {

  return {
    title: 'Contact Us | Get in Touch for Innovative Tech Solutions',
    description: 'Reach out to us for expert advice on AI-driven technology, PropTech, and digital transformation services. Our team is ready to assist you with tailored solutions for your business needs.',
    openGraph: {
      title: 'Contact Us | Get in Touch for Innovative Tech Solutions',
      description: 'Reach out to us for expert advice on AI-driven technology, PropTech, and digital transformation services. Our team is ready to assist you with tailored solutions for your business needs.',
      images: { url: `/assets/img/logo/Logo_meta.png` },
      url: `https://www.ecesistech.com/contact`,
    },
  };
}



function Contactpage() {
  return (
    <div> 
                <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Contact Us</h1>
                <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Let’s Connect</h2>
        <Contact/>
           </div>
  )
}

export default Contactpage;