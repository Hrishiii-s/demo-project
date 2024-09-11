'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect } from "react"



export default function Privacy() {
    let Nothome = true;

useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (window.innerHeight / 2 - targetElement.offsetHeight / 2),
                    behavior: 'smooth'
                });
            }
        });
    });



    

}, [])

useEffect(() => {
    const options = {
        rootMargin: '0px',
        threshold: 0.5 // Adjust based on when you consider the section to be active
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${id}"] li`);
            
            if (entry.isIntersecting) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }, options);

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
}, []);




    return (
        <>
        <Head>
        <title>
        Privacy Policy | Your Data Privacy and Protection at ECESIS
        </title>
                <meta name="description" content="Learn about our data protection practices in our Privacy Policy. We take your privacy seriously and outline how we handle personal information with the utmost care and security." />
        </Head>
            <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container mt-[40px]">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-[60px] font-thin leading-10 text-black"><span className="font-bold text-[#ffcf29]">Privacy</span><span className=""> & </span><span className="font-bold text-lb">Cookie</span> Policy</p>
                                <p className="justify-center items-center text-left mt-8">At ECESIS, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                            </div>
                            <div className="h-[1px] rounded-xl bg-slate-300"/>

                            <div className="flex-row flex relative">
                                <div className="w-[20%] mt-12 ">
                                    <ul className="gap-list text-lb">
                                        <Link href="#info-collect" style={{color: "#00235f"}}>
                                            <li>
                                                Information We Collect
                                            </li> </Link>


                                        <Link href="#info-use" style={{color: "#00235f"}}>  <li>
                                            How We Use Your Information
                                        </li></Link>


                                        <Link href="#info-share" style={{color: "#00235f"}}> <li>
                                            How We Share Your Information
                                        </li></Link>


                                        <Link href="#data-sec" style={{color: "#00235f"}}>
                                            <li>
                                                Data Security
                                            </li></Link>

                                        <Link href="#rights" style={{color: "#00235f"}}>
                                            <li>
                                                Your Rights
                                            </li></Link>


                                        <Link href="#third-party" style={{color: "#00235f"}}> <li>
                                            Third-Party Links
                                        </li> </Link>


                                        <Link href="#changes" style={{color: "#00235f"}}><li>
                                            Changes to This Privacy Policy
                                        </li> </Link>


                                        <Link href="#contact" style={{color: "#00235f"}}>  <li>
                                            Contact Us
                                        </li></Link>



                                    </ul>

                                </div>
                                <div className="w-[2px] mr-3 rounded-xl bg-slate-300"/>
                                <section className="w-full">
                                    <div className="mt-12 ml-4" id="info-collect">
                                        <p className="font-bold">
                                            Information We Collect
                                        </p>
                                        <p>
                                            We may collect and process the following types of information:<br />
                                        </p>
                                        <ul className="list-disc ml-5">
                                            <li>
                                                Personal Information: Name, email address, contact details, and other personally identifiable information you voluntarily provide when filling out forms or contacting us through our website.
                                            </li>
                                            <br />
                                            <li>
                                                Usage Data: Information about how you use our website, including but not limited to your IP address, browser type, and the pages you visit.
                                            </li>
                                            <br />

                                            <li>
                                                Cookies: We use cookies to enhance your experience, remember your preferences, and track site usage. You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies.
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="mt-12 ml-4" id="info-use">
                                        <p className="font-bold">
                                            How We Use Your Information
                                        </p>
                                        <p>
                                            We use your information for the following purposes:<br />
                                        </p>
                                        <ul className="list-disc ml-5">
                                            <li>
                                                To provide and manage our services: Including responding to inquiries, fulfilling requests, and providing customer support.
                                            </li>
                                            <br />
                                            <li>
                                                To improve our website and services: We analyze usage data to understand how visitors interact with our website and to improve its functionality.
                                            </li>
                                            <br />

                                            <li>
                                                For marketing and communications: With your consent, we may send you information about our services, updates, and promotions that we believe may be of interest to you.
                                            </li>
                                            <br />
                                            <li>
                                                Compliance with legal obligations: To comply with applicable laws, regulations, and legal processes.
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="mt-12 ml-4" id="info-share">
                                        <p className="font-bold">
                                            How We Share Your Information
                                        </p>
                                        <p>
                                            We do not sell, trade, or rent your personal data to third parties. However, we may share your information in the following scenarios:<br />
                                        </p>
                                        <ul className="list-disc ml-5">
                                            <li>
                                                With service providers: We may share your data with third-party service providers who assist us in operating our website, conducting our business, or servicing you.                                            </li>
                                            <br />
                                            <li>
                                                For legal purposes: If required by law or if we believe it is necessary to protect our rights, property, or safety, we may disclose your information to comply with legal obligations.                                            </li>
                                            <br />

                                            <li>
                                                Business transfers: In the event of a merger, acquisition, or asset sale, your personal data may be transferred to a third party.                                            </li>



                                        </ul>
                                    </div>
                                    <div className="mt-12 ml-4" id="data-sec">
                                        <p className="font-bold">
                                            Data Security
                                        </p>
                                        <p>
                                            We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no transmission over the Internet is 100% secure, and we cannot guarantee the absolute security of your data.
                                        </p>
                                    </div>
                                    <div className="mt-12 ml-4" id="rights">
                                        <p className="font-bold">
                                            Your Rights
                                        </p>
                                        <p>
                                            You have the following rights regarding your personal data:
                                            <br />
                                        </p>
                                        <ul className="list-disc ml-5">
                                            <li>
                                                Access: You may request access to the personal information we hold about you.                                            </li>
                                            <br />
                                            <li>
                                                Correction: You have the right to request that we correct any inaccurate or incomplete information.                                            </li>
                                            <br />

                                            <li>
                                                Deletion: You may request the deletion of your personal data, subject to certain legal obligations.                                            </li>
                                            <br />
                                            <li>
                                                Objection to processing: You can object to the processing of your data in certain circumstances.                                            </li>

                                            <li>
                                                To exercise any of these rights, please contact us at info@ecesistech.com
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="mt-12 ml-4" id="third-party">
                                        <p className="font-bold">
                                            Third-Party Links
                                        </p>
                                        <p>
                                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to read the privacy policies of any third-party sites you visit.                                            <br />
                                        </p>

                                    </div>
                                    <div className="mt-12 ml-4" id="changes">
                                        <p className="font-bold">
                                            Changes to This Privacy Policy
                                        </p>
                                        <p>
                                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically.                                        </p>

                                    </div>
                                    <div className="mt-12 ml-4" id="contact">
                                        <p className="font-bold">
                                            Contact Us
                                        </p>
                                        <p>
                                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                                        </p>
                                        <p className="">ECESIS<br />info@ecesistech.com</p>

                                    </div>

                                </section>

                            </div>


                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}
