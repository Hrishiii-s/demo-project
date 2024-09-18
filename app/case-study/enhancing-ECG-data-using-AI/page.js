'use client'
import withLoading from "@/app/withLoading";
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from "react";



function ECGCaseStudy() {
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
        return <div>Loading...</div>; // Or any other loading indicator
    }


    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={"Enhancing ECG Data Accuracy in Cardiac Monitoring through AI Integration"} Nothome={Nothome}>
                <section className="services__details-area main-font">
                    <div className="container">
                        <div className="services__details-wrap">
                            <p className="text-2xl text-black"><span className="font-bold text-2xl">Client:</span> A leading healthcare service provider in the cardiac monitoring industry</p>
                            <p className="text-2xl text-black"><span className="font-bold text-2xl">Industry:</span> Healthcare</p>

                            <div className="mt-8">
                                <p className="title text-2xl font-bold text-black">Background</p>
                                <p className="mt-7">Our client, a leading healthcare service provider in the cardiac monitoring industry, has developed a patented algorithm for ECG
                                    (Electrocardiogram) data analysis and classification. This algorithm, which was implemented in core C language, is crucial for detecting
                                    and classifying heartbeats in patients' ECG data. However, the legacy nature of the algorithm has introduced challenges in maintaining
                                    and upgrading it over time.</p>

                            </div>




                            <div className="mt-8">
                                <p className="title text-2xl font-bold text-black">Problem</p>
                                <div className="mt-8">
                                    {isMobile ? (
                                        <div className="relative max-w-xs mx-auto">
                                            <img src="/assets/img/icon/ecg_problem_mobile.png" alt="" className="w-full justify-center mx-auto" />
                                            <div className="absolute top-[40%] left-[3%]">
                                                <p className="text-center text-base font-bold">Legacy Algorithm<br /> Maintenance</p>
                                            </div>
                                            <div className="absolute top-[40%] right-[10%]">
                                                <p className="text-center text-base font-bold">Upgrade<br /> Challenges</p>
                                            </div>
                                            <div className="absolute -bottom-[23%] left-[5%]">
                                                <p className="text-center text-base font-bold">Complex<br /> Heartbeat<br /> Classification</p>
                                            </div>
                                            <div className="absolute -bottom-[23%] right-[3%]">
                                                <p className="text-center text-base font-bold">Outdated<br /> Implementation in <br />C Language</p>
                                            </div>
                                        </div>

                                    ) : (
                                        <div className="relative">
                                            <img src="/assets/img/icon/ecg_problem.png" alt="" className="w-[300px] justify-center mx-auto" />
                                            <div className="absolute top-[50px] left-[260px]">
                                                <p className="text-right text-lg font-bold">Legacy Algorithm <br />Maintenance</p>
                                            </div>
                                            <div className="absolute top-[60px] right-[250px]">
                                                <p className="text-left text-lg font-bold">Upgrade Challenges</p>
                                            </div>
                                            <div className="absolute bottom-[30px] left-[260px]">
                                                <p className="text-right text-lg font-bold">Complex Heartbeat <br />Classification</p>
                                            </div>
                                            <div className="absolute bottom-[30px] right-[190px]">
                                                <p className="text-left text-lg font-bold">Outdated Implementation in <br />C Language</p>
                                            </div>

                                        </div>
                                    )}

                                    <p className="mt-[37%] lg:mt-8">One of the critical issues with the existing algorithm is its sensitivity to noise within the ECG data. The algorithm often misclassifies
                                        noise as heartbeats and, conversely, fails to identify certain legitimate heartbeats. This has led to significant inefficiencies, as the UI
                                        provided to ECG technicians requires them to manually review and correct these misclassifications, which is a time-consuming
                                        process. Since the system is well-established and stable, a complete rewrite of the workflow was deemed impractical due to the risks
                                        and costs involved.</p>

                                </div>




                            </div>

                            <div className={`${isMobile ? "w-full" : "w-[95%]"}`}>
                                <p className="title text-2xl font-bold text-black mt-12">Solution</p>
                                <p className="text-lg  text-gray-900">To address this challenge, we implemented an AI classification model as an intermediary between the algorithm's output and the
                                    technicians' UI. This AI model is specifically designed to identify and remove noise from the data before it reaches the technicians.</p>
                                <p className="text-lg text-gray-900">By improving the accuracy of beat identification and reducing the occurrence of noise misclassifications, the AI model significantly
                                    decreases the amount of manual intervention required by the technicians.</p>

                                <h2 className="text-[60px] mt-8 text-gray-500 text-center">AI Technology Stack</h2>
                                <div className="mt-12">
                                    {isMobile ? (
                                        <div className="relative mx-auto">
                                            <img src="/assets/img/icon/ecg_solution_mobile.png" alt="" className="w-[30%] justify-center mx-auto" />
                                            <div className="">
                                                <div className="absolute top-[2%] left-[0%] w-[35%]">                                               
                                                        <p className="text-right text-xs font-bold pr-2 text-red-400">Data Processing</p>
                                                        <p className="text-right text-[8px] pr-2 font-bold">The ECG data is pre-processed using Python libraries.</p>                                              
                                                </div>

                                                <div className="absolute top-[32%] -left-[5%] w-[40%]">                                               
                                                        <p className="text-right text-xs font-bold pr-2 text-blue-400">Noise Filtering</p>
                                                        <p className="text-right text-[8px] px-2 font-bold">An additional noise filtering layer was implemented using techniques from signal processing libraries like SciPy.</p>                                                
                                                </div>

                                                <div className="absolute bottom-[16%] -left-[5%] w-[40%]">                                                  
                                                        <p className="text-right text-xs font-bold pr-2 text-purple-500">Integration</p>
                                                        <p className="text-right text-[8px] px-2 font-bold">The AI model was integrated into the existing workflow using a microservices architecture.</p>                                   
                                                </div>

                                            </div>
                                            <div className="w-full">
                                                <div className="absolute top-[16%] left-[65%]">

                                                    <p className="text-left text-xs font-bold pl-2 text-emerald-400">AI Model</p>
                                                    <p className="text-left text-[8px] px-2 font-bold">A Convolutional Neural Network (CNN) was employed for the classification task.</p>

                                                </div>

                                                <div className="absolute bottom-[30%] left-[65%]">
                                                    <p className="text-left text-xs font-bold pl-2 text-yellow-500">Model Training</p>
                                                    <p className="text-left text-[8px] px-2 font-bold">The model was trained on a large dataset of annotated ECG signals, using GPU acceleration to expedite the training process. </p>
                                                </div>

                                                <div className="absolute -bottom-[5%] left-[65%]">
                                                    <div className="">
                                                        <p className="text-left text-xs font-bold pl-2 text-lime-500">Monitoring<br /> and Updates</p>
                                                        <p className="text-left text-[8px] px-2 font-bold">A monitoring system was put in place using tools like Prometheus and Grafana to track the model’s performance and accuracy over time.</p>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                    ) : (
                                        <div className="relative">
                                            <img src="/assets/img/icon/ecg_solution.png" alt="" className="w-[400px] justify-center mx-auto" />
                                            <div className="absolute top-[4%] left-[8%]">
                                                <p className="text-right font-bold text-red-400">Data Processing</p>
                                                <p className="text-left text-xs font-bold w-[270px]">The ECG data is pre-processed
                                                    using Python libraries such as
                                                    NumPy and Pandas to ensure that
                                                    the data is clean and properly
                                                    formatted before being fed into
                                                    the AI model.</p>
                                            </div>
                                            <div className="absolute top-[35%] left-[8%]">
                                                <p className="text-right font-bold text-blue-400">Noise Filtering</p>
                                                <p className="text-left text-xs font-bold w-[270px]">An additional noise filtering layer
                                                    was implemented using techniques
                                                    from signal processing libraries
                                                    like SciPy to remove irrelevant or
                                                    misleading data points before
                                                    classification.</p>
                                            </div>
                                            <div className="absolute bottom-[14%] left-[8%]">
                                                <p className="text-right font-bold text-purple-500">Integration</p>
                                                <p className="text-left text-xs font-bold w-[270px]">The model was trained on a large dataset of annotated ECG signals, using GPU acceleration to expedite the training process. Techniques such as data augmentation and cross-validation were used to enhance model robustness and generalization.</p>
                                            </div>
                                            
                                            <div className="absolute top-[19.3%] right-[8%]">
                                                <p className="text-left font-bold text-emerald-400">AI Model</p>
                                                <p className="text-left text-xs font-bold w-[270px]">A Convolutional Neural Network
                                                    (CNN) was employed for the
                                                    classification task, leveraging
                                                    TensorFlow and Keras for model
                                                    development. The CNN architecture
                                                    is well-suited for recognizing
                                                    patterns in sequential data like ECG
                                                    signals.</p>                                            </div>

                                            <div className="absolute top-[51%] right-[8%]">
                                                <p className="text-left font-bold text-yellow-500">Model Training</p>
                                                <p className="text-left text-xs font-bold w-[270px]">The model was trained on a large
                                                    dataset of annotated ECG signals,
                                                    using GPU acceleration to expedite
                                                    the training process. Techniques
                                                    such as data augmentation and
                                                    cross-validation were used to
                                                    enhance model robustness and
                                                    generalization.</p>                                            </div>
                                            <div className="absolute -bottom-[2%] right-[8%]">
                                                <p className="text-left font-bold text-lime-500">Monitoring and Updates</p>
                                                <p className="text-left text-xs font-bold w-[270px]">A monitoring system was put in
                                                    place using tools like Prometheus
                                                    and Grafana to track the model’s
                                                    performance and accuracy over
                                                    time. This allows for continuous
                                                    improvement and retraining of the
                                                    model as new data becomes
                                                    available.</p>                                            </div>

                                        </div>
                                    )}
                                </div>



                            </div>
                        </div>
                    </div>
                    <section className="call-back-area call-back-area-two mt-24">
                        <div className="">
                            <div className="call-back-wrap bg-lblue">
                                <div className="row align-items-center">
                                    <div className="call-back-content flex flex-row justify-center items-center text-left" >
                                        <div className="section-title white-title tg-heading-subheading animation-style3">
                                            <h1 className="mb-0 text-4xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Business Consultant</span>
                                            </h1>

                                            <p className="text-white  text-xl mt-3">Get started by talking to our experts about how to enable business insights at scale with the right data foundation, modernization and platform management.</p>
                                            <Link href="/schedule-a-meeting" className="btn mt-5">BOOK A CONSULTATION</Link>
                                        </div>
                                        {/* {!isMobile ? (<div className="">
                                            <img src="/assets/img/images/callback_photo.webp" alt="" style={{ width: '1100px' }} className="ml-2 rounded-2xl" />

                                        </div>) : null} */}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="p-2">
                        <div className={`${isMobile ? "w-full" : "w-[95%] "} mt-16 bg-slate-200 p-4 rounded-lg container`}>
                            <p className="title text-2xl font-bold text-black">Result</p>

                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <p className="text-lg text-gray-900 ">The integration of the AI classification model resulted in a substantial reduction in the time technicians spent on data cleaning tasks, allowing
                                        them to focus on more critical aspects of their work. Additionally, the overall accuracy of the ECG data analysis improved, leading to better
                                        patient outcomes and more efficient use of resources.
                                    </p>
                                    <ul className={`${isMobile ? "ml-4" : "ml-12"}  text-justify`}>
                                        <li className="list-disc"><p className="">
                                            <span className="font-bold">
                                                Improved
                                            </span>
                                            &nbsp;ECG accuracy and patient outcomes.
                                        </p>
                                        </li>
                                        <li className="list-disc"><p className="">
                                            <span className="font-bold">
                                                Total FTE savings:                                       </span>
                                            Significant reduction in technician workload, allowing reallocation to more critical tasks.                              </p>
                                        </li>


                                    </ul>

                                </div>
                                {!isMobile && (
                                    <div>
                                        <img src="/assets/img/icon/ecg_result.png" alt="" className="" />
                                    </div>

                                )}

                            </div>





                        </div>
                    </div>

                    <div className="mt-8 p-3 container">
                        <p className="text-lg font-bold">Conclusion:</p>
                        <p className="text-xl text-left">This case highlights the effectiveness of leveraging AI to enhance legacy systems in healthcare, providing a scalable solution that preserves the
                            stability of existing workflows while introducing modern capabilities to address specific challenges. The success of this project underscores the
                            potential for AI to drive improvements in clinical settings without necessitating extensive overhauls of established systems.
                        </p>
                    </div>

                </section>
            </Layout>
        </>
    )
}

export default withLoading(ECGCaseStudy);