import withLoading from "@/app/withLoading";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

function Breadcrumb({ breadcrumbTitle, bread, loaded }) {
    const [isMobile, setIsMobile] = useState(null);
    const [isTab, setIsTab] = useState(null);
    const [isWide, setIsWide] = useState(null);
    const [calculatedWidth, setCalculatedWidth] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false); // Single state to track if the image is loaded


    useEffect(() => {
        function handleResize() {
            const viewportWidth = window.innerWidth;
            setIsMobile(viewportWidth <= 768);
            setIsTab(viewportWidth > 768 && viewportWidth <= 1024);
            setIsWide(viewportWidth > 2160);
            const vwUnit = viewportWidth / 100;
            const Width = 2 * vwUnit;
            setCalculatedWidth(Width);
        }

        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize); // Adjust on window resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    useEffect(() => {
        if (imageLoaded) {
            const timer = setTimeout(() => {
                console.log("working")
                loaded(); // Call the loaded function after the image is loaded
            }, 150); // You can adjust the delay time
            return () => clearTimeout(timer);
        }
    }, [imageLoaded]);

    // Handle image load
    const handleImageLoad = () => {
        setImageLoaded(true); // Set image as loaded once it's fully loaded
    };

    if (isMobile === null || isTab === null || isWide === null) {
        return null; // Or render a loader/spinner here while determining screen size
    }
    const banner = [
        {
            id: "About Us",
            backgroundImageUrl: "/assets/img/banner/about_banner.webp",
            backgroundMobile: "/assets/img/banner/about_mobile.webp",
            style: ""
        },
        {
            id: "Real Estate Valuations",
            backgroundImageUrl: "/assets/img/banner/real-estate-banner4.webp",
            backgroundMobile: "/assets/img/banner/real-estate_mobile.webp",
            style: "text-white multiple-shadows"
        },
        {
            id: "Talent Acquisition",
            backgroundImageUrl: "/assets/img/banner/manpower_banner2.webp",
            backgroundMobile: "/assets/img/banner/manpower_mobile.webp",
            style: "text-white multiple-shadows",
            img_style: ""
        },
        {
            id: "Accounting & Finance",
            backgroundImageUrl: "/assets/img/banner/accounting_banner.webp",
            backgroundMobile: "/assets/img/banner/accounting_mobile.webp",
            style: "text-white multiple-shadows"
        },
        {
            id: "Let’s get in touch",
            backgroundImageUrl: "/assets/img/banner/contact_banner.webp",
            backgroundMobile: "/assets/img/banner/contact_mobile.webp",
            style: "text-black"
        },
        {
            id: "Digital Marketing",
            backgroundImageUrl: "/assets/img/banner/digital_banner.webp",
            backgroundMobile: "/assets/img/banner/digital_mobile.webp",
            style: "text-black"
        },
        {
            id: "Artificial Intelligence",
            backgroundImageUrl: "/assets/img/banner/ai_banner.webp",
            backgroundMobile: "/assets/img/banner/ai_mobile.webp",
            style: "text-white multiple-shadows"
        },
        {
            id: "Enterprise Software Solutions",
            backgroundImageUrl: "/assets/img/banner/software_banner.webp",
            backgroundMobile: "/assets/img/banner/ai_mobile.webp",
            style: "text-sky-900"
        },
        {
            id: "Business Process Automation",
            backgroundImageUrl: "/assets/img/banner/BPA_banner.webp",
            backgroundMobile: "/assets/img/banner/BPA_banner_mobile.webp",
            style: "text-white"
        },
        {
            id: "From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth",
            backgroundImageUrl: "/assets/img/banner/case_study.webp",
            backgroundMobile: "/assets/img/banner/case_study_mobile.webp",
            style: "text-white"
        },
        {
            id: "Case Studies",
            backgroundImageUrl: "/assets/img/banner/case_studies_banner.webp",
            backgroundMobile: "/assets/img/banner/case_studies_banner_mobile.webp",
            style: "text-white"
        },
        {
            id: "Schedule a Meeting",
            backgroundImageUrl: "/assets/img/banner/schedule.webp",
            backgroundMobile: "/assets/img/banner/schedule_mobile.webp",
            style: "text-black"
        },
        {
            id: "Enhancing ECG Data Accuracy in Cardiac Monitoring through AI Integration",
            backgroundImageUrl: "/assets/img/banner/ecg_banner.jpeg",
            backgroundMobile: "/assets/img/banner/ecg_banner.jpeg",
            style: "text-white"
        },







    ]
    const matchingBanner = banner.find(item => item.id === breadcrumbTitle);
    const specialTitle = [
        "From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth",
        "Enhancing ECG Data Accuracy in Cardiac Monitoring through AI Integration"
    ];


    let specialTitleIndex = -1; // Initialize with -1 to indicate "not found"

    const isSpecialTitle = specialTitle.includes(breadcrumbTitle);
    if (isSpecialTitle) {
        specialTitleIndex = specialTitle.findIndex(title => title === breadcrumbTitle);
    }

     

    return (
        <>
            <section className={`breadcrumb__area breadcrumb__bg_real_estate`}>
                <div
                    className="banner-placeholder"
                    style={{ height: imageLoaded ? "" : (isMobile ? "250px" : "600px"), backgroundColor: "#fff" }}
                >   

                    <img src={matchingBanner ? (isMobile && !isTab ? matchingBanner.backgroundMobile : matchingBanner.backgroundImageUrl) : "/assets/img/bg/breadcrumb_bg.webp"} alt="" className={`${matchingBanner ? matchingBanner.img_style : ""} ${isMobile ? (isSpecialTitle ? "h-[25vh] object-cover" : "h-full object-cover") : "object-fill"}  w-full -z-1 top-0`} style={{ maxHeight: isWide ? '' : '400px', display: imageLoaded ? "block" : "none" }}
                        onLoad={handleImageLoad} />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="breadcrumb__content">
                                    {isSpecialTitle ? (
                                        specialTitleIndex === 0 ? (
                                            <h2 data-aos="fade-up" data-aos-delay={100} className={`title absolute  ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`} style={{ fontSize: isMobile ? "15px" : `${calculatedWidth}px`, left: isMobile ? '2%' : '10%', top: '40%', display: imageLoaded ? "block" : "none" }}><span className="text-ly">From Complexity to Clarity:</span> <br />How a Single Website Drove<br /> <span className="text-ly">3X</span> Revenue Growth</h2>

                                        ) : (
                                            specialTitleIndex === 1 ? (
                                                <>
                                                    <div className="w-fit h-fit bg-blue-500 absolute justify-center items-center" style={{ left: isMobile ? '8%' : '10%', top: isMobile ? '26.5%' : '25%' }}>
                                                        <h2 data-aos="fade-up" data-aos-delay={100} className={`title px-4 pt-4 pb-3 text-center ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`} style={{ fontSize: isMobile ? "15px" : `${calculatedWidth}px`, display: imageLoaded ? "block" : "none" }}><span className="text-black">Enhancing ECG Data Accuracy in <br /> Cardiac Monitoring through<br /><span className="text-white">AI Integration</span> </span></h2>

                                                    </div>

                                                </>
                                            ) : (
                                                <>
                                                    {null}
                                                </>)
                                        )

                                    ) : (
                                        isMobile ? (
                                            null
                                        ) : (
                                            <h2 data-aos="fade-up" data-aos-delay={100} className={`title absolute ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`} style={{ fontSize: `${calculatedWidth}px`, left: '10%', top: '40%', display: imageLoaded ? "block" : "none" }}>{breadcrumbTitle}</h2>

                                        )

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default withLoading(Breadcrumb);