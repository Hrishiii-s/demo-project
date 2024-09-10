'use client'
import withLoading from "@/app/withLoading"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useState } from 'react';

function AccountingServices() {

    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded


    let Nothome = true;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        setAllLoaded(true);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    if (!allLoaded) {
        return <div>Loading...</div>;
    }


    return (
        <>
        <Head>
        <title>
        Schedule a Consultation | Book a Meeting with Our Experts
        </title>
                <meta name="description" content="Book a meeting with our specialists to explore how our tailored solutions can transform your business. Schedule a consultation for AI, PropTech, and digital transformation services now." />
   
        </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Schedule a Meeting" Nothome={Nothome}>
                <div>
                    <section className={`services__details-area ${isMobile ? 'h-full' : ''}`}>
                        <div className="container">
                            <div className="services__details-wrap">
                            <div className="calendly-inline-widget" data-url="https://calendly.com/ecesisdigitalsolutions/30min?primary_color=00235f" style={{minWidth:'320px', height:'700px'}}></div>
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}

export default withLoading(AccountingServices);