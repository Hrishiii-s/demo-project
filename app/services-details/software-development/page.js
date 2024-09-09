'use client'
import withLoading from "@/app/withLoading";
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";



function SoftwareServices() {
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
        return <div className="flex justify-center items-center">
            <MoonLoader/>
        </div>; // Or any other loading indicator
    }


    return (
        <>
            <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
                <section className={`banner__area-two  banner__bg-two ${isMobile ? "object-right h-full" : "object-fill]"} w-full`} style={{
                    backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/software_banner.webp"})`, maxHeight: '600px'
                }}>
                    <div className="container">
                        <div className={`row`} style={space}>
                            <div className={`col-lg-8 ${isMobile ? "mt-5" : ""}`}>
                                <div className={`banner__content-two ${isMobile ? "mt-12" : "mb-24"} `}>
                                    <h2 className={`font-bold mb-6`} data-aos="fade-up" data-aos-delay={100} style={hstyle}>Enterprise Software Solutions</h2>
                                    <h4 className={`font-medium mb-6 text-xl`} data-aos="fade-up" data-aos-delay={100}>Delivering <span className="text-blue-400 font-bold">WOW-Worthy</span> Experiences</h4>

                                    {/* {isMobile ?
                                    <Link href="#" className="btn border-btn mt-40" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                    :
                                    <Link href="#" className="btn border-btn mt-10" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                } */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                    <div className="banner__shape-two">
                        <img src="/assets/img/banner/h3_banner_shape01.webp" alt="" className="heartbeat mt-14" />
                    </div>
                </section>
                <div className="" >
                    {/* Content */}
                    <section className="services__details-area">
                        <div className="services__details-wrap m-auto w-full " style={{ maxWidth: '2160px' }}>
                            <div className="flex flex-col container">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="" >
                                        <p className="font-semibold text-lb text-left" style={{ fontSize: '3.5rem', lineHeight: '4rem' }}>Delivering<br /><span className="text-blue-400 font-bold" style={{ fontSize: '3.5rem', lineHeight: '4rem' }}>WOW-Worthy<br /></span>Experiences</p>
                                        <p className="text-lb text-base" style={{ width: '27rem' }}>Cutting-edge solutions and services for digital transformation and business success.
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-start items-start pl-10 relative">
                                        <LazyLoad height={200} offset={250} once>
                                            <ReactPlayer
                                                url='/assets/videos/soft_video.mp4'
                                                playing
                                                loop
                                                muted
                                                width='330px'
                                                height='330px'
                                            />
                                        </LazyLoad>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Core Services */}
                    <section className="services__details-area md:text-base" style={{ backgroundColor: '#251047', minHeight: '800px' }}>
                        <div className="services__details-wrap m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="relative">
                                <p className="font-bold absolute text-right text-white" style={{ fontSize: '4rem', lineHeight: '4rem', left: '300px', top: '25px' }}>Core  <br /><span className="text-pink-600">Services</span></p>
                                <p className="absolute text-lg text-white" style={{ right: '200px', top: '50px', width: '30rem' }}>We are dedicated to delivering cutting-edge solutions tailored to meet your specific needs. Our expertise spans a wide range of domains, ensuring that we can address diverse requirements and deliver exceptional results.</p>
                                <img src="/assets/img/images/soft_core.webp" alt="" className="" style={{ width: '840px', marginTop: '100px' }} />
                                <div className="soft__list-box text-lg absolute text-white" style={{ left: '500px', bottom: '0px' }}>
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-arrow-button" />Flagship Product - BPO Acceptor</li>
                                        <li><i className="flaticon-arrow-button" />AI-Powered Real Estate Valuation</li>
                                        <li><i className="flaticon-arrow-button" />UI/UX Design</li>
                                        <li><i className="flaticon-arrow-button" />Advanced AI Chatbot (TOB-E)</li>
                                        <li><i className="flaticon-arrow-button" />Website Development</li>

                                    </ul>
                                </div>
                                <div className="soft__list-box text-lg absolute text-white" style={{ right: '150px', bottom: '0px' }}>
                                    <ul className="list-wrap ">
                                        <li><i className="flaticon-arrow-button" />E-commerce Solutions</li>
                                        <li><i className="flaticon-arrow-button" />Quality Assurance & Testing</li>
                                        <li><i className="flaticon-arrow-button" />Custom Software Development</li>
                                        <li><i className="flaticon-arrow-button" />IT & Management Consultancy Services</li>
                                        <li><i className="flaticon-arrow-button" />Maintenance and Support</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="services__details-area" style={{ backgroundColor: '#D6114C', minHeight: '800px' }}>
                        <div className="services__details-wrap m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="relative">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="relative" style={{ width: '50%' }}>
                                            <div className="absolute" style={{ left: '60px', top: '100px' }}>
                                                <p className="font-bold text-white" style={{ fontSize: '4rem', lineHeight: '4rem' }}>Tech</p>
                                                <p className="font-bold ml-10" style={{ color: '#6927BD', left: '50px', fontSize: '4rem', lineHeight: '3rem' }}>Stack</p>
                                                <span className="flex items-center mt-2">
                                                    <div className="h-20 w-1 bg-yellow-600"></div>
                                                    <p className="text-white ml-4" style={{ fontSize: '2.25rem', lineHeight: '2.75rem' }}>Transforming ideas into digital brilliance.</p>
                                                </span>
                                                <p className="text-lg text-white mt-12" style={{ width: '35rem' }}>At the heart of our software development prowess lies our remarkable tech stack, which is the foundation upon which we build scalable and secure solutions. From crafting intuitive applications to optimizing system-level programming, we have the skills and knowledge to bring your vision to life. From front-end development to back-end infrastructure, our tech stack encompasses a wide array of technologies, including popular programming languages that are: </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start items-start pl-10 relative" style={{ width: '50%' }}>
                                            <div className="absolute" style={{ right: '50px', top: '200px' }}>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>01</p>
                                                    <p className="text-white ml-4 text-lg" >Django, Python, PHP</p>
                                                </span>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>02</p>
                                                    <p className="text-white ml-4 text-lg" >C#, ASP.NET, Microsoft SQL</p>
                                                </span>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>03</p>
                                                    <p className="text-white ml-4 text-lg" >Angular /React, Node.JS, HTML, CSS, JavaScript, Bootstrap</p>
                                                </span>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>04</p>
                                                    <p className="text-white ml-4 text-lg" >CMS (WordPress, Ghost, Umbraco)</p>
                                                </span>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>05</p>
                                                    <p className="text-white ml-4 text-lg" >Flutter, Firebase</p>
                                                </span>
                                                <span className="flex items-center mt-2">
                                                    <p className="text-yellow-500 font-extrabold" style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>06</p>
                                                    <p className="text-white ml-4 text-lg" >Integration services – XML, REST, SOAP</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Guiding Principles */}
                    <section className="services__details-area" style={{ backgroundColor: '#6927BD', minHeight: '800px' }}>

                        <div className="relative m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="absolute" style={{ right: '250px', top: '50px' }}>
                                <p className="font-bold text-white ml-28" style={{ fontSize: '5rem', lineHeight: '5rem' }}>Guiding</p>
                                <p className="font-bold" style={{ color: '#11C4D3', left: '50px', fontSize: '5rem', lineHeight: '5rem' }}>Principles</p>

                            </div>
                            <span className="flex items-center absolute mt-2 ml-2" style={{ left: '50px', top: '25px' }}>
                                <div className="h-20 w-1 bg-red-500"></div>
                                <p className="text-white ml-4 mt-2" style={{ fontSize: '2.25rem', lineHeight: '2.75rem' }}>Innovation with purpose,<br /> values at the Core.</p>
                            </span>
                            <p className="text-white absolute" style={{ left: '60px', top: '150px', width: '37rem' }}>Our Guiding Principles serve as the compass that leads us to create exceptional solutions for our clients and deliver unparalleled value. With a relentless commitment to quality, collaboration, and customer satisfaction, we empower businesses to thrive in the digital landscape.</p>
                            <img src="/assets/img/images/guiding_img.webp" alt="" className="absolute" style={{ width: '500px', right: '0px', top: '20px' }} />

                            <div className="flex flex-row absolute" style={{ top: '275px', left: '60px' }}>
                                <div className="flex flex-col">
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#11C4D3', border: '#11C4D3' }}></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >Customer Centricity</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Crafting experiences that resonate with customer needs.</p>
                                    </div>
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#D6114C', border: '#D6114C' }} ></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >Modular Development</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Flexibility-driven innovation for maximum efficiency.</p>
                                    </div>
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#5D8AFF', border: '#5D8AFF' }}></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >Art of Assessment</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Legislation, Brand, Specialism: The trifecta of our market competency.</p>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#E54F25', border: '#E54F25' }}></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >Decoding the Techscape</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Empowering businesses with strategic tech choices.</p>
                                    </div>
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#F2EB38', border: '#F2EB38' }}></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >Integrative Capabilities</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Synchronizing success by making integration a hygiene factor.</p>
                                    </div>
                                    <div style={{ width: '20rem' }}>
                                        <span className="flex items-center mt-2">
                                            <div className=" border-1  rounded-full w-3 h-3" style={{ backgroundColor: '#42B677', border: '#42B677' }}></div>
                                            <p className="text-white font-semibold ml-3 text-base mt-3" >User Interface & Usability</p>
                                        </span>
                                        <p className="text-white ml-6 text-sm" >Our systems are used by a wide selection of stakeholders.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project Managing Principles */}

                    <section className="services__details-area" style={{ backgroundColor: '#11C4D3', minHeight: '800px' }}>
                        <div className="services__details-wrap m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="relative">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="relative" style={{ width: '50%' }}>
                                            <div className="absolute" style={{ left: '100px', top: '250px' }}>
                                                <p className="font-bold text-white text-center" style={{ fontSize: '5rem', lineHeight: '4.75rem' }}>Project<br /><span style={{ color: '#FDBD28', fontSize: '5rem', lineHeight: '4.75rem' }}>Management<br /></span>Principles</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start items-start pl-10 relative" style={{ width: '50%' }}>
                                            <span className="flex items-center absolute mt-2 ml-2" style={{ left: '50px', top: '50px' }}>
                                                <div className="h-20 w-1 bg-yellow-400"></div>
                                                <p className="text-white ml-4 mt-2" style={{ fontSize: '2.25rem', lineHeight: '2.75rem' }}>Strategic solutions, <br />seamless implementation.</p>
                                            </span>
                                            <div className="absolute" style={{ left: '60px', top: '200px' }}>
                                                <p className="font-bold text-base">Agile Methodology</p>
                                                <p style={{ width: '30rem' }}>By following the Agile methodology, we prioritize incremental progress, enabling us to continuously meet evolving needs and deliver tangible benefits throughout the project lifecycle.</p>
                                                <p className="font-bold text-base mt-12">Implementation of Scrum</p>
                                                <p style={{ width: '30rem' }}>With the implementation of Scrum for Development and ITIL for Operations, our teams become stable and self-organising, driven by clear goals and milestones.</p>
                                                <p className="font-bold text-base mt-12">Maximum Efficiency and Satisfaction</p>
                                                <p style={{ width: '30rem' }}>Our commitment to Lean Project Management guarantees cost-effectiveness, productivity enhancement, and the delivery of value-added services, ensuring maximum efficiency and satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Development Approach */}


                    <section className="services__details-area" style={{ backgroundColor: '#FDBD28', minHeight: '800px' }}>
                        <div className="services__details-wrap relative m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="">
                                <div className="absolute" style={{ right: '250px', top: '100px' }}>
                                    <p className="font-bold text-white" style={{ fontSize: '5rem', lineHeight: '4.75rem' }}>Development</p>
                                    <p className="font-bold ml-12" style={{ color: '#0F1EAF', left: '50px', fontSize: '5rem', lineHeight: '4.75rem' }}>Approach</p>
                                </div>
                                <img src="/assets/img/images/soft_hand.webp" alt="" className="absolute left-0" style={{ width: '700px' }} />
                                <img src="/assets/img/images/soft_approach.webp" alt="" className="absolute right-28 " style={{ width: '300px', top: '300px' }} />
                                <div className="flex flex-col absolute text-right justify-center items-end" style={{ right: '425px', top: '335px' }}>
                                    <p className="">Thorough Project Planning</p>
                                    <p className="" style={{ marginTop: '42px' }}>Scope and Goal Clarity</p>
                                    <p className="" style={{ marginTop: '42px' }}>Efficient Collaboration</p>
                                    <p className="" style={{ marginTop: '42px' }}>Proactive Progress Monitoring</p>
                                    <p className="" style={{ marginTop: '42px' }}>Project Completion</p>

                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Business Models */}
                    <section className="services__details-area " style={{ backgroundColor: '#0F1EAF', minHeight: '800px' }}>
                        <div className="services__details-wrap  m-auto w-full" style={{ maxWidth: '2160px' }}>
                            <div className="relative">
                                <div className="flex flex-row" style={{ height: '50%' }}>
                                    <div className="absolute" style={{ left: '60px', top: '40px' }}>
                                        <p className="font-bold text-white" style={{ fontSize: '5rem', lineHeight: '4.75rem' }}>Business</p>
                                        <p className="font-bold ml-12" style={{ color: '#42B677', left: '50px', fontSize: '5rem', lineHeight: '4.75rem' }}>Models</p>
                                        <span className="flex items-center mt-2">
                                            <div className="h-20 w-1 bg-green-600"></div>
                                            <p className="text-white ml-4 mt-2" style={{ fontSize: '2.25rem', lineHeight: '2.75rem' }}>Creating value, <br />delivering excellence.</p>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-lg absolute text-white mt-12" style={{ width: '35rem', right: '100px', top: '65px' }}>At ECESIS, we understand that the right approach can make all the difference in achieving success in today's dynamic marketplace. Our business models are designed to empower organizations, streamline processes, and unleash the full potential of technology. With our customized solutions and agile development practices, we remain dedicated to providing excellent outcomes.</p>

                                    </div>
                                </div>
                                <div className="flex flex-row absolute" style={{ top: '360px', left: '50px', gap: '5rem' }}>
                                    <div className="flex flex-col "  >
                                        <div className=" rounded-tl-xl rounded-tr-xl p-3" style={{ backgroundColor: '#42B677', width: '250px', height: '50px' }}>
                                            <p className="font-bold" style={{ fontSize: '1.3rem', lineHeight: '1rem', color: '#0F1EAF' }}>Project Based</p>
                                        </div>
                                        <div className=" rounded-bl-xl rounded-br-xl p-3" style={{ backgroundColor: '#2534C6', width: '250px', height: '300px' }}>
                                            <div className="soft__list-box text-base text-white ">
                                                <ul className="list-wrap ">
                                                    <li><i className="flaticon-arrow-button" />Proposal</li>
                                                    <li><i className="flaticon-arrow-button" />Scope</li>
                                                    <li><i className="flaticon-arrow-button" />Contract</li>
                                                    <li><i className="flaticon-arrow-button" />Planning</li>
                                                    <li><i className="flaticon-arrow-button" />Execution</li>
                                                    <li><i className="flaticon-arrow-button" />QA & Testing</li>
                                                    <li><i className="flaticon-arrow-button" />Delivery & Hyper care</li>
                                                    <li><i className="flaticon-arrow-button" />Payment & Closure</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col " >
                                        <div className=" rounded-tl-xl rounded-tr-xl p-3" style={{ backgroundColor: '#42B677', width: '250px', height: '50px' }}>
                                            <p className="font-bold" style={{ fontSize: '1.3rem', lineHeight: '1rem', color: '#0F1EAF' }}>Pay-As-You-Go</p>
                                        </div>
                                        <div className=" rounded-bl-xl rounded-br-xl p-3" style={{ backgroundColor: '#2534C6', width: '250px', height: '300px' }}>
                                            <div className="soft__list-box text-base text-white">
                                                <ul className="list-wrap ">
                                                    <li><i className="flaticon-arrow-button" />Hourly Rates</li>
                                                    <li><i className="flaticon-arrow-button" />Scope Flexibility</li>
                                                    <li><i className="flaticon-arrow-button" />Transparency via Weekly Reports</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col " >
                                        <div className=" rounded-tl-xl rounded-tr-xl p-3" style={{ backgroundColor: '#42B677', width: '250px', height: '50px' }}>
                                            <p className="font-bold" style={{ fontSize: '1.3rem', lineHeight: '1rem', color: '#0F1EAF' }}>Retainer</p>
                                        </div>
                                        <div className=" rounded-bl-xl rounded-br-xl p-3" style={{ backgroundColor: '#2534C6', width: '250px', height: '300px' }}>
                                            <div className="soft__list-box text-base text-white">
                                                <ul className="list-wrap ">
                                                    <li><i className="flaticon-arrow-button" />Clear Scope Definition</li>
                                                    <li><i className="flaticon-arrow-button" />Transparent Reports</li>
                                                    <li><i className="flaticon-arrow-button" />Clarity on Duration and Termination</li>
                                                    <li><i className="flaticon-arrow-button" />Scalable & Flexible</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col " >
                                        <div className=" rounded-tl-xl rounded-tr-xl p-3" style={{ backgroundColor: '#42B677', width: '250px', height: '50px' }}>
                                            <p className="font-bold" style={{ fontSize: '1.3rem', lineHeight: '1rem', color: '#0F1EAF' }}>Equivalent Staffing</p>
                                        </div>
                                        <div className=" rounded-bl-xl rounded-br-xl p-3" style={{ backgroundColor: '#2534C6', width: '250px', height: '300px' }}>
                                            <div className="soft__list-box text-base text-white">
                                                <ul className="list-wrap ">
                                                    <li><i className="flaticon-arrow-button" />Dedicated Service</li>
                                                    <li><i className="flaticon-arrow-button" />Continuity</li>
                                                    <li><i className="flaticon-arrow-button" />Stability</li>
                                                    <li><i className="flaticon-arrow-button" />Fixed Price</li>
                                                </ul>
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

export default withLoading(SoftwareServices);