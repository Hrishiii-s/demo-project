import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        services: false,
        resources: false,
        digital: false,
        business: false
    });

    const handleToggle = (key, event) => {
        event.stopPropagation();

        // If 'services' or 'resources' is clicked, close the other
        if (key === 'services' || key === 'resources') {
            setIsActive(prevState => ({
                services: key === 'services' ? !prevState.services : false,
                resources: key === 'resources' ? !prevState.resources : false,
                digital: prevState.digital, // Retain the current state of digital
                business: prevState.business // Retain the current state of business
            }));
        } else {
            // If 'digital' or 'business' is clicked, only toggle them
            setIsActive(prevState => ({
                ...prevState,
                [key]: !prevState[key]
            }));
        }
    };

    return (
        <>
            <ul className="navigation">
                <li className="active" onClick={handleMobileMenu}>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={handleMobileMenu}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#" onClick={(e) => handleToggle('services', e)}>
                        Services
                    </Link>
                    <ul className="sub-menu" style={{ display: isActive.services ? "block" : "none" }}>
                        <li className="menu-item-has-children">
                            <Link href="#" onClick={(e) => handleToggle('digital', e)}>
                                Digital Solutions
                            </Link>
                            <ul className="sub-menu" style={{ display: isActive.digital ? "block" : "none" }}>
                                <li onClick={handleMobileMenu}><Link href="/services-details/proptech">PropTech</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/artificial-intelligence">Artificial Intelligence</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/business-process-automation">Business Process Automation</Link></li>
                            </ul>
                            <div className={isActive.digital ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => handleToggle('digital', e)}>
                                <span className="plus-line" />
                            </div>
                        </li>
                        <li className="menu-item-has-children">
                            <Link href="#" onClick={(e) => handleToggle('business', e)}>
                                Business Consulting
                            </Link>
                            <ul className="sub-menu" style={{ display: isActive.business ? "block" : "none" }}>
                                <li onClick={handleMobileMenu}><Link href="/services-details/real-estate-valuation">Real Estate Valuation</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/accounting-finance">Accounting & Finance</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/manpower-staffing">Talent Acquisition</Link></li>
                                <li onClick={handleMobileMenu}><Link href="/services-details/digital-marketing">Digital Marketing</Link></li>
                            </ul>
                            <div className={isActive.business ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => handleToggle('business', e)}>
                                <span className="plus-line" />
                            </div>
                        </li>
                    </ul>
                    <div className={isActive.services ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => handleToggle('services', e)}>
                        <span className="plus-line" />
                    </div>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#" onClick={(e) => handleToggle('resources', e)}>
                        Resources
                    </Link>
                    <ul className="sub-menu" style={{ display: isActive.resources ? "block" : "none" }}>
                        <li onClick={handleMobileMenu}><Link href="/case-study">Case Study</Link></li>
                        <li onClick={handleMobileMenu}><Link href="/blog">Blogs</Link></li>
                    </ul>
                    <div className={isActive.resources ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => handleToggle('resources', e)}>
                        <span className="plus-line" />
                    </div>
                </li>
                <li onClick={handleMobileMenu}>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    );
}
