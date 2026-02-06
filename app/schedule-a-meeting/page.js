import React from 'react'
import Schedule from './client'


export async function generateMetadata() {

  return {
    title: 'Schedule a Consultation | Book a Meeting with Our Experts',
    description: 'Book a meeting with our specialists to explore how our tailored solutions can transform your business. Schedule a consultation for AI, PropTech, and digital transformation services now.',
    openGraph: {
      title: 'Schedule a Consultation | Book a Meeting with Our Experts',
      description: 'Book a meeting with our specialists to explore how our tailored solutions can transform your business. Schedule a consultation for AI, PropTech, and digital transformation services now.',
      images: { url: `/assets/img/logo/Logo_meta.png` },
      url: `https://www.ecesistech.com/schedule-a-meeting`,
    },
  };
}




function Schedulepage() {
  return (
    <div>
                <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Schedule a meeting</h1>
                <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Let’s Connect</h2>
      <Schedule />
    </div>
  )
}

export default Schedulepage;