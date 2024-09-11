import React from 'react'
import RealEstate from './client'

export const metadata = {
    title: 'Real Estate Valuation Services | Accurate and Efficient Property Valuations',
    description: 'Our real estate valuation services offer accurate, technology-powered property assessments tailored to your business needs. Streamline your valuation process for faster, more reliable results.',
}


function RealEstatepage() {
    return (
        <div>
            <RealEstate />
        </div>
    )
}

export default RealEstatepage;