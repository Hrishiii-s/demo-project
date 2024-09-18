'use client'
import withLoading from "@/app/withLoading";
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from "react";
import Head from "next/head";



function CaseStudy() {
    let Nothome = true;

    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded
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
        return <div>Loading...</div>; // Or any other loading indicator
    }


    return (
        <>
        <Head>
        <title>
        Case Studies | Success Stories in AI, PropTech, and Digital Transformation
        </title>
                <meta name="description" content="Explore our case studies to see how we’ve helped businesses transform with AI, PropTech, and digital solutions. Discover real-world examples of innovation, growth, and success across various industries." />
   
        </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Case Studies" Nothome={Nothome}>
                <section className="services__details-area main-font">
                    <div className="container">
                        <div className="services__details-wrap">
                            <div className="flex flex-col">
                                <Link href="/case-study/how-a-single-website-drove-3X-revenue-growth">
                                    <div className="w-full rounded-3xl md:rounded-md bg-slate-300 flex flex-row border-2">
                                        <div className={`${isMobile ? 'w-full' : 'w-[30%]'}`}>
                                            <img src="/assets/img/case/horse_barn.webp" alt="" className="rounded-xl md:rounded-l-md object-cover" />

                                        </div>
                                        {isMobile ? null : (
                                            <div className="content-center ml-4 p-2">
                                                <h1 className="md:text-3xl text-base">From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth</h1>
                                                <h2 className="sr-only">Case Study</h2>
                                            </div>

                                        )}


                                    </div>
                                </Link>
                                <Link href="/case-study/enhancing-ECG-data-using-AI">
                                    <div className="w-full rounded-3xl md:rounded-md bg-slate-300 flex flex-row border-2 mt-3">
                                        <div className={`${isMobile ? 'w-full' : 'w-[30%]'}`}>
                                            <img src="/assets/img/banner/ecg_banner.jpeg" alt="" className="rounded-xl h-[230px] md:rounded-l-md object-cover" />
                                        </div>
                                        {isMobile ? null : (
                                            <div className="content-center ml-4 p-2">
                                                <h1 className="md:text-3xl text-base">Enhancing ECG Data Accuracy in Cardiac Monitoring through AI Integration</h1>
                                                <h2 className="sr-only">Case Study</h2>
                                            </div>

                                        )}


                                    </div>
                                </Link>

                            </div>



                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default withLoading(CaseStudy);