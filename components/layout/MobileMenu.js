import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({});

    const handleToggle = (key) => {
        setIsActive(prevState => ({
            ...prevState,
            [key]: !prevState[key] // Toggle the current state for the key
        }));
    }
    return (
        <>
            <ul className="navigation" >
                <li className="active" onClick={handleMobileMenu}><Link href="/">Home</Link>

                </li>
                <li className="" onClick={handleMobileMenu}><Link href="/about">About Us</Link>

                </li>
                <li className="menu-item-has-children" >
                    <Link href="#" onClick={() => handleToggle('services')}>Services</Link>
                    <ul className="sub-menu" style={{ display: isActive['services'] ? "block" : "none" }}>
                        <li className="menu-item-has-children">
                            <Link href="#" onClick={(e) => { e.stopPropagation(); handleToggle('digital'); }}>Digital Solutions</Link>
                            <ul className="sub-menu" style={{ display: isActive['digital'] ? "block" : "none" }}>
                                <li onClick={handleMobileMenu}><Link href="/services-details/proptech">PropTech</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/artificial-intelligence">Artificial Intelligence</Link></li>
                                <li onClick={handleMobileMenu}><Link href={`/services-details/automation`}>Business Process Automation</Link></li>
                                {/* <li><Link href="/services-details/software-development">Enterprise Software Solutions</Link></li> */}

                            </ul>
                            <div className={isActive['digital'] ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => { e.stopPropagation(); handleToggle('digital'); }}><span className="plus-line" /></div>

                        </li>
                        <li className="menu-item-has-children">
                            <Link href="#" onClick={(e) => { e.stopPropagation(); handleToggle('business'); }}>Business Consulting</Link>
                            <ul className="sub-menu" style={{ display: isActive['business'] ? "block" : "none" }}>
                                <li onClick={handleMobileMenu}><Link href={`/services-details/real-estate-valuation`}>Real Estate Valuation</Link></li>
                                <li onClick={handleMobileMenu}><Link href={`/services-details/accounting-finance`}>Accounting & Finance</Link></li>
                                <li onClick={handleMobileMenu}><Link href={`/services-details/manpower-staffing`}>Talent Acquisition</Link></li>
                                <li onClick={handleMobileMenu}><Link href={`/services-details/digital-marketing`}>Digital Marketing</Link></li>
                            </ul>
                            <div className={isActive['business'] ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => { e.stopPropagation(); handleToggle('business'); }}><span className="plus-line" /></div>

                        </li>
                        {/* <li><Link href={`/services-details/artificial-intelligence`}>Artificial Intelligence</Link></li>
                        <li><Link href={`/services-details/automation`}>Automated Solutions</Link></li>
                        <li><Link href={`/services-details/cloud-infrastructure`}>Cloud Infrastructure</Link></li>
                        <li><Link href={`/services-details/web-app`}>Web Application</Link></li>
                        <li ><Link href={`/services-details/real-estate-valuation`}>Real Estate Valuation</Link></li>
                        <li><Link href={`/services-details/accounting-finance`}>Accounting & Finance</Link></li>
                        <li><Link href={`/services-details/manpower-staffing`}>Talent Acquisition</Link></li> */}
                        {/* <li><Link href={`/services-details/digital-marketing`}>Digital Marketing</Link></li> */}
                    </ul>
                    <div className={isActive['services'] ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('services')}><span className="plus-line" /></div>

                </li>
                {/* <li className="menu-item-has-children"><Link href="#">Products</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <p className="ml-3 font-bold text-dblue mt-3">Property Tech</p>
                        <li><Link href={`/services-details/artificial-intelligence`}>SmartValue</Link></li>
                        <li><Link href={`/services-details/automation`}>SmartEntry</Link></li>
                        <li><Link href={`/services-details/cloud-infrastructure`}>SmartBid</Link></li>
                        <li><Link href={`/services-details/web-app`}>PropVision</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">RPA</p>

                        <li><Link href={`/services-details/real-estate-valuation`}>Workflow Automation Platform</Link></li>
                        <li><Link href={`/services-details/accounting-finance`}>i-EMS</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">Other Industry</p>

                        <li><Link href={`/services-details/manpower-staffing`}>i-Match Pro</Link></li>
                        <li><Link href={`/services-details/digital-marketing`}>i-Grow</Link></li>
                        <li><Link href={`/services-details/digital-marketing`}>i-Slot</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div>
                </li> */}
                {/* <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="blog">Our Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li> */}
                <li className="menu-item-has-children" >
                    <Link href="#" onClick={() => handleToggle('resources')}>Resources</Link>
                    <ul className="sub-menu" style={{ display: isActive['resources'] ? "block" : "none" }}>
                    <li onClick={handleMobileMenu}><Link href={`/case-study`}>Case Study</Link></li>

                    </ul>
                    <div className={isActive['resources'] ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('resources')}><span className="plus-line" /></div>

                </li>
                <li onClick={handleMobileMenu}><Link href="/contact">contact Us</Link></li>
            </ul>
        </>
    )
}
