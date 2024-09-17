import React from 'react'
import Accounting from './client'


export const metadata = {
    title: 'Accounting and Finance Services | Streamlined Financial Solutions for Your Business',
    description: 'We provide a full range of accounting and finance services to ensure your business runs smoothly. From accurate bookkeeping and seamless payroll management to purchase order matching and accounts payable reconciliation, we handle it all with precision.',
}


function Accountingpage() {
    return (
        <div>
                 <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Accounting and Finance Services</h1>
                 <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Streamlined Financial Solutions for Your Business</h2>
            <Accounting />
        </div>
    )
}

export default Accountingpage;