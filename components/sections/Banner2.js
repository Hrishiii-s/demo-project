'use client'
import Link from 'next/link'
import Banner from '../../public/assets/img/banner/banner.webp'
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import Image from 'next/image';
import ReactPlayer from 'react-player';

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
                <Link rel="preload" href="/assets/img/banner/h3_banner_shape01.webp" as="image" />

            </Head>
            <section className={`banner__area-two  banner__bg-two object-cover ${isMobile ? "object-right h-screen" : "h-screen"}`} style={{
                backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/banner.webp"})`
            }}>

                <div className="container">
                    <div className={`row`} style={space}>
                        <div className={`col-lg-8 ${isMobile ? "mt-5" : ""}`}>
                            <div className="banner__content-two mb-24 z-0">
                                <h2 className={`font-bold mb-6`} data-aos="fade-up" data-aos-delay={100} style={hstyle}>Empowering Global Innovation</h2>
                                <h3 className={`text-black col-lg-10`} data-aos="fade-up" data-aos-delay={200} style={tstyle}>Your Partner in <span className="text-pink-400">Technology Transformation </span> and Sustainable <span className='text-blue-400'>Growth</span></h3>
                                <div onClick={executeScroll}>
                                    <Link href="#" className="btn border-btn mt-3 bg-[#00235f]" data-aos="fade-up" data-aos-delay={200}>Get Started</Link>
                                </div>
                                {/* {isMobile ?
                                    <Link href="#" className="btn border-btn mt-40" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                    :
                                    <Link href="#" className="btn border-btn mt-10" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                } */}
                            </div>
                            {isMobile && (<>
                                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none">
                                        <source src="/assets/videos/home_mobile.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                            </>)}
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
                {isMobile ? (
                    <>

                    </>
                ) : (
                    <>
                        <div className="banner__shape-two ">
                            <Image
                                src="/assets/img/banner/h3_banner_shape01.webp"
                                alt=""
                                width={400}
                                height={300}
                                className="heartbeat mt-14 left-[5%] top-[12%]"
                                priority={true}
                            />
                        </div>
                    </>

                )}


            </section >
        </>
    )
}
