import React from 'react'
import PropTech from './client'

export const metadata = {
    title: 'PropTech Services | Transforming Real Estate with AI and Technology',
    description: 'Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs.',
}


function PropTechpage() {
    return (
        <div>
            <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>PropTech Services</h1>
            <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Transforming Real Estate with AI and Technology</h2>

            <PropTech />
        </div>
    )
}

export default PropTechpage;