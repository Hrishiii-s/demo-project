import React from 'react'
import Accounting from './client'


export async function generateMetadata() {

    return {
      title: 'Accounting and Finance Services | Streamlined Financial Solutions for Your Business',
      description: 'We provide a full range of accounting and finance services to ensure your business runs smoothly. From accurate bookkeeping and seamless payroll management to purchase order matching and accounts payable reconciliation, we handle it all with precision.',
      openGraph: {
        title: 'Accounting and Finance Services | Streamlined Financial Solutions for Your Business',
        description: 'We provide a full range of accounting and finance services to ensure your business runs smoothly. From accurate bookkeeping and seamless payroll management to purchase order matching and accounts payable reconciliation, we handle it all with precision.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/accounting-finance`,
      },
    };
  }
  


function Accountingpage() {
    return (
        <div>

            <Accounting />
        </div>
    )
}

export default Accountingpage;