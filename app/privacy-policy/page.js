import React from 'react'
import Privacy from './client';

export async function generateMetadata() {

  return {
    title: 'Privacy Policy | Your Data Privacy and Protection at ECESIS',
    description: 'Learn about our data protection practices in our Privacy Policy. We take your privacy seriously and outline how we handle personal information with the utmost care and security.',
    openGraph: {
      title: 'Privacy Policy | Your Data Privacy and Protection at ECESIS',
      description: 'Learn about our data protection practices in our Privacy Policy. We take your privacy seriously and outline how we handle personal information with the utmost care and security.',
      images: { url: `/assets/img/logo/Logo_meta.png` },
      url: `https://www.ecesistech.com/privacy-policy`,
    },
  };
}




function Privacypage() {
  return (
    <div> 
        <Privacy/>
           </div>
  )
}

export default Privacypage;