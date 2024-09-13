import React from 'react'
import Home from './client.js'


export const metadata = {
    title: 'ECESIS | AI-Driven Digital Transformation & PropTech Solutions Company',
    description: 'We are the leading provider of AI-driven digital transformation and PropTech solutions, empowering businesses to evolve, transform, and grow through cutting-edge technology and strategic expertise.',
  }


function Homepage() {
  return (
    <div> 
        <h1 className="sr-only">ECESIS | Leading AI and PropTech Solutions</h1>
        <h2 className="sr-only">Explore Our Innovative Digital Solutions</h2>
        <Home/>
           </div>
  )
}

export default Homepage;