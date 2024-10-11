import React from 'react'
import Talent from './client'

export async function generateMetadata() {

    return {
      title: 'Industrial Staffing | For Manufacturing & Assembly Lines',
      description: 'We specialize in recruiting skilled workers for assembly line and manufacturing roles. Our tailored staffing solutions ensure your production line operates efficiently with the right talent in place.',
      openGraph: {
        title: 'Industrial Staffing | For Manufacturing & Assembly Lines',
        description: 'We specialize in recruiting skilled workers for assembly line and manufacturing roles. Our tailored staffing solutions ensure your production line operates efficiently with the right talent in place.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/manpower-staffing`,
      },
    };
  }


function Talentpage() {
    return (
        <div>
            <Talent />
        </div>
    )
}

export default Talentpage;