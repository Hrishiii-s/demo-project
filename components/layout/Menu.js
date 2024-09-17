'use client'
import Link from "next/link";
import axios from "axios";
import * as Sentry from "@sentry/nextjs";
import React, { useEffect, useState } from "react";


export default function Menu() {

    const [activePath, setActivePath] = useState('');
    const [hoverIndex, setHoverIndex] = useState(null);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set the active path from window.location.pathname
            setActivePath(window.location.pathname);
        }
    }, []);

    const handleMouseEnter = index => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };


    return (
        <>
            <ul className="navigation">
                <li className={activePath === "/" ? "active" : ""}>
                    <Link href="/">Home</Link>
                </li>
                <li className={activePath === "/about" ? "active" : ""}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children" onMouseLeave={handleMouseLeave}>
                    <Link href="#">Services</Link>
                    
                        <ul className="sub-menu w-[230px]">
                            <li className="menu-item-has-children" onMouseLeave={handleMouseLeave}>
                                <Link href="#" onMouseEnter={() => handleMouseEnter(2)}>Digital Solutions</Link>
                                {hoverIndex === 2 && (
                                    <ul className="sub-menu w-[230px]">
                                        <li><Link href="/services-details/proptech">PropTech</Link></li>
                                        <li><Link href="/services-details/artificial-intelligence">Artificial Intelligence</Link></li>
                                        <li><Link href="/services-details/business-process-automation">Business Process Automation</Link></li>
                                        {/* <li><Link href="/services-details/software-development">Enterprise Software Solutions</Link></li> */}
                                        
                                        </ul>
                               
                                )}
                            </li>
                            <li className="menu-item-has-children" onMouseLeave={handleMouseLeave}>
                                <Link href="#" onMouseEnter={() => handleMouseEnter(3)}>Business Consulting</Link>
                                {hoverIndex === 3 && (
                                    <ul className="sub-menu w-[230px]">
                                        <li><Link href="/services-details/real-estate-valuation">Real Estate Valuation</Link></li>
                                        <li><Link href="/services-details/accounting-finance">Accounting & Finance</Link></li>
                                        <li><Link href="/services-details/manpower-staffing">Talent Acquisition</Link></li>
                                        <li><Link href="/services-details/digital-marketing">Digital Marketing</Link></li>

                                    </ul>
                                )}
                            </li>
                        </ul>
                   
                </li>
                {/* <li className="menu-item-has-children">
                    <Link href="#">Products</Link>

                    <ul className="sub-menu">
                        <p className="ml-3 font-bold text-dblue">Property Tech</p>
                        <li><Link href={`/project-details/smart-value`}>SmartValue</Link></li>
                        <li><Link href={`/project-details/smart-entry`}>SmartEntry</Link></li>
                        <li><Link href={`/project-details/smart-bid`}>SmartBid</Link></li>
                        <li><Link href={`/project-details/propvision`}>PropVision</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">RPA</p>

                        <li><Link href={`/project-details/workflow-automation`}>Workflow Automation Platform</Link></li>
                        <li><Link href={`/project-details/i-EMS`}>i - EMS</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">Other Industry</p>

                        <li><Link href={`/project-details/i-Match`}>i - Match Pro</Link></li>
                        <li><Link href={`/project-details/i-Grow`}>i - Grow</Link></li>
                        <li><Link href={`/project-details/i-Slot`}>i - Slot</Link></li>

                    </ul>
                </li> */}
                <li className="menu-item-has-children">
                    <Link href="#">Resources</Link>

                    <ul className="sub-menu w-[160px]">
                     
                        <li><Link href={`/case-study`}>Case Studies</Link></li>

                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
                {/* <li>
                    <Link href="/project-details">Project</Link>
                </li> */}
            </ul>
        </>
    );
}
