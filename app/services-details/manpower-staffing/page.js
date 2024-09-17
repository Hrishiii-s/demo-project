import React from 'react'
import Talent from './client'

export const metadata = {
    title: 'Industrial Staffing | For Manufacturing & Assembly Lines',
    description: 'We specialize in recruiting skilled workers for assembly line and manufacturing roles. Our tailored staffing solutions ensure your production line operates efficiently with the right talent in place.',
}


function Talentpage() {
    return (
        <div>
               <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Industrial Staffing Services</h1>
               <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Finding Skilled Talent for Manufacturing & Assembly Lines</h2>
            <Talent />
        </div>
    )
}

export default Talentpage;