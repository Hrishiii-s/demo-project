'use client'
import Layout from '@/components/layout/Layout'
import Banner_prop from '@/components/sections/Banner_prop'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Counter3 from '@/components/sections/Counter3';
import Marquee2 from '@/components/sections/Marquee2';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import { MoonLoader } from 'react-spinners';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';


export default function Proptech() {
    let Nothome = false;

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


    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    useEffect(() => {
        setSettings({
            ...settings,
            slidesToShow: isMobile ? 1 : 4, // Show 4 cards in a row if not mobile, otherwise use the carousel
        });
    }, [isMobile]);

    const coreValues = [
        {
            title: "Innovation",
            description: "Embracing new technologies to deliver groundbreaking solutions.",
            icon: "/assets/img/icon/Innovation_icon.webp",
            icon_style: "-top-12 left-[31%] w-24 h-24",
        },
        {
            title: "Client-Centricity",
            description: "Building strong partnerships based on trust and collaboration.",
            icon: "/assets/img/icon/Client_icon.webp",
            icon_style: "-top-12 left-[31%] w-24 h-24",
        },
        {
            title: "Expertise",
            description: "Leveraging our deep industry knowledge to drive results.",
            icon: "/assets/img/icon/Expertise_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
        {
            title: "Excellence",
            description: "Delivering exceptional products and services that exceed expectations.",
            icon: "/assets/img/icon/Excellence_icon.webp",
            icon_style: "-top-12 left-[31%] w-24 h-24",
        },
    ];

    if (!allLoaded) {
        return <div className='flex justify-center items-center'>
            <MoonLoader />

        </div>; // Or any other loading indicator
    }

    return (
        <>
            <Head>
                <title>PropTech Services | Transforming Real Estate with AI and Technology</title>
                <meta name="description" content="Transform your real estate business with our innovative PropTech services. Powered by AI and automation, our solutions optimize processes, enhance property insights, and enable digital transformation tailored to your business needs." />
            </Head>
            <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
                <section className={`banner__area-two  banner__bg-two object-cover ${isMobile ? "object-right h-full" : "h-full="}`} style={{
                    backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/Proptech.webp"})`
                }}>
                    <div className="container">
                        <div className={`row`} style={space}>
                            <div className={`col-lg-8 ${isMobile ? "mt-5" : ""}`}>
                                <div className={`banner__content-two ${isMobile ? "mt-12" : "mb-24"} `}>
                                    <h2 className={`font-bold mb-6`} data-aos="fade-up" data-aos-delay={100} style={hstyle}><span className='text-pink-500'> AI </span> & <span className='text-blue-400'> PropTech</span> Solutions For<br /> <span className='text-ly'> Real Estate</span> Industry </h2>
                                    <h4 className={`font-medium mb-6 text-xl`} data-aos="fade-up" data-aos-delay={100}>Empowering Real Estate with 14+ Years of Technological Excellence</h4>

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

                {/* <Marquee2 /> */}
                {/* Hero Section */}
                <section className="text-center py-12">
                    <div className={` ${isMobile ? 'w-full' : 'container'} flex flex-row flex-wrap justify-between `}>
                        <div className='flex flex-col justify-center px-2' style={{ width: isMobile ? '100vw' : '700px' }}>

                            <h1 className={`text-4xl font-bold mb-3 ${isMobile ? "text-center" : "text-left"} `}>Experience the ECESIS difference.</h1>

                            <p className={`title ${isMobile ? "text-center" : "text-left"}`}>We offer cutting-edge PropTech solutions designed to optimize operations, enhance decision-making, and drive growth.
                                With our expertise in AI, custom software development, and web design, we deliver tailored solutions that address your unique challenges.
                            </p>

                            <Link href="/schedule-a-meeting" className={`btn text-lg ${isMobile ? 'w-full' : 'w-fit'} `}>Contact us for a free consultation</Link>



                        </div>

                        <div className={`${isMobile ? '' : 'flex justify-center flex-col'} mt-6`}>
                            <img src="/assets/videos/Proptech.gif" alt="About ECESIS" width={400} height={300} />
                        </div>

                    </div>


                </section>
                <LazyLoad height={100} offset={100} once>
                    <Counter3 />
                </LazyLoad>
                {/* Core Values */}
                <section className="mt-12 mb-16">
                    {/* <h3 className="text-4xl font-bold text-center">Core Values</h3> */}

                    {isMobile ? (
                        <Carousel
                            showArrows={false}
                            autoPlay={false}
                            infiniteLoop={true}
                            showStatus={false}
                            useKeyboardArrows={true}
                            showThumbs={false}
                        >
                            {coreValues.map((value, index) => (
                                <div key={index} className={`ebt ${isMobile ? "" : "p-2"} flex justify-center items-center `}>

                                    <div className="title bg-[#00235f] border-[#00235f] p-3 border-2 text-center justify-center rounded-2xl bg-gradient-to-br"
                                        style={{ width: '275px', height: '275px' }}>
                                        <img src={value.icon} alt="Icon" style={{ maxWidth: '80px', maxHeight: 'auto' }} />


                                        <h4 className="mt-3 text-2xl text-ly">{value.title}</h4>
                                        <h6 className="mt-3 text-white font-medium">{value.description}</h6>

                                    </div>
                                </div>
                            ))}
                        </Carousel>


                    ) : (
                        <div className='px-3 w-full mt-16 mb-12 flex justify-center items-center'>
                            <div className={`flex flex-row flex-wrap gap-x-4 gap-y-24`}>
                                {coreValues.map((value, index) => (
                                    <div key={index} className="ebt relative transition duration-300 ease-in-out transform hover:scale-110">
                                        <img src={value.icon} alt="Icon" className={`absolute ${value.icon_style} hover:animate-shake`} />
                                        <div className="title bg-[#00235f] border-[#00235f] px-3 py-5 border-2 text-center justify-center rounded-2xl"
                                            style={{ width: '250px', height: '250px' }}>
                                            <h4 className="mt-3 text-2xl text-ly">{value.title}</h4>
                                            <h6 className="mt-3 text-white font-medium">{value.description}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </section>



                {/* About Us */}

                <section className="my-12">
                    <div className="container ">
                        <div className='flex flex-row flex-wrap'>
                            <div className='flex flex-col justify-center' style={{ width: '700px' }}>
                                <h2 className={`text-3xl font-bold ${isMobile ? "text-center" : "text-left"} mb-6`}>About Us</h2>
                                <h4 className={` ${isMobile ? 'text-center' : ''} text-2xl`}>
                                    Propelling<span className='text-blue-400'> Real Estate</span> With <span className='text-pink-400'>Artificial Intelligence</span>
                                </h4>
                                <p className={`mt-4 ${isMobile ? 'text-center' : ''}`}>
                                    We are a visionary PropTech company dedicated to revolutionizing the real estate industry through cutting-edge technology. With a proven track record of delivering innovative solutions, we empower clients to achieve unprecedented success.
                                </p>
                            </div>

                            <div className={`${isMobile ? '' : ' flex-col'} flex justify-center items-center mt-6`}>
                                <img src="/assets/img/images/proptech_about.webp" className={`${isMobile ? 'w-[175px] h-[175px] ml-[21vw]' : 'ml-[175px] w-[250px] h-[250px]'}`} alt="About ECESIS" />
                            </div>
                        </div>

                    </div>


                </section>


                {/* Services */}
                <section className="my-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-6">AI Software Development Services for Real Estate</h2>
                        <div className='flex justify-center items-center'>
                            <p className='w-[600px] text-center '>Whether you’re building a proptech solution from scratch, looking to
                                automate real estate workflows with AI, enhancing your technology team,
                                or in need of a thorough third-party code audit, ECESIS provides a full
                                spectrum of real estate software development services to fulfill your
                                unique requirements.</p>
                        </div>

                        <div className="">
                            <div className="mt-16 mb-12 flex justify-center items-center">
                                <div className={`grid ${isMobile ? "grid-cols-1 gap-y-4 gap-x-16 " : "grid-cols-2 gap-y-20 gap-x-4 "}  `} >
                                    {/* Artificial Intelligence in Real Estate */}
                                    <div className='relative'>
                                        <img src="/assets/img/images/AI_Proptech.webp" alt="" className={`${isMobile ? 'scale-135' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-[6.5rem]' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '0px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Artificial Intelligence in Real Estate</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>ECESIS harnesses the power of AI to transform the real estate landscape. Our AI solutions streamline property management, enhance decision-making, and automate routine tasks.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>PropVision:</span> Our advanced image recognition software provides valuable insights from property images.</li>
                                                <li className=''><span className='font-bold'>Smart Value:</span> Our AI-powered valuation tool offers accurate property valuations.</li>
                                                <li className=''><span className='font-bold'>Predictive Analytics:</span> Utilize AI to predict market trends and optimize investment strategies.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Tailored Software for Real Estate */}
                                    <div className='relative'>
                                        <img src="/assets/img/images/Soft_Proptech.webp" alt="" className={`${isMobile ? 'scale-135 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-64' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '0px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Tailored Software for Real Estate</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>Every real estate business is unique. ECESIS delivers
                                                tailored software solutions to meet your specific needs.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>Property Management Systems:</span> Streamline operations with custom-built property management software.</li>
                                                <li className=''><span className='font-bold'>CRM Integration:</span> Enhance customer relationships with seamless CRM integration.</li>
                                                <li className=''><span className='font-bold'>Custom Applications:</span> Develop specialized tools to solve your business challenges.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <img src="/assets/img/images/Web_Proptech.webp" alt="" className={`${isMobile ? 'scale-140 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-[270px]' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '5px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Web Development</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>Your website is your digital storefront. ECESIS creates stunning, user-friendly websites optimized for real estate businesses.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>Responsive Design:</span> Ensure your website looks great on all devices.</li>
                                                <li className=''><span className='font-bold'>User Experience:</span> Create intuitive designs that engage visitors.</li>
                                                <li className=''><span className='font-bold'>SEO Optimization:</span> Improve search engine visibility for increased traffic.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <img src="/assets/img/images/Sol_Proptech.webp" alt="" className={`${isMobile ? 'scale-140 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-64' : 'top-56'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '5px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Comprehensive PropTech Solutions</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>ECESIS offers a range of specialized services to address the complex challenges facing the real estate industry.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>PropTech Consulting & Software Audit:</span> Our experts provide in-depth analysis of your tech stack to identify opportunities for improvement and optimization.</li>
                                                <li className=''><span className='font-bold'>Legacy System Modernization:</span> Upgrade outdated systems to enhance performance, security, and user experience.</li>
                                                {/* <li className=''><span className='font-bold'>AI Document Processing:</span> Automate document-intensive tasks with our AI-powered solutions, saving time and reducing errors.</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="my-12 ">
                    <div className="container mx-auto px-4 mt-28">
                        <h2 className="text-3xl font-bold text-center mb-6">Our Approach</h2>
                        <div className='flex justify-center items-center '>
                            <p className="w-[800px] text-lg mb-6 text-center ">
                                <span className='text-blue-400 text-xl font-semibold'>Client-Centric</span>, <span className='text-pink-400 text-xl font-bold'>Results-Driven</span>. At ECESIS, our approach is simple: we put our clients first. We work closely with you to understand your unique needs, and then develop tailored solutions that deliver real results. From the initial consultation to the final implementation, we’re with you every step of the way.
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="/assets/img/images/Approach_Proptech.webp" alt="" className={`${isMobile ? 'w-[800px]' : 'w-[700px]'}`} />

                        </div>


                    </div>
                </section>



                {/* Who Can Leverage Our Real Estate Software Development Services */}
                <section className="my-4 py-6">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-6">Who Can Leverage Our Real Estate Software Development Services</h2>
                        <div className="">
                            <div className="mt-16 mb-12 flex justify-center items-center">
                                <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-x-4 gap-y-4 `} >
                                    {/* Artificial Intelligence in Real Estate */}
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Real Estate Firms Embracing AI Transformation</h1>
                                        <p className='text-center mt-4 text-black'>Struggling with manual workflows and disjointed data? Ecesis can streamline your processes with innovative AI-powered real estate software. We specialize in developing custom solutions that enhance efficiency, boost customer loyalty, and open up new revenue opportunities.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/schedule-a-meeting" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    {/* Tailored Software for Real Estate */}
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Proptech Startups</h1>
                                        <p className='text-center mt-4 text-black'>Have a groundbreaking idea that could revolutionize real estate? Let’s turn it into reality. Ecesis will help you build a cutting-edge MVP that will help you secure funding. We conduct in-depth workshops to understand your target audience, identify trends, oversee development, and provide ongoing support to ensure your solution’s financial and operational success.</p>
                                        <div className='flex justify-center items-center mt-[22px]'>
                                            <Link href="/schedule-a-meeting" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Established Proptechs Expanding Market Presence</h1>
                                        <p className='text-center mt-4 text-black'>Passionate about advancing real estate technology but need industry expertise or tech support? Ecesis is here to help. Whether you’re launching new software or enhancing existing solutions, we offer code audits, team augmentation, and full-cycle development to deliver custom real estate software that drives business growth.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/schedule-a-meeting" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Venture Capital Firms Investing in Proptech</h1>
                                        <p className='text-center mt-4 text-black'>Ecesis partners with venture capital firms to ensure the long-term success of their proptech investments. From due diligence to technology implementation, we provide comprehensive support to assess MVPs, oversee development, and maintain the scalability and performance of your portfolio companies.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/schedule-a-meeting" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                {/* Contact CTA */}
                <section className=" text-white text-center py-7">
                    <div className="container w-[900px]">
                        <h2 className="text-3xl font-bold mb-6">Start Your Journey with <span className='text-pink-400'>ECESIS</span></h2>
                        <p className="mb-3 text-black font-bold text-xl">Ready to Innovate? Let’s Talk.</p>
                        <p className="mb-6 text-black text-lg">Whether you’re looking to automate your operations, engage more effectively with clients, or simply stay ahead in a competitive market, ECESIS is here to help. Contact us today to learn more about how our PropTech solutions can transform your real estate business.</p>
                    </div>
                </section>

                <section className="call-back-area call-back-area-two">
                    <div className="">
                        <div className="call-back-wrap bg-lblue">
                            <div className="row align-items-center">
                                <div className="call-back-content flex flex-row justify-center items-center" >
                                    <div className="section-title white-title tg-heading-subheading animation-style3 text-center">
                                        <h2 className="mb-0 text-4xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> No-cost consulting session with our <span className="text-ly">Proptech expert</span>
                                        </h2>
                                        <Link href="/schedule-a-meeting" className="btn mt-5">Let's Talk</Link>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Success Stories */}
                {/* <section className="my-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Client Success Stories</h2>
                </section> */}
            </Layout>
        </>



    )
}
