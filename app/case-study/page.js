import React from 'react'
import CaseStudy from './client'


export const metadata = {
    title: 'Case Studies | Success Stories in AI, PropTech, and Digital Transformation',
    description: 'Explore our case studies to see how we’ve helped businesses transform with AI, PropTech, and digital solutions. Discover real-world examples of innovation, growth, and success across various industries.',
  }


function CaseStudypage() {
  return (
    <div>
                       <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Case Studies</h1>
                       <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Success Stories in AI, PropTech, and Digital Transformation</h2>
        <CaseStudy/>
    </div>
  )
}

export default CaseStudypage;