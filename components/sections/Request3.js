'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Request3() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="request__area-two">
                <div className="request__bg-two"/>
                <div className={`${isMobile ? "w-full" : "footer-connect"}`}>
                    <div className="row">
                        <div className="flex flex-col">
                            <div className="request__content-two px-4 pt-4 pb-2">
                                <h2 className="title font-semibold">Let’s Create Something Extraordinary Together!</h2>
                                <div className="request__phone">
                                    {/* <div className="icon">
                                        <i className="flaticon-phone-call" />
                                    </div> */}
                                    <div className="content">
                                        <Link href="/contact" className='but'>Let's Connect</Link>
                                    </div>
                                </div>
                                {/* <Link href="tel:0123456789" className="btn">Request a Free Call</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
