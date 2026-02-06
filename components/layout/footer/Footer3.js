import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Request3 from "@/components/sections/Request3";
import LazyLoad from 'react-lazyload';
import Marquee_Footer from '@/components/sections/Marquee_footer';

export default function Footer3() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [renderKey, setRenderKey] = useState(0);  // Initial key for re-render
    const [showTypewriter, setShowTypewriter] = useState(true);

    useEffect(() => {
        // Change key at intervals to force re-render of LazyLoad
        const interval = setInterval(() => {
            setShowTypewriter(false);
            setRenderKey(prevKey => prevKey + 1);  // Increment key
            setShowTypewriter(true);
        }, 6000);  // Adjust time as needed

        return () => clearInterval(interval);  // Clean up the interval on component unmount
    }, []);

    // useEffect(() => {
    //     // Toggle the typewriter effect every 2 seconds
    //     const interval = setInterval(() => {
    //         setShowTypewriter(prev => !prev); // Toggle the state
    //     }, 5500);

    //     return () => clearInterval(interval); // Clean up the interval on component unmount
    // }, []);
  

    return (
        <>
            <footer>
                <div className="footer__area-three">
                    <div className="footer__top-three">
                        <div className={`${isMobile ? "w-full" : "container"} mx-auto px-4`}>
                            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row justify-between items-start"}`}>
                                <div className={`${isMobile ? "mt-5" : "mt-2"} footer-widget text-lb flex-1`}>
                                    <img src="/assets/img/logo/Logo.webp" className={`${isMobile ? "hidden" : ""} h-14 mb-5`} alt="logo" />
                                    <div className="footer__social-three">
                                        <span className="title">Follow Us on:</span>
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/ecesisservices/"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="https://x.com/ecesisservices?s=21"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="https://www.instagram.com/ecesistech/profilecard/?igsh=MTVvcnFramdhenJzNA=="><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="https://in.linkedin.com/company/ecesis"><i className="fab fa-linkedin-in" /></Link></li>
                                            {/* <li><Link href="#"><i className="fab fa-youtube" /></Link></li> */}
                                        </ul>
                                    </div>
                                    <div className='footer-link-list w-fit flex' style={{marginTop: '41px'}}>
                                        <ul className='list-wrap'>
                                            <li className=''><Link href="/privacy-policy"><p className='normal-text font-bold'>Privacy & Cookies Policy</p></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="max-w-full">
                                    <LazyLoad height={200} key={renderKey} unmountIfInvisible={true} offset={100} once>
                                        <h3 className={`${isMobile ? "text-[31px] text-left mr-1"  : "text-4xl text-left"} ${showTypewriter ? "typewriter" : ""} mb-2`} >
                                            <span className='text-blue-400'>Evolve.</span>
                                            <span className='text-pink-400'>Transform.</span>
                                            <span>Grow.</span>
                                        </h3>
                                    
                                    </LazyLoad>
                                        {/* <Marquee_Footer/> */}
                                    <div className="">
                                        <Request3 />
                                    </div>
                                    <div className="footer-link-list mt-6">
                                        <ul className={`list-wrap ${isMobile ? "flex justify-evenly" : "flex ml-auto"} justify-end`}>
                                            {/* <li className='mr-5'><Link href="#"><p className='normal-text font-bold'>Careers</p></Link></li> */}
                                            <li className='mr-5'><Link href="/about"><p className='normal-text font-bold'>About Us</p></Link></li>
                                            <li className=''><Link href="/contact"><p className='normal-text font-bold'>Contact Us</p></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-three">
                        <div className="container">
                            <div className="">
                                <div className="copyright-text">
                                    <p>Copyright ©<Link href="/">ECESIS 2024</Link> | All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
