import React from 'react'
import RealEstate from './client'

export const metadata = {
    title: 'Real Estate Valuation Service | Accurate Property Valuations',
    description: 'Our real estate valuation services offer accurate, technology-powered property assessments tailored to your business needs. Streamline your valuation process for faster, more reliable results.',
}


function RealEstatepage() {
    return (
        <div>
                        <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Real Estate Valuation Services</h1>
                        <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Accurate and Efficient Property Valuations</h2>
            <RealEstate />
        </div>
    )
}

export default RealEstatepage;