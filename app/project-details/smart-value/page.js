'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React, { useState } from "react";
import Modal from "@/app/Modal";

export default function ProjectDetails() {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <div className="relative">
                    <section className="project__details-area">
                        <div className="container">
                            <div className="project__details-wrap">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="project__details-top">
                                            <div className="row">
                                                <div className="col-70">
                                                    <div className="project__details-thumb">
                                                        <img src="/assets/img/project/project_details01.webp" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-30">
                                                    <div className="project__details-info">
                                                        <h4 className="title">Project Details</h4>
                                                        <ul className="list-wrap">
                                                            <li><span>Category:</span>Business Consulting</li>
                                                            <li><span>Client:</span>Mack Straing</li>
                                                            <li><span>Location:</span>USA</li>
                                                            <li><span>Value:</span>$50K</li>
                                                            <li><span>Website:</span>www.apexa.com</li>
                                                            <li>
                                                                <span>Share:</span>
                                                                <ul className="list-wrap project-social">
                                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project__details-content">
                                            <h3 className="text-3xl">Transforming Industries with Accurate and reliable Valuation Solutions using AI. <br />
                                                <span className="text-2xl font-normal">Revolutionize Your Operations with Unmatched Precision and Flexibility.
                                                </span></h3>
                                            <div className="project__details-inner">
                                                <div className="row align-items-center">


                                                    <div className="project__details-inner-content">
                                                        <h2 className="title">SmartValue</h2>
                                                        {/* <div className="content-inner">
                                                               
                                                                </div> */}
                                                    </div>
                                                    <p className="">Smart Value stands at the cutting edge of Valuation technology, offering unparalleled versatility and precision across industries. Central to Smart Value, innovation is its foundation on state-of-the-art machine learning algorithms, including Python - need to add technologies if any. This powerful tool is adept at analyzing available data with unmatched accuracy, thanks to extensive training on a diverse data set. The essence of Smart Value capability lies in its adaptability; with specific datasets for training, it can be tailored to meet any use case.
                                                    </p>
                                                    {/* <div>
                                                        <img src="/assets/img/icon/few_shot.webp" className="w-32 cursor-pointer" alt=""
                                                            onMouseEnter={() => setShowModal(true)}
                                                            onMouseLeave={() => setShowModal(false)} />
                                                    </div>
                                                    <div className="absolute justify-end items-end" style={{ bottom: '38%'}}>
                                                        {showModal && (
                                                            <div className="absolute justify-end items-end" style={{ bottom: '38%', maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
                                                                <Modal showModal={showModal} setShowModal={setShowModal}>
                                                                    <p className="text-lg">Dynamic content goes here!</p>
                                                                </Modal>
                                                            </div>
                                                        )}
                                                    </div> */}



                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* project-details-area-end */}
                    {/* call-back-area */}
                    <section className="call-back-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Request A Call Back</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.webp" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="call-back-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
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