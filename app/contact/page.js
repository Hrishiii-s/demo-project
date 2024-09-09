'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Maps from "./map"
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default function Contact() {

    let Nothome = true;

    const sendEmail = async () => {

        const payload = {
            contactname: formData.name,
            email: formData.email,
            phoneno: formData.phoneNumber,
            comment: formData.message
        };

        try {
            const response = await axios.post('https://www.ecesistech.com/contact-form-submit.php', payload)
            console.log("Response from backened", response.data)
        }
        catch (error) {
            console.error('Error from backend:', error);
        }

    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [recaptchaToken, setRecaptchaToken] = useState(false);
    const [captchaError, setCaptchaError] = useState(false); // State to track if captcha error should be shown


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRecaptcha = () => {
        setRecaptchaToken(true);
        setCaptchaError(false); // Reset error on successful captcha completion

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recaptchaToken) {
            setCaptchaError(true); // Set error state if captcha is not completed
            return; // Prevent form submission
        }

        console.log('Form Data:', formData);
        // Here you can add what to do with the data, e.g., sending it to an API

        sendEmail();
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Let’s get in touch" Nothome={Nothome}>
                <div>
                    <section className="contact__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <div className="contact-map">
                                        <Maps/>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="contact__form-wrap">
                                        <h2 className="title">Give Us a Message</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="form-grp">
                                                    <h6 className="ml-2">Name <span className="text-red-600">*</span></h6>
                                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                                <div className="form-grp">
                                                    <h6 className="ml-2">E-mail <span className="text-red-600">*</span></h6>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                                <div className="form-grp">
                                                    <h6 className="ml-2">Phone <span className="text-red-600">*</span></h6>
                                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <h6 className="ml-2">Message <span className="text-red-600">*</span></h6>
                                                <textarea name="message" value={formData.message} onChange={handleChange} required />
                                            </div>
                                            <div className="flex">
                                                <ReCAPTCHA
                                                    sitekey="6LfzngEqAAAAALa1FOWlzb6YRIcSCisl1gB-mlk-"
                                                    onChange={handleRecaptcha}
                                                />
                                                {captchaError && <div className="w-fit h-fit ml-10 mt-3 rounded-lg bg-red-200  px-2 " style={{ paddingTop: '1px', paddingBottom: '1px' }}>

                                                    <p className="text-red-500 mt-2" >Please complete the reCAPTCHA.</p>
                                                </div>
                                                }

                                            </div>

                                            <button type="submit" className="btn mt-3">Submit</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="contact__content">
                                        <div className="section-title mb-35">
                                            <h2 className="title">Our Locations</h2>
                                        </div>
                                        <div className="contact__info">
                                            <ul className="list-wrap">
                                                <li className="mt-6">
                                                    <div className="mb-[77px]">
                                                        <img src="/assets/img/icon/india.webp" alt="" className="w-12" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">INDIA</h4>
                                                        <p>2nd Floor, Temple Square - PPD <br /> Ambalamukku Junction,<br /> Kowdiar P.0 Trivandrum. 695003 <br />Kerala, India</p>
                                                        <div className="flex flex-row">
                                                            <div className="text-[18px]">
                                                                <i className="flaticon-phone-call mr-2" />
                                                            </div>
                                                            <div className="content">

                                                                <Link href="">+91 9072310239</Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="mt-6">
                                                    <div className="mb-[30px]">
                                                        <img src="/assets/img/icon/usa.webp" alt="" className="w-12" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">US</h4>
                                                        <p>4830 West Kennedy Boulevard, Tampa<br />
                                                            Florida - 33609<br /> </p>
                                                        <div className="flex flex-row">
                                                            <div className="text-[18px]">
                                                                <i className="flaticon-phone-call mr-2" />
                                                            </div>
                                                            <div className="content">

                                                                <Link href="">+1 (813) 338 6870</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">E-mail</h4>
                                                        <Link href="mailto:info@ecesistech.com">info@ecesistech.com</Link>
                                                    </div>
                                                </li>
                                            </ul>
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