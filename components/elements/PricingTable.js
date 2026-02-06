'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PricingTable() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            {/* <div className={isToggled ? "pricing__tab selected" : " pricing__tab"}>
                <span className={`pricing__tab-btn monthly_tab_title  ${isToggled ? "active" : ""}`}>Monthly</span>
                <span className={`pricing__tab-switcher ${isToggled ? "active" : ""}`} onClick={handleToggle} />
                <span className={`pricing__tab-btn annual_tab_title ${isToggled ? "active" : ""}`}>Yearly</span>
            </div> */}
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title mr-3">Basic Service Package</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h5>
                                Basic Order Acceptance
                            </h5>
                            {/* <h2 className="price monthly_price"><strong>$</strong> 2.00 <span>/ Order</span></h2> */}
                            {/* <h2 className="price annual_price"><strong>$</strong> 149.00 <span>/ Month</span></h2> */}
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <h5 className="font-bold text-lg mb-3">
                                    Pricing:
                                </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-6 mr-2' />
                                    Basic Order Acceptance: $2 per order
                                </li>
                                <h5 className="font-bold text-lg mb-3">
                                    Services Included:
                                </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-[96px] mr-2' />
                                    This package offers straightforward order acceptance without data processing, ideal for clients who manage their own data entry and analysis.
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="/schedule-a-meeting" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Premium Service Package</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h5>
                                BPO Advantage Plus
                            </h5>
                            {/* <h2 className="price monthly_price"><strong>$</strong> Custom <span>/ Order</span></h2> */}
                            {/* <h2 className="price annual_price"><strong>$</strong> 229.00 <span>/ Month</span></h2> */}
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <h5 className="font-bold text-lg mb-3">
                                    Services Included:
                                </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-6 mr-2' />
                                    Full-scale order management, including advanced data processing.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-12 mr-2' />
                                    Detailed property evaluations covering exterior, interior, and rental assessments.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-[50px] mr-2' />
                                    Comprehensive account management services from registration to final submission and follow-ups.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-[50px] mr-2' />
                                    Property condition reports and inspections to ensure thorough evaluations.
                                </li>
                                <h5 className="font-bold text-lg mb-3">
                                    Additional Benefits:
                                </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='-mt-[95px]' />
                                    Complimentary Trial Period: Enjoy a 3-day free trial to evaluate the quality and impact of our services, demonstrating our confidence in delivering exceptional results.
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                        <Link href="/schedule-a-meeting" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Platinum Service Package</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h5>
                                BPO Volume Advantage
                            </h5>
                            {/* <h2 className="price monthly_price"><strong>$</strong> Custom <span>/ Order</span></h2> */}
                        </div>
                        <div className="pricing__list">
                            <div className="mb-6">
                                <h5 className="font-bold text-lg mb-3">
                                    Pricing:
                                </h5>
                                <ul className="list-wrap">
                                    <li className="flex items-start">
                                        <img src="/assets/img/icon/check_icon.svg" alt="" className="-mt-[95px] mr-2" />
                                        <span>
                                            <span className='font-bold'>Volume-Based Pricing:</span> Tailored pricing options available for high-volume orders. <span className='font-bold'>Contact us for more information</span> and to discuss a pricing plan that meets your specific needs.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="font-bold text-lg mb-3">
                                    Additional Benefits:
                                </h5>
                                <ul className="list-wrap">
                                    <li className="flex items-start">
                                        <img src="/assets/img/icon/check_icon.svg" alt="" className="-mt-[95px] mr-2" />
                                        <span>
                                            Complimentary Trial Period: Enjoy a 3-day free trial to evaluate the quality and impact of our services, demonstrating our confidence in delivering exceptional results.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pricing__btn">
                        <Link href="/schedule-a-meeting" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
