import React from 'react'
import Schedule from './client'


export const metadata = {
    title: 'Schedule a Consultation | Book a Meeting with Our Experts',
    description: 'Book a meeting with our specialists to explore how our tailored solutions can transform your business. Schedule a consultation for AI, PropTech, and digital transformation services now.',
  }


function Schedulepage() {
  return (
    <div> 
                             <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Schedule a Consultation</h1>
                             <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Book a Meeting with Our Experts</h2>
        <Schedule/>
           </div>
  )
}

export default Schedulepage;