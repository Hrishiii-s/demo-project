'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Counter3 from "@/components/sections/Counter3"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import VideoPopup from "@/components/elements/PopupVideo"
import Modal from "../Modal"
import LazyLoad from "react-lazyload"
import Head from "next/head"

export default function About() {
    let Nothome = true;

    const modalContents = [
        {
            title: 'T K Velayudham',
            designation: 'CEO',
            description: (
                <p className="text-sm">
                    T.K. Velayudham is a visionary leader with over 35 years of expertise in creating and steering successful ventures across the globe. His career began at Keltron, where he was instrumental in the Metro Railway AFC project in Kolkata, a pioneering initiative in automated fare collection. He then led the medical equipment division at Terumo Penpol, establishing the company as a prominent player in healthcare.<br /><br />

                    He started his career leading the country's first Metro Railway fare collection and passenger control system. He was instrumental in establishing India's first Cable TV Network (Asianet) with PANASIA Ltd., Taiwan. He also set up and led Terumo PENPOL's Medical Equipment Division. Additionally, he promoted Wins Ltd, India, in collaboration with a Japanese semiconductor manufacturer.<br /><br />

                    In 2010, he founded ECESIS, a venture that has since thrived under his leadership, becoming a leader in its field and reflecting his ongoing commitment to innovation and excellence.
                </p>
            ),
            imageUrl: '/assets/img/team/TKV.webp',
            linkedInUrl: 'https://www.linkedin.com/in/velayudham-tk-ecesis/'
        },
        {
            title: 'Karthik K V',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Karthik is an accomplished professional with a strong foundation in Information Technology and a Master of Business Administration in Global Marketing Management from Virginia Commonwealth University, USA. He began his career in Risk Analytics at HSBC Bank Pvt Ltd., where he gained four years of invaluable experience, developing a deep understanding of financial risk management and strategic decision-making.<br /><br /> Currently, Karthik serves as the Director of Strategy and Business Development at ECESIS. In this role, he plays a pivotal part in steering the company’s growth trajectory. Under his leadership, ECESIS has seen immense growth, expanding its service offerings and solidifying its position as the industry leader.
                    <br /><br /> Karthik's strategic vision and business acumen have been instrumental in driving the company's success. He is dedicated to fostering innovation, enhancing operational efficiency, and exploring new market opportunities. His commitment to excellence and forward-thinking approach continues to contribute significantly to the ongoing success and expansion of ECESIS.
                </p>
            ),
            imageUrl: '/assets/img/team/Karthik.webp',
            linkedInUrl: 'https://www.linkedin.com/in/karthik-k-v-2403891a/'
        },
        {
            title: 'Anil Appukuttan',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    A Technology & Business leader with 26 years of experience in structuring and managing large outsourcing deals for VC-funded Startups, SMEs, and Fortune 500 companies with a proven track record of delivering excellent results in big international teams as well as building software products, highly competent teams, and companies.<br /><br />
                    Anil specializes in Medicare, Medicaid, and CMS compliance, offering customized Digital Health & Healthcare solutions for providers and payers throughout the United States. Anil’s previous roles include Group President - Healthcare Automation & Hospital Services @ Aveta.ai (California), CEO of Cycloides Inc (Canada), Senior Vice President - Strategic Growth (Digital) of Tangentia Inc (Canada), Technical Program Manager of Wipro Americas, Senior Project Manager of Quest Global, and Research Engineer of C-DAC (India). <br /><br />
                    He also sits on advisory boards and consults for various businesses in North America and South-East Asia. Electronics & Communication Engineer by qualification and Certified Scrum Coach, holds Postgrad.Dip in Computer Applications, Engineering Diploma in Electronics & Avionics, and Diploma in Embedded Systems.
                </p>
            ),
            imageUrl: '/assets/img/team/Anil.webp',
            linkedInUrl: 'https://www.linkedin.com/in/anil-ar-001/'
        },
        {
            title: 'Saritha N S',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Saritha brings with her over 20 years of IT experience, making her an integral part of the Ecesis group. As a senior leader, she possesses a growth mindset and a strong passion for driving highly productive IT teams that achieve significant commercial success. <br /><br />
                    Throughout her career, Saritha has excelled in a wide range of roles, from leading large-scale transformation and development programs to ensuring best-in-class SLA-driven operational delivery. Her ability to adapt and thrive in diverse situations has consistently delivered exceptional results. <br /><br />
                    Saritha’s leadership style is defined by her collaborative approach and commitment to innovation. Her experience and strategic insight make her a vital asset to Ecesis, ensuring the company continues to lead in its industry.
                </p>
            ),
            imageUrl: '/assets/img/team/Saritha.webp',
            linkedInUrl: 'https://www.linkedin.com/in/sarithans/'
        },
        {
            title: 'Shebin Koshy',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Shebin is a seasoned professional with a wealth of experience in managing client operations in the United Kingdom. His strong interpersonal skills and in-depth knowledge of the UK market have consistently delivered outstanding results. <br /><br />
                    With a career spanning several years, he has established himself as a proficient and trusted resource in the field of client relations. His ability to navigate complex client requirements and provide tailored solutions has earned him a stellar reputation in the industry. <br /><br />Shebin oversees the operations of the Trivandrum center, where he ensures that the highest standards of service are maintained.
                </p>
            ),
            imageUrl: '/assets/img/team/Shebin.webp',
            linkedInUrl: 'https://www.linkedin.com/in/shebin-koshy-050543160/'
        },
        {
            title: 'Pradeep M',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Pradeep is a distinguished professional with extensive expertise in the KPO industry. With a solid academic foundation, having completed his master's degree in the United Kingdom, Pradeep possesses a deep and comprehensive understanding of the intricacies of the KPO sector. His journey in the KPO business has been marked by a remarkable dedication to excellence. <br /><br />His career spans a range of roles and responsibilities, allowing him to acquire a holistic view of the industry. He has successfully led and managed KPO operations across various domains, showcasing his versatility and adaptability. <br /><br />Pradeep played a crucial role in establishing the Nagercoil center for ECESIS, a significant achievement that highlights his strategic vision and leadership.
                </p>
            ),
            imageUrl: '/assets/img/team/Pradeep.webp',
            linkedInUrl: 'hhttps://www.linkedin.com/in/pradeep-maddipoti-5a2ab4125/'
        },
        {
            title: 'Sathi Devi',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Sathi Devi is a seasoned finance professional responsible for managing the finances and accounts at ECESIS. With her meticulous attention to detail and commitment to accuracy, Sathi ensures that the company's financial operations run smoothly. Her expertise and dedication provide a strong foundation for the company’s financial health, ensuring that every aspect of the finances is handled with care and precision.
                </p>
            ),
            imageUrl: '/assets/img/team/Sathi.webp',
            linkedInUrl: 'https://www.linkedin.com/in/sathi-devi-752aa725/'
        },
        {
            title: 'Arun Sankar',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Arun is a cornerstone of the ECESIS success story, having been one of the first employees to join the company. His deep involvement across all departments has been instrumental in shaping the company’s growth and achievements. Arun’s multifaceted expertise and unwavering dedication have made him one of the key pillars supporting ECESIS. <br /><br />
                    Currently, Arun oversees software delivery and its operations, ensuring that the company’s solutions meet the highest standards of quality and efficiency. His broad experience and commitment to excellence continue to drive ECESIS forward, solidifying its reputation as a leader in the industry.

                </p>
            ),
            imageUrl: '/assets/img/team/Arun.webp',
            linkedInUrl: 'https://www.linkedin.com/in/arun-sankar-697837185/'
        },

    ];


    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);

    const handlePageClick = (index) => {
        if (!showModal) {  // Only update position and show modal if it is not already open
            setShowModal(true);
            setModalIndex(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>About Us | Experts in AI, Digital Transformation, and PropTech</title>
                <meta name="description" content="We help businesses evolve and thrive with AI-driven solutions and digital transformation. Explore how we create innovative and impactful solutions tailored to your digital growth." />
            </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="About Us" Nothome={Nothome}>
                <div>
                    <section className="about__area-four">
                        <div className="container">
                            {/* <div className=" ml-5 mb-16">
                            <h2 className="">
                                About Us
                            </h2>
                        </div> */}
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.webp" alt="" />
                                        {/* <img src="/assets/img/images/inner_about02.webp" alt="" /> */}
                                        <img src="/assets/img/bg/bg_about_photos.webp" className={`${isMobile ? 'scale-150 mt-20' : ''} about_photo_bg`} style={{ marginLeft: isMobile ? '50px' : '' }} alt="" />

                                        {/* <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">15+</h2>
                                                <p>World Best Agency <br /> Award Got</p>
                                            </div>
                                        </div> */}
                                        {/* <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.webp" alt="" className="alltuchtopdown" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__content-four">
                                        <div className="section-title mb-30">
                                            <h2 className="title">Pioneering Business Solutions For Tomorrow’s Markets</h2>
                                        </div>
                                        <div className="about__content-inner-three mt-2">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Extensive Industry Knowledge</li>
                                                    <li><i className="flaticon-arrow-button" />Innovative and Adaptive Culture</li>
                                                    <li><i className="flaticon-arrow-button" />Strategic Vision For Long-Term Growth</li>
                                                </ul>
                                            </div>
                                            {/* <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.webp" alt="" />
                                            </div> */}
                                        </div>
                                        <p className="w-[600px]">We have transformed from a BPO provider into a global leader, offering a diverse portfolio of services including software development, digital marketing, and staffing solutions. Our evolution is guided by a forward-thinking approach that anticipates the needs of tomorrow’s markets.
                                            <br /><br />Driven by our dedication to client success, we continuously innovate to stay ahead of industry trends. Our strategic agility and commitment to excellence make us the trusted partner for companies navigating transformative journeys in a rapidly changing world.</p>
                                        {/* <Link href="/services" className="btn">Know More</Link> */}
                                    </div>
                                </div>
                                <div className={`services__details-inner-img relative ${isMobile ? '' : 'justify-center'}  flex mt-6`} >
                                    <img src="/assets/img/images/thumbnail.webp" className="object-fit" style={{ width: isMobile ? '100vw' : "50vw" }} alt="" />
                                    <VideoPopup url={'sSjS2Fm_R9M'} />

                                </div>
                            </div>
                        </div>
                    </section>
                    <LazyLoad height={100} offset={250} once>
                        <Counter3 />
                    </LazyLoad>


                    {/* team-area */}
                    <section className="team__area-four relative">
                        <div className="container">
                            <div className="row justify-center">

                                <div className="section-title text-center mb-20">
                                    <span className="sub-title">MEET OUR TEAM</span>
                                    <h2 className="title w-full">Meet the visionary leaders driving Ecesis' success, each bringing a wealth of experience, innovation, and dedication to our mission of excellence.</h2>
                                </div>

                            </div>
                            {modalIndex !== null && showModal && (
                                <Modal
                                    showModal={showModal}
                                    setShowModal={() => {
                                        setShowModal(false);
                                        setModalIndex(null);  // Reset the modal index when closing the modal
                                    }}
                                    title={modalContents[modalIndex]?.title || ''}
                                    description={modalContents[modalIndex]?.description || ''}
                                    imageUrl={modalContents[modalIndex]?.imageUrl || '/default/path/to/image.webp'}
                                    email={modalContents[modalIndex]?.email || 'default@email.com'}
                                    linkedInUrl={modalContents[modalIndex]?.linkedInUrl || 'https://www.linkedin.com'}
                                />
                            )}
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(0) }}>
                                    <div className="team__item-four shine-animate-item" >
                                        <div className="team__thumb-four shine-animate" >
                                            <img src="/assets/img/team/TKV.webp" alt="" />
                                        </div>
                                        <div className="team__content-four bg-slate-200 relative">
                                            <h2 className="title">T K Velayudham</h2>
                                            <span className="text-black">CEO</span>
                                            <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(1) }}>
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/Karthik.webp" alt="" />
                                        </div>
                                        <div className="team__content-four bg-slate-200">
                                            <h2 className="title">Karthik K V</h2>
                                            <span className="text-black">Director</span>
                                            <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                        </div>
                                    </div>

                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(2) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Anil.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Anil Appukuttan</h2>
                                                <span className="text-black">Director <br /> (North America)</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(3) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Saritha.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Saritha N S</h2>
                                                <span className="text-black">Vice President <br />Software Engineering</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(4) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Shebin.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Shebin Koshy</h2>
                                                <span className="text-black">Asst. General Manager <br /> Operations</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(5) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Pradeep.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Pradeep M</h2>
                                                <span className="text-black">Asst. General Manager <br /> Operations</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(6) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Sathi.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Sathi Devi</h2>
                                                <span className="text-black">General Manager <br /> Finance</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(7) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Arun.webp" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Arun Sankar</h2>
                                                <span className="text-black">Asst. Vice President <br /> Business Development</span>
                                                <img src="/assets/img/icon/arrow2.webp" alt="" className=" w-7 h-7 bottom-[-14px] absolute left-[45%]" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}

                </div >
            </Layout >
        </>
    )
}