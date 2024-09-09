'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import PricingTable from "@/components/elements/PricingTable"
import React, { useEffect, useState } from 'react';
import { MoonLoader } from "react-spinners"



export default function ServicesDetails() {
    let Nothome = true;


    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded


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
        return <div>
            <MoonLoader/>
        </div>; // Or any other loading indicator
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Real Estate Valuations" Nothome={Nothome}>
                <div>
                    <section className="services__details-area mt-6">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2">
                                        {/* <div className="services__details-thumb">
                                            <img src="/assets/img/services/services_details01.webp" alt="" />
                                        </div> */}
                                        <div className="services__details-content">
                                            <h2 className={` ${isMobile ? "text-center text-3xl" : "text-5xl mb-3"} `} >Transforming Real Estate Valuations<br/> with<span className="text-pink-400" > Premier BPO Services</span></h2>
                                            <p>We specialize in Broker Price Opinion services that empower real estate professionals across the U.S. Started in 2010, ECESIS has established itself as a leader in the real estate valuation industry, known for our precision, reliability, and innovative solutions. For over a decade, we have provided US-based realtors, brokers, and real estate companies with precise valuations and Comparative Market Analysis (CMA). Our commitment to high-quality, value-driven deliverables ensures that you remain proactive, decisive, and adaptable as your business evolves and expands.</p>
                                            <h3 className="text-center text-3xl mt-5 ">Enhanced BPO Management with ECESIS</h3>
                                            <div className={`w-full border-2 bg-slate-100 rounded-3xl mt-12 ${isMobile ? "px-5" : "px-10"}  pt-7 pb-9 `} >
                                                <div className="services__details-list mt-3">
                                                    <div className="row">
                                                        <div className="">
                                                            <div className="services__details-list-box">
                                                                <div className="content">
                                                                    <div className="icon">
                                                                        <div>
                                                                        </div>
                                                                        <h4 className="title text-left">
                                                                            <i className="flaticon-target mr-3" />
                                                                            BPO Portal Registration and Management</h4>
                                                                    </div>
                                                                    <p className={` ${isMobile ? "" : "ml-8"}`}>Our team facilitates seamless registration with over 100 leading BPO portals and asset management companies. This service ensures your profile is always up-to-date and compliant with industry standards</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="services__details-list-box">
                                                                {/* <div className="icon">
                                                                <i className="flaticon-life-insurance" />
                                                            </div> */}
                                                                <div className="content mt-3">
                                                                    <div className="icon">
                                                                        <h4 className="title text-left"><i className="flaticon-target mr-2" />Order Acceptance</h4>
                                                                    </div>
                                                                    <p className={` ${isMobile ? "" : "ml-8"} `}>Our proprietary software, BPO Acceptor, is designed to immediately capture available orders by swiftly solving captchas and performing regional compliance checks. This ultra-fast process ensures you secure all available opportunities without delay.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="services__details-list-box">
                                                                {/* <div className="icon">
                                                                <i className="flaticon-insurance-agent" />
                                                            </div> */}
                                                                <div className="content mt-3">
                                                                    <div className="icon">
                                                                        <h4 className="title text-left"><i className="flaticon-target mr-2" />Data Processing and Analysis</h4>
                                                                    </div>
                                                                    <p className={` ${isMobile ? "" : "ml-8"}`}>Our skilled team handles all aspects of data processing, from initial order capture to comprehensive market analysis and comparative research. We ensure each report is detailed, accurate, and aligned with current market data.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services__details-inner">
                                                <div className="row gutter-24 align-items-center">
                                                    <div className="">
                                                        <div className="services__details-inner-img justify-center flex" >
                                                            <img src="/assets/img/services/services_details_inner01.webp" className="object-cover object-top" style={{ height: "350px", width: "60%" }} alt="" />
                                                            <VideoPopup url={"jRHkw8liWLQ"} />

                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold mb-6 uppercase text-center mt-3" style={{ fontSize: '25px' }}>
                                                                WATCH HOW TO GET <span className="text-blue-400" style={{ fontSize: '30px' }}>2X REVENUE</span> GROWTH, <span className="text-pink-400" style={{ fontSize: '30px' }}>92%+ ACCURACY </span> WITH ECESIS

                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="services__details-inner-content mt-5">
                                                            <h1 className="font-bold text-4xl text-black text-center">WHY ECESIS ?</h1>
                                                            <h5 className="title text-center mt-9">What differentiates us</h5>
                                                            <p className="text-center mb-10">We're a one-stop solution for all your BPO needs. We support you end-to-end, from registering portals to submitting reports.</p>
                                                            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-x-4`}>
                                                                <div className="ebt">
                                                                    <div className="title px-3 py-5 border-2 text-center justify-center rounded-2xl" style={{ width: '390px', height: '275px' }} >
                                                                        <span style={{ fontSize: '65px' }}>14+</span>
                                                                        <h4 className="mt-3">
                                                                            An established & registered service provider
                                                                        </h4>

                                                                        <p className="mt-3 text-gray-500  font-medium">
                                                                            14+ successful years in the US real estate industry.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ebt">
                                                                    <div className="title px-2  border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px', paddingTop: '26px', paddingBottom: '26px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/verified-icon.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            High acceptance rate and best quality assurance & control
                                                                        </h4>

                                                                        <p className="mt-3 text-gray-500  font-medium">
                                                                            Track record of 90%+ acceptance rate for all BPO portals and 92% quality score in BPO reports.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ebt">
                                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/handshake-icon2.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            Trusted partner to 150+ US realtors
                                                                        </h4>

                                                                        <p className="mt-3 text-gray-500  font-medium" >
                                                                            We invest both in technology and people to deliver high-quality services.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ebt">
                                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/time-icon.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            Accelerated response & turnaround time
                                                                        </h4>

                                                                        <p className="mt-3 text-gray-500  font-medium" >
                                                                            We deliver over 15,000 monthly reports, with an average TAT of 24 hours.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ebt">
                                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/around-the-clock-icon.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            Round-the-clock support
                                                                        </h4>

                                                                        <p className=" text-gray-500  font-medium" style={{ marginTop: "46px" }}>
                                                                            365 x 24 x 7 service with well-defined SLAs & escalation matrix.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="ebt">
                                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/isp-icon.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            Sophisticated multi-tier network security
                                                                        </h4>

                                                                        <p className="mt-3 text-gray-500  font-medium" >
                                                                            Your web traffic is routed only through dedicated US IPs within the US border.
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="flex justify-center">
                                                                <div className="ebt">
                                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xlitems-center " style={{ width: '390px', height: '275px' }}>
                                                                        <span className="justify-center flex"><img src="/assets/img/icon/security-icon.webp" className="w-20 h-20" /></span>
                                                                        <h4 className="mt-3">
                                                                            High standards of integrity
                                                                        </h4>

                                                                        <p className="text-gray-500 font-medium" style={{ marginTop: "46px" }}>
                                                                            Set processes & secure protocols to protect data confidentiality.
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-30">
                                        <aside className="services__sidebar">
                                            <div className="sidebar__widget sidebar__widget-two">
                                                <div className="sidebar__cat-list-two">
                                                    <ul className="list-wrap">
                                                        <li><Link href="/services-details">Investment Planning <i className="flaticon-arrow-button" /></Link></li>
                                                        <li><Link href="/services-details">Strategic marketing <i className="flaticon-arrow-button" /></Link></li>
                                                        <li><Link href="/services-details">Insights  analytics <i className="flaticon-arrow-button" /></Link></li>
                                                        <li><Link href="/services-details">Business consulting <i className="flaticon-arrow-button" /></Link></li>
                                                        <li><Link href="/services-details">Financial Advisory <i className="flaticon-arrow-button" /></Link></li>
                                                        <li><Link href="/services-details">Market Research <i className="flaticon-arrow-button" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sidebar__widget">
                                                <h4 className="sidebar__widget-title">Brochure</h4>
                                                <div className="sidebar__brochure">
                                                    <p>when an unknown printer took ga lley offer typey anddey.</p>
                                                    <Link href="/assets/img/services/services_details01.webp" target="_blank" download><i className="far fa-file-pdf" />PDF. Download</Link>
                                                    <Link href="/assets/img/services/services_details01.webp" target="_blank" download><i className="far fa-file-alt" />DOC. Download</Link>
                                                </div>
                                            </div>
                                            <div className="sidebar__widget">
                                                <h4 className="sidebar__widget-title">Latest Posts</h4>
                                                <div className="sidebar__post-list">
                                                    <div className="sidebar__post-item">
                                                        <div className="sidebar__post-thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/sb_post01.webp" alt="" /></Link>
                                                        </div>
                                                        <div className="sidebar__post-content">
                                                            <h5 className="title"><Link href="/blog-details">deno weuine easiure and praising</Link></h5>
                                                            <span className="date"><i className="flaticon-time" />Sep 15, 2024</span>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar__post-item">
                                                        <div className="sidebar__post-thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/sb_post02.webp" alt="" /></Link>
                                                        </div>
                                                        <div className="sidebar__post-content">
                                                            <h5 className="title"><Link href="/blog-details">know how to pursue pleasure rationally</Link></h5>
                                                            <span className="date"><i className="flaticon-time" />Sep 15, 2024</span>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar__post-item">
                                                        <div className="sidebar__post-thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/sb_post03.webp" alt="" /></Link>
                                                        </div>
                                                        <div className="sidebar__post-content">
                                                            <h5 className="title"><Link href="/blog-details">there anyone who loves</Link></h5>
                                                            <span className="date"><i className="flaticon-time" />Sep 15, 2024</span>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar__post-item">
                                                        <div className="sidebar__post-thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/sb_post04.webp" alt="" /></Link>
                                                        </div>
                                                        <div className="sidebar__post-content">
                                                            <h5 className="title"><Link href="/blog-details">deno weuine easiure and praising</Link></h5>
                                                            <span className="date"><i className="flaticon-time" />Sep 15, 2024</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sidebar__widget sidebar__widget-two">
                                                <div className="sidebar__contact">
                                                    <h2 className="title">If You Need Any Help Contact With Us</h2>
                                                    <Link href="tel:0123456789" className="btn"><i className="flaticon-phone-call" />+91 705 2101 786</Link>
                                                </div>
                                            </div>
                                        </aside>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pricing__area pricing__bg" data-background="/assets/img/bg/pricing_bg.webp">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5">
                                    <div className="section-title text-center mb-30">
                                        <span className="sub-title">We’ve Offered The Best Pricing For You</span>
                                        <h2 className="title">Detailed Service Packages and Pricing</h2>
                                        <p>
                                            ECESIS offers flexible service packages designed to cater to different business scales and needs, ensuring that every client receives the personalized support necessary to thrive in the competitive real estate market.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing__item-wrap mt-5">
                                <PricingTable />
                            </div>
                        </div>
                        <div className="pricing__shape-wrap">
                            <img src="/assets/img/images/pricing_shape01.webp" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/pricing_shape02.webp" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    {/* <div className="brand__area-six">
                        <div className="container">
                            <div className="swiper-container brand-active">
                                <BrandActiveSlider />
                            </div>
                        </div>
                    </div> */}
                </div>
            </Layout>
        </>
    )
}
