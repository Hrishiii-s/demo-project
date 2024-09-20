'use client'
import withLoading from "@/app/withLoading"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import MoonLoader from "react-spinners/MoonLoader";

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
        Accounting and Finance Services | Streamlined Financial Solutions for Your Business
        </title>
                <meta name="description" content="We provide a full range of accounting and finance services to ensure your business runs smoothly. From accurate bookkeeping and seamless payroll management to purchase order matching and accounts payable reconciliation, we handle it all with precision." />
   
        </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Accounting & Finance" Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2">
                                        <div className="services__details-content">
                                            <h1 className={` ${isMobile ? "text-center text-3xl" : "text-5xl mb-3"} `}>Simplify <span className="text-pink-400">Accounting & Tax<br /> </span>  Processes With Our Expert Solutions! </h1>
                                            <p>We are established with a vision to empower individuals and businesses with tangible accounting strategies, We are dedicated to delivering top-notch financial operational services that help you navigate the complexities of day to day transactional accounting. Transparency and communication are the cornerstones of our client relationships.</p>
                                            <h2 className="title mt-12">We Specialize In <span className="text-blue-400">Unlocking Accounting Gaps</span> , Navigating Tax Complexity<span className="text-ly"> With Confidence & Ease.</span></h2>
                                            <p>We provide an all-encompassing array of accounting and tax services meticulously tailored for individuals, businesses, and diverse organizations. Our aim is to simplify your financial accounting, ensuring that it's cost-effective and instilling confidence at every juncture of our collaborative journey. Consider us your steadfast partner for all your accounting, compliance and regulatory requirements, delivering trustworthiness with every service.</p>

                                            <div className="services__details-inner">
                                                <div className="row gutter-24 align-items-center">
                                                    {/* <div className="col-44">
                                                        <div className="services__details-inner-img">
                                                            <img src="/assets/img/services/services_details_inner01.webp" alt="" />
                                                            <VideoPopup />
                                                        </div>
                                                    </div>
                                                    <div className="col-56">
                                                        <div className="services__details-inner-content">
                                                            <h4 className="title">Raise capital faster  negotiate <br /> on your own terms</h4>
                                                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries.</p>
                                                            <div className="about__list-box">
                                                                <ul className="list-wrap">
                                                                    <li><i className="flaticon-arrow-button" />Business Growth</li>
                                                                    <li><i className="flaticon-arrow-button" />Analysis  Research</li>
                                                                    <li><i className="flaticon-arrow-button" />100% Secure</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <h3 className="mt-12 text-4xl font-bold text-center mb-16">Why Us?</h3>
                                                    <div className="flex justify-center items-center " style={{ maxWidth: '775px' }}>
                                                        <img src="/assets/img/images/acc_values.webp" className="aspect-auto h-auto w-full" alt="" style={{ marginLeft: isMobile ? "" : "450px" }} />
                                                    </div>
                                                    <div className="mt-16">
                                                        <h3 className="mt-12 text-4xl font-bold text-center mb-16">Our Services</h3>

                                                        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-x-4 gap-y-4`}>
                                                            <div className="ebt">
                                                                <div className="title bg-[#e6e7e8] border-[#e6e7e8] px-3 py-5 border-2 text-center justify-center rounded-2xl bg-gradient-to-br" style={{ width: '390px', height: '275px' }} >
                                                                    <span style={{ fontSize: '65px' }}>01</span>
                                                                    <h4 className="mt-3 text-2xl">
                                                                        Bookkeeping
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium">
                                                                        Ensuring that your financial scales are always in perfect harmony
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="ebt">
                                                                <div className="title bg-[#e6e7e8] border-[#e6e7e8] px-2 py-5  border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px', paddingTop: '26px', paddingBottom: '26px' }}>
                                                                    <span style={{ fontSize: '65px' }}>02</span>
                                                                    <h4 className="mt-3 text-2xl">
                                                                        Payroll Management
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium">
                                                                        Making sure every paycheck is accurate and on time
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="ebt">
                                                                <div className="title bg-[#e6e7e8] border-[#e6e7e8] px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>03</span>
                                                                    <h4 className="mt-3 text-2xl">
                                                                        Purchase Order Matching
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium" >
                                                                        Connecting the dots between your orders, invoices, and payments
                                                                    </h6>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className={` flex justify-center mt-4 ${isMobile ? "flex-col" : ""} `}>
                                                            <div className="ebt">
                                                                <div className="title bg-[#e6e7e8] border-[#e6e7e8] px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>04</span>
                                                                    <h4 className="mt-3 text-2xl">
                                                                        Accounts Payable & Reconciliation
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium" >
                                                                        Designed to streamline financial records with precision and attention to detail.                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className={`ebt ${isMobile ? "mt-6" : "ml-6"} `}>
                                                                <div className="title bg-[#e6e7e8] border-[#e6e7e8] px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>05</span>
                                                                    <h4 className="mt-3 text-2xl">
                                                                        Tax Preparation, Filings and Reporting
                                                                    </h4>

                                                                    <h6 className=" text-gray-500  font-medium" style={{ marginTop: "16px" }}>
                                                                        Analyzing, strategizing, & preparing your taxes                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}

export default withLoading(AccountingServices);