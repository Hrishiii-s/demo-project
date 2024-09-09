'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import Callback2 from "@/components/sections/Callback2"
import withLoading from "@/app/withLoading";
import MoonLoader from "react-spinners/MoonLoader";





function AIServices() {
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
        return <div className="flex justify-center items-center"><MoonLoader/></div>; // Or any other loading indicator
    }


    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Artificial Intelligence" Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2">
                                        <div className="services__details-content">
                                            <div className={`${isMobile ? 'flex-col justify-center' : 'flex-row justify-between'} flex items-center`}>
                                                <div className={`${isMobile ? 'justify-center items-center' : ''}`}>
                                                    <h2 className={` ${isMobile ? "text-center text-3xl" : "text-5xl mb-3"} `}><span className="text-pink-400"> <br />AI </span>Solutions Powered <br />By <span className="text-blue-400">Human </span>Expertise</h2>
                                                    <h4 className={` ${isMobile ? 'text-base text-center' : 'text-2xl'}  font-normal`}>Build what matters - Your challenges. Our solutions.</h4>
                                                </div>
                                                <div className={`${isMobile ? '' : 'mr-16'}`}>
                                                    <LazyLoad height={200} offset={250} once>

                                                        <ReactPlayer
                                                            url='/assets/videos/ai_main.mp4'
                                                            playing
                                                            loop
                                                            muted
                                                            width={`${isMobile ? '250px' : '330px'}`}
                                                            height={`${isMobile ? '250px' : '330px'}`}
                                                        />
                                                    </LazyLoad>
                                                </div>
                                            </div>
                                            <h3 className="text-3xl mt-12 text-black">Put AI to enable your business</h3>
                                            <p className="mt-3 text-base">Partner with ECESIS to drive meaningful impact and long-term success through innovative, sustainable approaches that deliver competitive advantage.<br /> ECESIS’s depth of knowledge, coupled with flexible and comprehensive AI capabilities, positions you to thrive in the digital era.</p>
                                            <p>
                                                <br /><br />ECESIS’s depth of knowledge, combined with our flexible and comprehensive AI capabilities, positions you to thrive in the digital era. We offer a range of services designed to optimize your operations, enhance customer experiences, and unlock new growth opportunities. By leveraging cutting-edge technologies and industry best practices, we help you navigate the complexities of digital transformation with confidence.
                                            </p>
                                            <h3 className="text-3xl mb-3 mt-28 text-center">Harness the Potential of End-to-End AI/ML Solutions</h3>
                                            <p className="text-center">Leverage the transformative power of our AI capabilities and revolutionize your business with limitless possibilities.</p>
                                            <div className="flex justify-center items-center">
                                                <img src="/assets/img/images/ai_solutions.webp" className="" alt="" style={{ width: isMobile ? '100%' : '85%' }} />
                                            </div>
                                            <p className="text-2xl text-center font-bold mb-6">With optimized data strategies, empowered decision-making, and AI-driven innovations, we will help you achieve unparalleled success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Callback2 isMobile={isMobile} />
                        <div className="px-3">

                            <h2 className="text-3xl text-center font-semibold mb-5 mt-5">Tools / Frameworks We Use for AI Solution Development</h2>
                            <p className="text-center" >At ECESIS, we utilize advanced programming tools to develop robust and scalable AI solutions.<br /> These tools facilitate efficient model optimization and deployment, ensuring our technology remains at the forefront of the AI industry.</p>
                            <div className={`flex gap-4 ${isMobile ? 'flex-col' : 'flex-row'}  justify-center items-center mt-6`}>
                                <div className="px-2">
                                    {/* Generative AI */}
                                    <div className={`border-2 mb-5 rounded ${isMobile ? 'w-full h-full' : ' w-fit'}`}>
                                        <p className="px-3 pt-3 text-xl text-center font-medium">Generative AI Models</p>
                                        <div className="w-full border" />
                                        <div className="flex flex-row">
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/icon/chatgpt.svg" className="w-10 h-10 mt-4" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-48">Transformer models
                                                    (GPT3, GPT 3.5 Turbo, LaMDA)</p>
                                            </div>
                                            <div className="flex flex-col items-center ">
                                                <img src="/assets/img/icon/meta.svg" className="w-10 h-10 mt-4" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-48">Llama 2/3, Palm 2, GPT-4, Gemini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    {/* Algorithms */}
                                    <div className={`border-2 mb-5 rounded ${isMobile ? 'w-full h-full' : ' w-fit'}`}>
                                        <p className="px-3 pt-3 text-xl text-center font-medium">Algorithms</p>
                                        <div className="w-full border" />
                                        <div className="flex flex-row flex-wrap justify-evenly">
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/icon/supervised.webp" className="w-10 h-10 mt-4" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-32">Supervised / Unsupervised <br /> Learning</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/icon/clustering.webp" className="w-10 h-10 mt-4" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-32">Clustering</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/icon/metric.webp" className="w-10 h-10 mt-4" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-32">Metric<br /> Learning</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/icon/few_shot.webp" className="w-12 h-12 mt-3" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-32">Fewshot<br />  Learning</p>
                                            </div>
                                            <div className="flex flex-col items-center ">
                                                <img src="/assets/img/icon/yolo.webp" className="w-12 h-12 mt-3" alt="" />
                                                <p className="px-3 pb-1 mt-2 text-center w-32">YOLO<br />  Learning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={`${isMobile ? '/assets/img/images/ai_pipeline_mobile.webp' : '/assets/img/images/ai_pipeline.webp'}`} className="" alt="" style={{ width: isMobile ? '90%' : '85%' }} />
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

export default withLoading(AIServices);