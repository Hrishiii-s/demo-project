import React from 'react'
import Business from './client'

export const metadata = {
    title: 'Business Process Automation | Efficient Workflow Solutions',
    description: 'Automate key business processes to enhance productivity, reduce costs, and improve workflow accuracy. Our solutions are designed to help your business operate smarter, faster, and more efficiently.',
}


function Busineesspage() {
    return (
        <div>
            <h1 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Business Process Automation</h1>
            <h2 style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>Transforming Workflows with Automation</h2>
            <Business />
        </div>
    )
}

export default Busineesspage;