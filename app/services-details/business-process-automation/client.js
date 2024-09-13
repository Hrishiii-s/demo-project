'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import AccordionItem from "@/components/sections/Accordian"
import CallbackAuto from "@/components/sections/Callback_Auto"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Head from "next/head"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MoonLoader } from "react-spinners"



export default function AutoServices() {

    const [openIndex, setOpenIndex] = useState(null);  // No item is open by default
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded



    const faqData = [
        {
            question: "What is business process automation, and how does it differ from robotic process automation?",
            answer: "Business process automation uses technology to execute recurring tasks or processes in a business where manual effort can be replaced. It’s broader than robotic process automation, which focuses specifically on automating individual tasks. BPA often involves integrating several systems and streamlining complex workflows, whereas RPA typically automates simpler, repetitive tasks within a larger process."
        },
        {
            question: "Can BPA be integrated with existing systems?",
            answer: "Absolutely. One of the key strengths of automating business processes is the ability to integrate seamlessly with existing IT infrastructure. Whether it’s CRM, ERP, or other business process automation tools, BPA can be configured to work in tandem with these systems, enhancing overall efficiency."
        },
        {
            question: "What are the primary benefits of implementing BPA in a business?",
            answer: "Implementing BPA brings numerous benefits, including increased efficiency, reduced operational costs, minimized errors, and improved employee productivity. It also enables better customer service and provides valuable insights through data analytics, facilitating actionable decision-making and informed planning."
        },
        {
            question: "How long does it typically take to see results from BPA?",
            answer: "The time frame to see tangible results from BPA implementation can vary based on the complexity and scope of automated processes. Most businesses, however, begin to observe improvements in efficiency and fewer errors in a few weeks or months after implementing a new business automation system. The full impact, especially in terms of ROI, typically becomes more evident within a year."
        }
    ];

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // If clicked again, close it
        } else {
            setOpenIndex(index);
        }
    };

    let Nothome = true;

    const [isMobile, setIsMobile] = useState(false);


    const coreValues = [
        {
            title: "Automate",
            description: "Automate rules-based tasks to eliminate manual work.",
            icon: "/assets/img/icon/Automate_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
        {
            title: "Enhance",
            description: "Enhance decision-making with streamlined report generation.",
            icon: "/assets/img/icon/Enhance_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
        {
            title: "Optimize",
            description: "Optimize ETL operations with automated processes.",
            icon: "/assets/img/icon/Optimize_icon.webp",
            icon_style: "-top-16 left-[25%] w-32 h-32",
        },
        {
            title: "Expand",
            description: "Expand business capacity and service offerings using multiple RPA bots.",
            icon: "/assets/img/icon/Expand_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
        {
            title: "Accelerate",
            description: "Accelerate service delivery by automating data processing.",
            icon: "/assets/img/icon/Accelerate_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
        {
            title: "Maintain",
            description: "Maintain business continuity during peak periods by offloading tasks to RPA software.",
            icon: "/assets/img/icon/Maintain_icon.webp",
            icon_style: "-top-12 left-[33%] w-24 h-24",
        },
    ];

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




    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        setAllLoaded(true);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!allLoaded) {
        return <div className="flex justify-center items-center"><MoonLoader/></div>; // Or any other loading indicator
    }


    return (
        <>
        <Head>
        <title>
        Business Process Automation | Transforming Workflows with Automation
        </title>
                <meta name="description" content="Automate key business processes to enhance productivity, reduce costs, and improve workflow accuracy. Our solutions are designed to help your business operate smarter, faster, and more efficiently." />
        </Head>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Business Process Automation" Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="order-0 order-lg-2">
                                        <div className="services__details-content">
                                            <div className="flex flex-row items-center justify-around">
                                                {isMobile ? (
                                                    <>
                                                        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                            <div className={`w-full`}>
                                                                <h1 className="title text-3xl text-center">Business-specific RPA services</h1>
                                                                <img src="/assets/img/images/bpa_main.gif" alt="" className="w-[300px] mx-auto -mt-5" />
                                                                <p className="mt-3 text-center">Increase operational efficiency, reduce labor costs, and streamline your processes by automating repetitive and large-scale tasks with our advanced workflow automation services.
                                                                    Our bots will help improve productivity by preventing delays and removing workflow bottlenecks.
                                                                </p>                                                            </div>
                                                        </div>


                                                    </>
                                                ) : (<>
                                                    <div className="w-[550px] justify-center ">
                                                        <h1 className="title text-3xl">Business-specific RPA services</h1>
                                                        <p className="mt-3">Increase operational efficiency, reduce labor costs, and streamline your processes by automating repetitive and large-scale tasks with our advanced workflow automation services.
                                                            Our bots will help improve productivity by preventing delays and removing workflow bottlenecks.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <img src="/assets/img/images/bpa_main.gif" alt="" className="w-[300px] -mt-5" />

                                                    </div>

                                                </>)}



                                            </div>

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
                                                    <div className={`grid grid-cols-3 flex-row flex-wrap gap-x-4 gap-y-24`}>
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


                                            <div className={`flex flex-col justify-center items-center ${isMobile ? 'w-full' : 'h-full max-w-[100vw] w-[800px]'}   mx-auto`}>
                                                <h2 className="title text-center text-2xl">Services We Offer In Workflow Automation</h2>
                                                <p className="text-base text-center">Leverage our workflow automation services to increase productivity and enhance accessibility, utilization, sharing, communication, and collaboration over automated workflows.
                                                </p>
                                            </div>

                                            <div className={`flex flex-col mt-20 ${isMobile ? "gap-y-10" : "gap-y-16"}  `}>
                                                <div className={`flex  ${isMobile ? "flex-col" : "flex-col"}`}>
                                                    {/* Workflow Automation Consulting */}
                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Workflow Automation Consulting</h3>
                                                                    <img src="/assets/img/services/Workflow_Consulting.webp" alt="" className="w-[300px] mt-3 mx-auto" />
                                                                    <p className="mt-3 ">Our workflow automation consultants offer expert insights into automatable processes, maximizing the value of your business applications. They help you identify the right technologies, integration approaches, migration needs, and retention management strategies to enhance the productivity and efficiency of your current workflows.</p>
                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex ${isMobile ? "flex-col" : "flex-row"}  justify-around items-center `}>
                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Workflow Automation Consulting</h3>
                                                                <p className="mt-3">Our workflow automation consultants offer expert insights into automatable processes, maximizing the value of your business applications. They help you identify the right technologies, integration approaches, migration needs, and retention management strategies to enhance the productivity and efficiency of your current workflows.</p>


                                                            </div>
                                                            <img src="/assets/img/services/Workflow_Consulting.webp" alt="" className="w-[300px] " />

                                                        </div>

                                                    </>)}


                                                    {/* Process Mapping and Analysis */}

                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Process Mapping and Analysis</h3>
                                                                    <img src="/assets/img/services/Process_Mapping.webp" alt="" className="w-[275px] mx-auto" />
                                                                    <p className="mt-3">Our experienced workflow automation developers collaborate closely with you to plan and design strategies that simplify and automate enterprise workflows across various departments using the latest tools and technologies.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>
                                                            <img src="/assets/img/services/Process_Mapping.webp" alt="" className="w-[275px]" />

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Process Mapping and Analysis</h3>
                                                                <p className="mt-3">Our experienced workflow automation developers collaborate closely with you to plan and design strategies that simplify and automate enterprise workflows across various departments using the latest tools and technologies.</p>


                                                            </div>

                                                        </div>

                                                    </>)}



                                                    {/* Workflow Automation Strategy */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Workflow Automation Strategy</h3>
                                                                    <img src="/assets/img/services/Workflow_Strategy.webp" alt="" className="w-[300px] mx-auto" />
                                                                    <p className="mt-3">At ECEIS, our skilled workflow automation developers specialize in creating tailored strategies to streamline and automate enterprise workflows, ensuring enhanced efficiency across departments with cutting-edge technology.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Workflow Automation Strategy</h3>
                                                                <p className="mt-3">At ECEIS, our skilled workflow automation developers specialize in creating tailored strategies to streamline and automate enterprise workflows, ensuring enhanced efficiency across departments with cutting-edge technology.</p>


                                                            </div>

                                                            <img src="/assets/img/services/Workflow_Strategy.webp" alt="" className="w-[300px]" />


                                                        </div>
                                                    </>)}



                                                    {/* Workflow Design and Development */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Workflow Design and Development</h3>
                                                                    <img src="/assets/img/services/Workflow_Design.webp" alt="" className="w-[300px] mx-auto" />
                                                                    <p className="mt-3">We assist in designing and developing custom workflows tailored to your specific business needs. Our services include workflow preparation, automation tool configuration, and rigorous testing to ensure all requirements are met.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>
                                                            <img src="/assets/img/services/Workflow_Design.webp" alt="" className="w-[300px]" />

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Workflow Design and Development</h3>
                                                                <p className="mt-3">We assist in designing and developing custom workflows tailored to your specific business needs. Our services include workflow preparation, automation tool configuration, and rigorous testing to ensure all requirements are met.</p>


                                                            </div>

                                                        </div>

                                                    </>)}



                                                    {/* Integration Services */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Integration Services</h3>
                                                                    <img src="/assets/img/services/Integration.webp" alt="" className="w-[275px] mx-auto" />
                                                                    <p className="mt-3">Leverage our expertise in seamlessly integrating workflows with other systems and applications. We offer design and configuration services using APIs, middleware, or custom code to ensure smooth integration.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Integration Services</h3>
                                                                <p className="mt-3">Leverage our expertise in seamlessly integrating workflows with other systems and applications. We offer design and configuration services using APIs, middleware, or custom code to ensure smooth integration.</p>


                                                            </div>

                                                            <img src="/assets/img/services/Integration.webp" alt="" className="w-[275px]" />


                                                        </div>

                                                    </>)}



                                                    {/* Data Management Services */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Data Management Services</h3>
                                                                    <img src="/assets/img/services/Data_Management.webp" alt="" className="w-[275px] mx-auto" />
                                                                    <p className="mt-3">Our workflow management experts specialize in handling data within workflows, including validation, cleansing, and migration. We design and implement robust data management processes and tools to maintain high data quality.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>
                                                            <img src="/assets/img/services/Data_Management.webp" alt="" className="w-[275px]" />

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Data Management Services</h3>
                                                                <p className="mt-3">Our workflow management experts specialize in handling data within workflows, including validation, cleansing, and migration. We design and implement robust data management processes and tools to maintain high data quality.</p>


                                                            </div>

                                                        </div>

                                                    </>)}



                                                    {/* Customization Services */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Customization Services</h3>
                                                                    <img src="/assets/img/services/Customization.webp" alt="" className="w-[300px] mx-auto" />
                                                                    <p className="mt-3">Our developers can customize existing workflows or create new ones to meet unique business needs. They configure and tailor automation tools to align with your specific requirements.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Customization Services</h3>
                                                                <p className="mt-3">Our developers can customize existing workflows or create new ones to meet unique business needs. They configure and tailor automation tools to align with your specific requirements.</p>


                                                            </div>
                                                            <img src="/assets/img/services/Customization.webp" alt="" className="w-[300px]" />


                                                        </div>

                                                    </>)}


                                                    {/* Training and Support Services */}


                                                    {isMobile ? (
                                                        <>
                                                            <div className="flex flex-col md:flex-row justify-center items-center mt-5">
                                                                <div className={`w-full`}>
                                                                    <h3 className="text-2xl text-center">Training and Support Services</h3>
                                                                    <img src="/assets/img/services/Training.webp" alt="" className="w-[300px] mx-auto" />
                                                                    <p className="mt-3">We provide comprehensive training and support to ensure end-users and administrators are proficient in using workflow automation tools and can effectively troubleshoot any issues.</p>

                                                                </div>
                                                            </div>


                                                        </>
                                                    ) : (<>
                                                        <div className={`flex flex-row justify-around items-center `}>
                                                            <img src="/assets/img/services/Training.webp" alt="" className="w-[300px]" />

                                                            <div className={`${isMobile ? '' : 'mt-2'} `} style={{ width: "45vw" }}>
                                                                <h3 className="text-2xl">Training and Support Services</h3>
                                                                <p className="mt-3">We provide comprehensive training and support to ensure end-users and administrators are proficient in using workflow automation tools and can effectively troubleshoot any issues.</p>
                                                            </div>

                                                        </div>

                                                    </>)}


                                                </div>


                                            </div>

                                            <div className="mt-[50px]">
                                                <h2 className="title text-2xl text-center">Benefits of Business Process Automation implementation with ECESIS</h2>
                                                <div className="relative mt-5">
                                                    {isMobile ? (<>
                                                        <img src="/assets/img/images/bpa_implement_mobile.webp" alt="" className="" />
                                                    </>) : (<>
                                                        <img src="/assets/img/images/automation_implement.webp" alt="" className="w-full md:w-[750px] mx-auto rounded-xl" />

                                                        <div className="absolute top-[28px] left-[100px] md:top-[70px] md:left-[490px]">
                                                            <h2 className="text-[6px] md:text-sm">Time optimization</h2>
                                                            <p className="text-[4px] md:text-xs w-[150px] md:w-[400px]">Spend up to 80% less time on repetitive and high-volume tasks by implementing automation solutions that work 24/7.</p>
                                                        </div>

                                                        <div className="absolute top-[195px] left-[490px]">
                                                            <h2 className="text-sm">Increased data quality</h2>
                                                            <p className="text-xs w-[400px]">Minimize human error and improve data quality and accuracy with a greater degree of automation best practices.</p>
                                                        </div>

                                                        <div className="absolute bottom-[175px] left-[490px]">
                                                            <h2 className="text-sm">Enhanced business process performance</h2>
                                                            <p className="text-xs w-[400px]">Improve your productivity and employee performance by implementing a custom automation solution.</p>
                                                        </div>

                                                        <div className="absolute bottom-[50px] left-[490px]">
                                                            <h2 className="text-sm">Quick adoption</h2>
                                                            <p className="text-xs w-[400px]">Integrate an RPA solution with minimal onboarding effort and development costs.</p>
                                                        </div>
                                                    </>)}






                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <CallbackAuto />

                        </div>
                        <div>
                            <div className="section-title text-center mt-16">
                                <span className="text-2xl text-lb font-bold ">Frequently Asked Questions</span>
                                {/* <h2 className="title w-full">Meet the visionary leaders driving Ecesis' success, each bringing a wealth of experience, innovation, and dedication to our mission of excellence.</h2> */}
                            </div>
                            <div className="container mx-auto mt-5 p-5 rounded-2xl " style={{ maxWidth: '1000px' }}>
                                <div className="border-2">
                                    {faqData.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            title={faq.question}
                                            content={faq.answer}
                                            isOpen={openIndex === index}
                                            onClick={() => handleToggle(index)}
                                        />
                                    ))}
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
