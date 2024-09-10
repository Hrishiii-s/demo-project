'use client'
import Link from 'next/link'
import Banner from '../../public/assets/img/banner/banner.webp'
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

export default function Banner2({ scrollRef }) {
    const [isMobile, setIsMobile] = useState(null);

    const executeScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

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

    const hstyle = {
        fontSize: isMobile ? '44px' : '48px',
        lineHeight: isMobile ? '2.85rem' : '3.05rem'
    }
    const tstyle = {
        fontSize: isMobile ? '28px' : '32px',
        lineHeight: isMobile ? '2.25rem' : '2.5rem'
    }
    const space = {
        marginTop: isMobile ? '-70px' : ''
    }
    return (

        <>
            <Head>
                <Link rel="preload" href="/assets/img/banner/h3_banner_shape01.webp" as="image"/>

            </Head>
            <section className={`banner__area-two  banner__bg-two object-cover ${isMobile ? "object-right h-screen" : "h-full"}`} style={{
                backgroundImage: `url(${isMobile ? "/assets/img/bg/services_1.webp" : "/assets/img/banner/banner.webp"})`
            }}>
                <div className="container">
                    <div className={`row`} style={space}>
                        <div className={`col-lg-8 ${isMobile ? "mt-5" : ""}`}>
                            <div className="banner__content-two mb-24">
                                <h2 className={`font-bold mb-6`} data-aos="fade-up" data-aos-delay={100} style={hstyle}>Empowering Global Innovation</h2>
                                <h3 className={`text-black col-lg-10`} data-aos="fade-up" data-aos-delay={200} style={tstyle}>Your Partner in <span className="text-pink-400">Technology Transformation </span> and Sustainable <span className='text-blue-400'>Growth</span></h3>
                                <div onClick={executeScroll}>
                                    <Link href="#" className="btn border-btn mt-1" data-aos="fade-up" data-aos-delay={200}>Get Started</Link>
                                </div>
                                {/* {isMobile ?
                                    <Link href="#" className="btn border-btn mt-40" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                    :
                                    <Link href="#" className="btn border-btn mt-10" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                <LazyLoad height={50} offset={350} once>
                    <div className="banner__shape-two">
                        <img src="/assets/img/banner/h3_banner_shape01.webp" alt="" className="heartbeat mt-14" />
                    </div>
                </LazyLoad>

            </section>
        </>
    )
}
