'use client'
import Link from 'next/link'
import Banner from '../../public/assets/img/banner/banner.webp'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Banner_prop() {
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

    const hstyle = {
        fontSize: isMobile ? '44px' : '48px',
        lineHeight: isMobile ? '2.85rem' : '3.25rem'
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
            <section className={`banner__area-two  banner__bg-two object-cover ${isMobile ? "object-right h-full" : "h-full"}`} style={{
                backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/Proptech.webp"})`
            }}>
                <div className="container">
                    <div className={`row`} style={space}>
                        <div className={`col-lg-8 ${isMobile ? "mt-5" : ""}`}>
                            <div className={`banner__content-two ${isMobile ? "mt-12" : "mb-24"} `}>
                                <h2 className={`font-bold mb-6`} data-aos="fade-up" data-aos-delay={100} style={hstyle}><span className='text-pink-500'> AI </span> & <span className='text-blue-400'> PropTech</span> Solutions For<br /> <span className='text-ly'> Real Estate</span> Industry </h2>
                                <h4 className={`font-medium mb-6 text-xl`} data-aos="fade-up" data-aos-delay={100}>Empowering Real Estate with 14+ Years of Technological Excellence</h4>

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
                <LazyLoad height={50} offset={150} once>
                    <div className="banner__shape-two">
                        <Image
                            src="/assets/img/banner/h3_banner_shape01.webp"
                            alt=""
                            width={500}  // Adjust based on your layout needs
                            height={300} // Adjust based on your layout needs
                            className="heartbeat mt-14"
                        />
                    </div>
                </LazyLoad>
            </section>
        </>
    )
}
