'use client'
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import { useState, useEffect } from "react";
import Marquee2 from "./Marquee2";
import Request3 from "./Request3";


export default function MainService() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(null);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const handleResize = () => {
        const mobileView = window.innerWidth <= 768;
        setIsMobile(mobileView);
        if (mobileView) {
            setActiveIndex(0);
        }
    };

    useEffect(() => {
        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile === null) {
        return null;  // Or render a loading spinner or placeholder component here
    }

    return (
        <>
            <div>
                <section className="services__area-six services__bg-six" data-background="/assets/img/bg/services_bg1.webp">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title white-title mb-10">
                                    {/* <span className="sub-title">WHAT WE OFFER</span> */}
                                    <h2 className={`text-lblue text-5xl ${isMobile ? "text-center" : "text-left"}`}>Our Services</h2>
                                </div>
                            </div>

                            {/* <div className="col-lg-6">
                                    <div className="section-more-btn">
                                        <Link href="/services" className="btn border-btn">See More Services</Link>
                                    </div>
                                </div> */}
                        </div>

                        <div className="row">
                            <div className="col-12">

                                <div className="services__tab-wrap">

                                    {/* <div className={`fab-container ${isMobile ? "" : "hidden"}`}>
                                        <button className="fab-button" onClick={toggleRing}>+</button>
                                        <div className={`ring ${isOpen ? 'show' : ''}`}>
                                                <button className="ring-button"  onClick={() => handleOnClick(1)}>
                                                   
                                                </button>
                                           
                                        </div>
                                    </div> */}

                                    <ul className={`nav nav-tabs`} id="myTab" role="tablist">
                                        <div className="col-lg-12">
                                            <div className="section-title white-title ">
                                                <span className={`text-lblue text-2xl font-extrabold`}>Digital Solutions</span>

                                            </div>
                                        </div>
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/proptech">
                                                        <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true">PropTech</button>
                                                    </Link>

                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true">PropTech</button>

                                                </>
                                            )
                                            }

                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/artificial-intelligence">
                                                        <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="false">Artificial Intelligence</button>
                                                    </Link>

                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="false">Artificial Intelligence</button>

                                                </>
                                            )
                                            }

                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/business-process-automation">
                                                        <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false">Business Process Automation </button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false">Business Process Automation </button>

                                                </>
                                            )
                                            }

                                        </li>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false">Cloud Infrastructure</button>
                                        </li> */}
                                        {/* <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/software-development">
                                                        <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Enterprise Software Solutions</button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Enterprise Software Solutions</button>

                                                </>
                                            )
                                            }

                                        </li> */}
                                        {/* <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false"><i className="flaticon-house" />Fire Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                                            <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false"><i className="flaticon-motorbike" />Bike Insurance</button>
                                        </li> */}
                                        <div className="col-lg-12 mt-14">
                                            <div className="section-title white-title">
                                                <span className="text-lblue text-2xl font-extrabold mb-3">Business Consulting</span>

                                            </div>
                                        </div>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true"><i className="flaticon-healthcare" /> Health Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Travel Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false"><i className="flaticon-protection" />Vehicle Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false"><i className="flaticon-ship" />Cargo Insurance</button>
                                        </li> */}
                                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/real-estate-valuation">
                                                        <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false">Real Estate Valuation</button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false">Real Estate Valuation</button>

                                                </>
                                            )
                                            }

                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/accounting-finance">
                                                        <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false">Accounting & Finance</button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false">Accounting & Finance</button>

                                                </>
                                            )
                                            }

                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/manpower-staffing">
                                                        <button className={activeIndex == 7 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Talent Acquisition</button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 7 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Talent Acquisition</button>

                                                </>
                                            )
                                            }

                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(8)}>
                                            {isMobile ? (
                                                <>
                                                    <Link href="/services-details/digital-marketing">
                                                        <button className={activeIndex == 8 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Digital Marketing</button>

                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <button className={activeIndex == 8 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Digital Marketing</button>

                                                </>
                                            )
                                            }

                                        </li>
                                    </ul>


                                    <div className={`tab-content ${isMobile ? "hidden" : ""}`} id="myTabContent">
                                    <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                            <div className="services__item-four  shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Proptech.webp" className="" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">PropTech</Link></h2>
                                                    <p>Empowering Real Estate with 14+ Years of Technological Excellence. We are a visionary PropTech company dedicated to revolutionizing the real estate industry through cutting-edge technology. With a proven track record of delivering innovative solutions, we empower clients to achieve unprecedented success.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" /> Artificial Intelligence in Real Estate </li>
                                                            <li><i className="fas fa-check" /> Tailored Software for Real Estate</li>
                                                            <li><i className="fas fa-check" /> Web Development </li>
                                                            <li><i className="fas fa-check" /> Comprehensive PropTech Solutions </li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/proptech" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                            <div className="services__item-four  shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/AI.webp" className="" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Artificial Intelligence</Link></h2>
                                                    <p>Harness the power of Artificial Intelligence (AI) to propel your business to new heights. Our data-driven approach leverages cutting-edge AI and machine learning to transform your business. Make smarter decisions, streamline processes, and craft personalized customer experiences that drive lasting success</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" /> AI Solutions Tailored for You </li>
                                                            <li><i className="fas fa-check" /> Machine Learning Expertise </li>
                                                            <li><i className="fas fa-check" /> Solve complex challenges and drive innovation </li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/artificial-intelligence" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="travel-tab-pane" role="tabpanel" aria-labelledby="travel-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Automation.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Business Process Automation</Link></h2>
                                                    <p>Optimize your business operations with automation. Our strategic approach enhances efficiency, reduces costs, and streamlines processes, creating a solid foundation for sustained success.
                                                        <br /><br />
                                                        Crafted to fit your unique business requirements, our solutions enhance speed and accuracy while reducing costs and streamlining FTE management, keeping you ahead in the competitive landscape.                                                    </p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Streamlined Operations</li>
                                                            <li><i className="fas fa-check" />Cost Reduction</li>
                                                            <li><i className="fas fa-check" />Scalability</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/business-process-automation" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Cloud.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Cloud Infrastructure</Link></h2>
                                                    <p>Drive substantial business growth through robust cloud infrastructure. Our comprehensive suite of services including VPN, VPS, and dedicated servers enhances your operational capabilities. These offerings ensure a secure, scalable, and highly available infrastructure, fostering a resilient environment for sustained expansion.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />VPN Security</li>
                                                            <li><i className="fas fa-check" />VPS Flexibility</li>
                                                            <li><i className="fas fa-check" />Dedicated Servers</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/cloud-infrastructure" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Web.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Enterprise Software Solutions</Link></h2>
                                                    <p>Tailored to meet the unique needs of your business, our web application solutions enhance online visibility and operational efficiency, ensuring you stay ahead in a competitive marketplace.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Software Development</li>
                                                            <li><i className="fas fa-check" />Website Development</li>
                                                            <li><i className="fas fa-check" />Comprehensive Support</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/software-development" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="fire-tab-pane" role="tabpanel" aria-labelledby="fire-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/RealEstate.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Real Estate Valuation</Link></h2>
                                                    <p>
                                                        For over a decade, we have partnered with realtors, brokers, and real estate companies with precise valuations and Comparative Market Analysis (CMA). Our commitment to high-quality, value-driven deliverables ensures that you remain proactive, decisive, and adaptable as your business evolves and expands.
                                                    </p>                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Trusted partner to 150+ realtors</li>
                                                            <li><i className="fas fa-check" />Round-the-clock support</li>
                                                            <li><i className="fas fa-check" />3X Revenue Growth For Clients</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/real-estate-valuation" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Accounting.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Accounting & Finance</Link></h2>
                                                    <p>We specialize in unlocking accounting gaps and navigating the complexities of tax compliance with confidence and ease. Our suite of services is designed to bring harmony, accuracy, and strategic insight to all your financial processes.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Bookkeeping</li>
                                                            <li><i className="fas fa-check" />Payroll Management</li>
                                                            <li><i className="fas fa-check" />Purchase Order Matching</li>
                                                            <li><i className="fas fa-check" />Accounts Payable & Reconciliation</li>
                                                            <li><i className="fas fa-check" />Tax Preparation, Filings, and Reporting</li>

                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/accounting-finance" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 7 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/ManpowerStaffing.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Talent Acquisition</Link></h2>
                                                    <p>We specialize in placing trained precision and assembly line engineers and other skilled manpower for various sectors. Choose us for a staffing strategy that goes beyond conventional solutions, delivering unparalleled results tailored to your organizational goals. We offer sophisticated solutions encompassing <br /> end-to-end recruitment, general staffing, executive hiring, and various other services to meet contractual or permanent hiring needs.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Precision Placements</li>
                                                            <li><i className="fas fa-check" />Client-Centric Approach</li>
                                                            <li><i className="fas fa-check" />Proven Expertise</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details/manpower-staffing" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 8 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/DigitalMarketing.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="#">Digital Marketing</Link></h2>
                                                    <p>
                                                        We help you in positioning and promoting your brand, bringing in new customers at optimum costs and helping you win new & exciting business deals that improve your brand value.
                                                        <br /><br />
                                                        We help businesses get better returns on their marketing expenditure, e-commerce sites sell more goods, local businesses dominate their geographic areas and corporate entities have a better brand reputation.                                                    </p>
                                                    {/* <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div> */}
                                                    <Link href="/services-details/digital-marketing" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <img src="/assets/img/project/h3_project_shape01.webp" alt="" data-aos="fade-left" data-aos-delay={400} />
                        <img src="/assets/img/project/h3_project_shape02.webp" alt="" className="alltuchtopdown" />
                    </div> */}
                    {/* <Request3/> */}
                </section>
                {/* services-area-end */}
                {/* brand-area */}






            </div>

        </>
    )
}