'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import withLoading from "@/app/withLoading"
import { TRUE } from "sass"
import { MoonLoader } from "react-spinners"


function DigitalServices() {
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
        return <div className="flex justify-center items-center">
            <MoonLoader/>
        </div>; // Or any other loading indicator
    }


    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Digital Marketing" Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2">
                                        <div className="services__details-content">
                                            <div className={`flex flex-col `}>
                                                <div className={`flex ${isMobile ? 'flex-col justify-center' : "flex-row justify-between mt-6"} items-center`}>
                                                    <h2 className={` ${isMobile ? "text-center text-2xl" : "text-5xl"} `}>High-Impact <span className="text-pink-400"> <br />Digital Marketing Strategies</span> <br />That Deliver <br /><span className="text-blue-400">Sustainable Outcomes</span></h2>
                                                    <img src="/assets/img/images/digital_image.webp" className={`${isMobile ? '' : 'mr-16'} aspect-auto `} alt="" style={{ height: '320px', width: '320px' }} />

                                                </div>
                                                <p className={`mt-5 text-lg ${isMobile ? '' : 'text-justify'} `}>In today’s hyperconnected marketplace, your digital identity is not just important—it’s essential. To thrive, you need a robust, omni-channel brand presence that’s both distinctive and strategically executed within budget and timelines.<br /><br />
                                                Ecesis is your partner in digital marketing excellence. We specialize in creating tailored strategies that position and promote your brand across all digital platforms, ensuring you connect with new leads at optimal costs. Our expertise in digital marketing drives targeted campaigns that resonate with your audience, helping you secure new business opportunities that elevate your brand value.<br /><br />
                                                From defining your digital goals to achieving them, we stand by you at every stage, delivering measurable results that drive growth.
                                                </p>
                                            </div>


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
                                                    <div>
                                                        <h2 className="text-3xl uppercase mt-20 text-black text-center">Our Services</h2>
                                                        <div className={`flex flex-col   ${isMobile ? 'mt-7 gap-y-24' : 'mt-20 gap-y-28'} `}>
                                                            <div className={`flex  ${isMobile ? "flex-col-reverse" : "flex-row"}`}>
                                                                {!isMobile && (
                                                                     <div className="justify-center items-center">
                                                                     <LazyLoad height={200} offset={250} once>
 
                                                                         <ReactPlayer
                                                                             url='/assets/videos/social_media.mp4'
                                                                             playing
                                                                             loop
                                                                             muted
                                                                             width='330px'
                                                                             height='330px'
                                                                         />
                                                                     </LazyLoad>
                                                                 </div>
                                                                )}
                                                               

                                                                <div className={`${isMobile ? '' : 'mt-2'} `} style={{ marginLeft: isMobile ? "" : "100px" }}>
                                                                    <h3 className="text-2xl">Social Media Marketing & Optimization</h3>
                                                                    <p>High-quality, strategic SMM & SEO services to turbocharge your company’s digital presence.</p>
                                                                    {isMobile && (
                                                                     <div className="justify-center items-center">
                                                                     <LazyLoad height={200} offset={250} once>
 
                                                                         <ReactPlayer
                                                                             url='/assets/videos/social_media.mp4'
                                                                             playing
                                                                             loop
                                                                             muted
                                                                             width='330px'
                                                                             height='330px'
                                                                         />
                                                                     </LazyLoad>
                                                                 </div>
                                                                )}
                                                                    <h5 className="text-2xl mt-8">What this includes:</h5>
                                                                    <div className="about__list-box mt-2">
                                                                        <ul className="list-wrap">
                                                                            <li><i className="flaticon-arrow-button" />Building a strong image and identity</li>
                                                                            <li><i className="flaticon-arrow-button" />Social media management and promotions</li>
                                                                            <li><i className="flaticon-arrow-button" />Sharing selected links</li>
                                                                            <li><i className="flaticon-arrow-button" />Competitor tracking</li>
                                                                            <li><i className="flaticon-arrow-button" />Success analytics</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row-reverse justify-between"} `}>
                                                                {!isMobile && (
                                                                    <div>
                                                                        <LazyLoad height={200} offset={250} once>
                                                                            <ReactPlayer
                                                                                url='/assets/videos/paid_marketing1.mp4'
                                                                                playing
                                                                                loop
                                                                                muted
                                                                                width='330px'
                                                                                height='330px'
                                                                            />
                                                                        </LazyLoad>
                                                                    </div>

                                                                )}

                                                                <div className={`${isMobile ? 'mt-2' : 'mt-12'} `}>
                                                                    <h3 className="text-2xl">Paid Marketing Services</h3>
                                                                    <p>Focused campaigns and ads that reach the right prospects, with a higher probability of conversions.</p>
                                                                    {isMobile && (
                                                                    <div>
                                                                        <LazyLoad height={200} offset={250} once>
                                                                            <ReactPlayer
                                                                                url='/assets/videos/paid_marketing1.mp4'
                                                                                playing
                                                                                loop
                                                                                muted
                                                                                width='330px'
                                                                                height='330px'
                                                                            />
                                                                        </LazyLoad>
                                                                    </div>

                                                                )}

                                                                    <h5 className="text-2xl mt-8">What this includes:</h5>
                                                                    <div className="about__list-box mt-2">
                                                                        <ul className="list-wrap">
                                                                            <li><i className="flaticon-arrow-button" />Pay Per Click (PPC) advertisements</li>
                                                                            <li><i className="flaticon-arrow-button" />PPC management for SMEs & large enterprises</li>
                                                                            <li><i className="flaticon-arrow-button" />Google AdWords</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`flex  ${isMobile ? "flex-col-reverse" : "flex-row"}`}>


                                                                {!isMobile && (
                                                                    <div>
                                                                        <LazyLoad height={200} offset={250} once>
                                                                            <ReactPlayer
                                                                                url='/assets/videos/web_design.mp4'
                                                                                playing
                                                                                loop
                                                                                muted
                                                                                width='330px'
                                                                                height='330px'
                                                                            />
                                                                        </LazyLoad>
                                                                    </div>
                                                                )}


                                                                <div className={`${isMobile ? 'mt-2' : 'mt-6'} `} style={{ marginLeft: isMobile ? "" : "100px" }}>
                                                                    <h3 className="text-2xl">Website Design & Development</h3>
                                                                    <p>Attract, engage and retain prospects with high-impact web designs & formats.</p>
                                                                    {isMobile && (
                                                                        <div>
                                                                            <LazyLoad height={200} offset={250} once>
                                                                                <ReactPlayer
                                                                                    url='/assets/videos/web_design.mp4'
                                                                                    playing
                                                                                    loop
                                                                                    muted
                                                                                    width='330px'
                                                                                    height='330px'
                                                                                />
                                                                            </LazyLoad>
                                                                        </div>
                                                                    )}
                                                                    <h5 className="text-2xl mt-8">What you get:</h5>
                                                                    <div className="about__list-box mt-2">
                                                                        <ul className="list-wrap">
                                                                            <li><i className="flaticon-arrow-button" />Improved search engine rankings</li>
                                                                            <li><i className="flaticon-arrow-button" />Increased conversions and revenue</li>
                                                                            <li><i className="flaticon-arrow-button" />High credibility and strong brand identity</li>
                                                                            <li><i className="flaticon-arrow-button" />More engagement with customers</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row-reverse justify-between"} `}>

                                                                {!isMobile && (
                                                                    <div>
                                                                        <LazyLoad height={200} offset={250} once>
                                                                            <ReactPlayer
                                                                                url='/assets/videos/branding.mp4'
                                                                                playing
                                                                                loop
                                                                                muted
                                                                                width='330px'
                                                                                height='330px'
                                                                            />
                                                                        </LazyLoad>
                                                                    </div>

                                                                )}

                                                                <div className={`${isMobile ? 'mt-2' : 'mt-12'} `}>
                                                                    <h3 className="text-2xl">Branding and Creative Services</h3>
                                                                    <p>Transform your company into an iconic brand with the right mix of branding services.</p>
                                                                    {isMobile && (
                                                                        <div>
                                                                            <LazyLoad height={200} offset={250} once>
                                                                                <ReactPlayer
                                                                                    url='/assets/videos/branding.mp4'
                                                                                    playing
                                                                                    loop
                                                                                    muted
                                                                                    width='330px'
                                                                                    height='330px'
                                                                                />
                                                                            </LazyLoad>
                                                                        </div>

                                                                    )}
                                                                    <h5 className="text-2xl mt-8">What this includes:</h5>
                                                                    <div className="about__list-box mt-2">
                                                                        <ul className="list-wrap">
                                                                            <li><i className="flaticon-arrow-button" />Brand analysis</li>
                                                                            <li><i className="flaticon-arrow-button" />Brand identity & image management</li>
                                                                            <li><i className="flaticon-arrow-button" />Brand building & positioning</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ position: 'relative', height: isMobile ? '' : '350px' }} className="mt-24">
                                                        {!isMobile ? (<img src="/assets/img/banner/cross.webp" alt="" style={{
                                                            position: 'absolute',
                                                            right: 0,
                                                            top: isMobile ? '200px' : '-170px',
                                                            width: isMobile ? '337px' : '506px',
                                                            height: isMobile ? '450px' : '675px',
                                                            zIndex: -1, // Ensure this is what you want, as it might place the image behind the div's background
                                                        }} />) : null}
                                                        <div className="mt-6">
                                                            <h3 className="font-bold " style={{ fontSize: "40px" }}>
                                                                Tell a compelling story that <br /> gets you noticed and applauded.
                                                            </h3>
                                                            <p style={{ fontSize: '20px', width: isMobile ? '' : '66%', marginTop: '20px' }}>
                                                                Ecesis delivers integrated digital marketing solutions for the modern minimalist or the creative expressionist. We relentlessly challenge ourselves through meaningful solutions and inspired thinking. In the end, we’ll deliver what we promised and more!<br /><br />
                                                            </p>
                                                            <h3 className={`${isMobile ? 'text-center' : ''} text-lb`} style={{ fontSize: '44px' }}> Stay in the spotlight. <span className="text-ly">Always!</span></h3>
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

export default withLoading(DigitalServices)