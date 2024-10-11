import React from 'react'
import Business from './client'


export async function generateMetadata() {

    return {
      title: 'Business Process Automation | Efficient Workflow Solutions',
      description: 'Automate key business processes to enhance productivity, reduce costs, and improve workflow accuracy. Our solutions are designed to help your business operate smarter, faster, and more efficiently.',
      openGraph: {
        title: 'Business Process Automation | Efficient Workflow Solutions',
        description: 'Automate key business processes to enhance productivity, reduce costs, and improve workflow accuracy. Our solutions are designed to help your business operate smarter, faster, and more efficiently.',
        images: { url: `/assets/img/logo/Logo_meta.png` },
        url: `https://www.ecesistech.com/services-details/business-process-automation`,
      },
    };
  }


function Busineesspage() {
    return (
        <div>
            <Business />
        </div>
    )
}

export default Busineesspage;