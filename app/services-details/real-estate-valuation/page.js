import React from 'react'
import RealEstate from './client'

export async function generateMetadata() {

    return {
      title: 'Real Estate Valuation Service | Accurate Property Valuations',
      description: 'Our real estate valuation services offer accurate, technology-powered property assessments tailored to your business needs. Streamline your valuation process for faster, more reliable results.',
      openGraph: {
        title: 'Real Estate Valuation Service | Accurate Property Valuations',
        description: 'Our real estate valuation services offer accurate, technology-powered property assessments tailored to your business needs. Streamline your valuation process for faster, more reliable results.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/real-estate-valuation`,
      },
    };
  }


function RealEstatepage() {
    return (
        <div>
            <RealEstate />
        </div>
    )
}

export default RealEstatepage;