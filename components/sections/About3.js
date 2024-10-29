'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';


export default function About3() {

    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile === null) {
        return null;  // Or render a loading spinner or placeholder component here
    }
    
    return (
        <>
            <section className="about__area-three about__bg-two">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-wrap-three">
                                {isMobile ? <img src="/assets/img/images/about_3.webp" className='w-full' alt="" /> : <img src="/assets/img/images/about_3.webp" className='' alt="" />
                                }
                                {/* <img src="/assets/img/images/h3_about_img02.webp" alt="" data-parallax="{&quot;x&quot; : 50 }" /> */}
                                <div className="shape">
                                    <img src="/assets/img/images/h3_about_img_shape.webp" alt="" className="alltuchtopdown" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-three">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title">About Our Company</span>
                                    <h1 className="title tg-element-title">Digital Transformation for Business Growth</h1>
                                </div>
                                <h2 className='text-lb text-lg mt-2'>We offer cutting-edge solutions designed to optimize operations, enhance decision-making, and drive growth. With our expertise in advanced technologies and deep industry knowledge, we create solutions that are uniquely suited to your goals.</h2>
                                <div className="about__content-inner about__content-inner-two">
                                    <div className="experience__box-three ">
                                        <div className="title px-3 py-3">
                                            <span>14+</span>
                                        </div>
                                        <p className='ml-5'>Years of<span>Experience</span></p>
                                    </div>
                                    <div className="about__list-box about__list-box-two mt-3">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Operational Efficiency</li>
                                            <li><i className="flaticon-arrow-button" />Strategic Innovation</li>
                                            <li><i className="flaticon-arrow-button" />Proven Reliability</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`about-bottom sm:text-lg about-bottom-two `}>
                                    <div className="author-wrap">
                                        <h4 className='title text-lb'>Mission</h4>
                                        <p className='text-lb'>
                                        Our mission is to empower clients through strategic partnerships, driving value and growth in their transformative journeys.
                                        </p>

                                    </div>
                                    <div className="about__phone">
                                        <h4 className='title text-lb'>Vision</h4>
                                        <p className='text-lb'>
                                        Our vision is to be the leader in delivering innovative, technology-driven solutions that empower transformative client experiences and create lasting value.                                        </p>
                                        {/* <div className="icon">
                                            <i className="flaticon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <span>Hot Line Number</span>
                                            <Link href="tel:0123456789">+123 8989 444</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="about__shape-wrap-three">
                                    <img src="/assets/img/images/h3_about_shape01.webp" alt="" className="rotateme" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
