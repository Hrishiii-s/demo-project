import CounterUp from "../elements/CounterUp"

export default function Counter3() {
    return (
        <>
            <section className="counter-area-three ">
                <div className="container">
                    <div className="row justify-content-center items-center justify-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6 ">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-time" />
                                </div>
                                <div className="content">
                                    <h2 className="count">14+</h2>
                                    <p>Years of Service Exellence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                                <div className="content">
                                    <h2 className="count">150+</h2>
                                    <p>Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">

                                <div className="icon">
                                    <i className="flaticon-trophy" />
                                </div>
                                <div className="content">
                                    <h2 className="count">50+</h2>
                                    <p>Successfully Completed Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-happy" />
                                </div>
                                <div className="content">
                                    <h2 className="count">100%</h2>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
