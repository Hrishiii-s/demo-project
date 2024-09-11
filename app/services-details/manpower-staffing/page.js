'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import RadialCardGrid from './radial';
import withLoading from "@/app/withLoading"
import { MoonLoader } from "react-spinners"
import Head from "next/head"



function TalentServices() {
    let Nothome = true;



    const iconData = [
        {
            id: 1,
            name: "Production & Advanced Manufacturing",
            url: "/assets/img/icon/manufacturing.webp",
            style: "h-24 w-24"
        },
        {
            id: 2,
            name: "Electronics & semiconductors",
            url: "/assets/img/icon/semiconductor.webp",
            style: "h-24 w-24"
        },
        {
            id: 3,
            name: "Hospitality",
            url: "/assets/img/icon/hospitality.webp",
            style: "h-20 w-20 mb-6"
        },
        {
            id: 4,
            name: "Information Technology",
            url: "/assets/img/icon/info-tech.webp",
            style: "h-20 w-20 mb-6"
        },
        {
            id: 5,
            name: "E-Commerce",
            url: "/assets/img/icon/e-commerce.webp",
            style: "h-24 w-24"
        },
        {
            id: 6,
            name: "Education",
            url: "/assets/img/icon/education.webp",
            style: "h-24 w-24"
        },
        {
            id: 7,
            name: "Retail",
            url: "/assets/img/icon/retail.webp",
            style: "h-24 w-24"
        },
        {
            id: 8,
            name: "FMCG",
            url: "/assets/img/icon/fmcg.webp",
            style: "h-24 w-24"
        },
    ]

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
        return <div className="flexc justify-center items-center">
            <MoonLoader/>
        </div>; // Or any other loading indicator
    }

    return (
        <>
        <Head>
        <title>
        Industrial Staffing Services | Finding Skilled Talent for Manufacturing & Assembly Lines
        </title>
                <meta name="description" content="We specialize in recruiting skilled workers for assembly line and manufacturing roles. Our tailored staffing solutions ensure your production line operates efficiently with the right talent in place." />
   
        </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Talent Acquisition" Nothome={Nothome}>
                <div>
                    <section className="services__details-area mt-6">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2 ">
                                        {/* <div className="services__details-thumb">
                                            <img src="/assets/img/services/services_details01.webp" alt="" />
                                        </div> */}
                                        <div className="services__details-content">
                                            <h2 className={` ${isMobile ? "text-center text-3xl" : "text-5xl mb-3"} `}>Elevating Industries Through <span className="text-pink-400">Premier Staffing Solution</span></h2>
                                            <p>Over the years, ECESIS has developed deep expertise in management consulting and Talent Acquisition for the advanced manufacturing industry. We are one of the most trusted brands in the industry, and this recognition stems from the world-class, high-quality talent we provide. We specialize in placing trained precision and assembly line engineers and other skilled manpower for various sectors. Choose us for a staffing strategy that goes beyond conventional solutions, delivering unparalleled results tailored to your organizational goals. We offer sophisticated solutions encompassing end-to-end recruitment, general staffing, executive hiring, and various other services to meet contractual or permanent hiring needs.</p>
                                            {/* <div className="services__details-list">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <i className="flaticon-life-insurance" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Extend Coverage</h4>
                                                                <p>We successfully copey withtks arying mplexity aweprguara nd regularly master</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="services__details-list-box">
                                                            <div className="icon">
                                                                <i className="flaticon-insurance-agent" />
                                                            </div>
                                                            <div className="content">
                                                                <h4 className="title">Modern Insurance</h4>
                                                                <p>We successfully copey withtks arying mplexity aweprguara nd regularly master</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="services__details-inner">
                                                <div className="row gutter-24 align-items-center">
                                                    <div className="col-44">
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
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <h3 className="mt-12 text-4xl font-bold text-center mb-16">Why Us?</h3>

                                        <div className="">
                                            <div className="services__details-inner-content mt-5"></div>
                                            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-x-4 gap-y-4`}>
                                                <div className="ebt">
                                                    <div className="title px-3 py-4 border-2 text-center justify-center rounded-2xl" style={{ width: '390px', height: '275px' }} >
                                                        <span className="flex justify-center"><img src="/assets/img/icon/precision.webp" className="w-20 h-20 mt-3" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Precision Placements
                                                        </h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium">
                                                            Tailoring our staffing solutions to match your unique organizational needs
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="ebt">
                                                    <div className="title px-2  border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px', paddingTop: '26px', paddingBottom: '26px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/verified-icon.webp" className="w-20 h-20 mt-3" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Proven Expertise</h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium">
                                                            Years of industry experience and a track record of successful placements                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="ebt">
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/human.webp" className="w-20 h-20 mt-3" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Top Talent Network
                                                        </h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium" >
                                                            Access to a diverse and skilled pool of professionals
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="ebt">
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/client-centric.webp" className="w-20 h-20" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Client-Centric Approach</h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium" >
                                                            Your goals guide our strategies, ensuring a personalized experience                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="ebt">
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/around-the-clock-icon.webp" className="w-20 h-20" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Agile and Responsive</h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium" >
                                                            Quick and effective solutions to address your staffing challenges                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="ebt">
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/handshake-icon2.webp" className="w-20 h-20" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Strategic Partner
                                                        </h4>

                                                        <h6 className="mt-3 text-gray-500  font-medium" >
                                                            We go beyond filling positions, actively contributing to your long-term success</h6>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={`${isMobile ? "flex-col mt-3" : "flex-row mt-4"} flex justify-center `}>
                                                <div className="ebt">
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/security-icon.webp" className="w-20 h-20" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Flexibility</h4>

                                                        <h6 className="text-gray-500 font-medium mt-3" >
                                                            Adapting to both short-term requirements and long-term organizational goals                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className={`ebt ${isMobile ? "mt-3" : "ml-4"} `}>
                                                    <div className="title px-2 py-4 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                        <span className="flex justify-center"><img src="/assets/img/icon/excellence.webp" className="w-20 h-20" /></span>
                                                        <h4 className="mt-3 text-2xl">
                                                            Commitment to Excellence                                                        </h4>

                                                        <h6 className="text-gray-500 font-medium mt-3">
                                                            A dedication to delivering unparalleled results in the realm of Talent Acquisition                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <h2 className="text-4xl mt-14 text-center">Fueling Your Triumph with <span className="text-blue-400">Strategic Staffing Excellence</span></h2>
                                        <h4 className="text-3xl mt-24 text-center mb-12">Industries we service</h4>


                                        <div className="" >
                                            <div className={`${isMobile ? "grid-cols-2" : "grid-cols-4"} grid `}>
                                                {/* <RadialCardGrid /> */}
                                                {iconData.map(icon => (
                                                    <div key={icon.id} className="text-center p-2 flip-container rounded-lg transition duration-300">
                                                        <img src={icon.url} alt={icon.name} title={icon.name} className={`mx-auto ${icon.style} flip-image`} />
                                                        <h5 className="mt-2 text-gray-700 text-xl">{icon.name}</h5> {/* Text label under the icon */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className={`text-3xl mt-24 ${isMobile ? "" : "ml-24"}  mb-5`}>Scope of skilled manpower supply</h3>
                                        <div className={`${isMobile ? "flex flex-col " : "flex flex-row"} justify-center items-center`}>
                                            <div className="about__list-box" >
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Contractual hiring</li>
                                                    <li><i className="flaticon-arrow-button" />Permanent staffing</li>
                                                    <li><i className="flaticon-arrow-button" />Skilling & Learning Solutions</li>
                                                    <li><i className="flaticon-arrow-button" />National Apprenticeship Promotion Scheme (NAPS)</li>
                                                    <li><i className="flaticon-arrow-button" />National Apprenticeship Training Scheme(NATS)</li>

                                                </ul>
                                            </div>
                                            <div className={`about__list-box ${isMobile ? "" : " ml-6"}`}>
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />IT Staffing</li>
                                                    <li><i className="flaticon-arrow-button" />Payroll processing</li>
                                                    <li><i className="flaticon-arrow-button" />Search and Recruitment</li>
                                                    <li><i className="flaticon-arrow-button" />Work integrated learning programmes</li>
                                                    <li><i className="flaticon-arrow-button" />Training and Development (Short-Term and Mid-Term)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >


                </div >

            </Layout >
        </>
    )
}

export default withLoading(TalentServices);