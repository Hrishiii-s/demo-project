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
import { MoonLoader } from "react-spinners";



function CaseStudy() {

    const cases = [
        {
            id: 1,
            title: "From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth",
            img: "horse_barn.webp",
            url: "how-a-single-website-drove-3X-revenue-growth"

        },
        {
            id: 2,
            title: "Enhancing ECG Data Accuracy in Cardiac Monitoring through AI Integration",
            img: "ecg_mobile.png",
            url: "enhancing-ECG-data-using-AI"

        }
    ]

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
        return (
            <div className="fixed inset-0 flex justify-center items-center">
                <MoonLoader />
            </div>
        ); // Or any other loading indicator
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
        {/* Applying the grid layout to the entire container */}
        <div className="services__details-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item, index) => (
                // Each case study item will be a grid item
                <div className="blog__post-two shine-animate-item" key={index}>
                    <div className="case__post-thumb-two">
                        <Link href={`/case-study/${item.url}`} className="shine-animate">
                            {/* Set fixed width and height for the image with object-cover to maintain aspect ratio */}
                            <img
                                src={`/assets/img/case/${item.img}`}
                                alt={item.title}
                                className="object-cover rounded-lg"
                            />
                        </Link>
                    </div>
                    <div className=" p-3 mb-3 mt-4">
                        <h2 className="text-2xl font-semibold capitalize">
                            <Link href={`/case-study/${item.url}`}>{item.title}</Link>
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>


            </Layout>
        </>
    )
}

export default withLoading(CaseStudy);