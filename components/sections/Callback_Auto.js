import Link from "next/link"

export default function CallbackAuto(isMobile) {
    return (
        <>
            <section className="call-back-area call-back-area-two">
                <div className="">
                    <div className="call-back-wrap bg-lblue">
                        <div className="row align-items-center">
                            <div className="call-back-content flex flex-row justify-center items-center text-center" >
                                <div className="section-title white-title tg-heading-subheading animation-style3">
                                    <h2 className="mb-0 text-4xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Automation expert</span> 
                                    </h2>

                                    <p className="text-white  text-xl mt-3">Embrace RPA innovation and new process optimization opportunities to increase business efficiency and reduce costs.</p>
                                    <Link href="/schedule-a-meeting" className="btn mt-5">BOOK A CONSULTATION</Link>
                                </div>
                                {!isMobile ? (<div className="">
                                    <img src="/assets/img/images/callback_photo.webp" alt="" style={{ width: '1100px' }} className="ml-2 rounded-2xl" />

                                </div>) : null}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
