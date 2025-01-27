"use client";
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/PopupVideo";
import data from "@/util/blog.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogConvert from "@/components/blog/BlogConvert";
import CallbackAuto from "@/components/sections/Callback_Auto"
import DOMPurify from 'dompurify';
import Model from "@/public/assets/img/blog/BOT_Model.png"



export default function BlogTest() {
    let slug =
        "How-Proptech-Firms-Can-Scale-Operations-with-Workforce-Extension-Services";
    const [blogPost, setBlogPost] = useState(null);
    const [latestPosts, setLatestPosts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Sort posts by date in descending order (latest first)
        // Sort posts by date (latest first) and fetch the last 4
        const sortedPosts = [...data].sort(
            (a, b) => new Date(b.sort_date) - new Date(a.sort_date)
        );

        // Get the last 4 entries
        const lastFourPosts = sortedPosts.slice(0, 4);
        setLatestPosts(lastFourPosts);
    }, []);

    useEffect(() => {
        console.log("Slug:", slug); // Check if slug is correct
        const post = data.find((post) => post.slug === slug);
        console.log("BlogPost:", post); // Check if the post is being found
        setBlogPost(post); // Find the blog post by slug
    }, [slug]); // Effect will re-run if slug changes

    const titleurl = slug.replace(/-/g, " ");


    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                {blogPost && (
                    <>
                        <div>
                            <section className="blog__details-area">
                                <div className="container">
                                    <div className="blog__inner-wrap">
                                        <div className="row">
                                            <div className="col-70">
                                                <div className="blog__details-wrap">
                                                    <div className="blog__details-thumb">
                                                        <img
                                                            src={`/assets/img/blog/${blogPost.img}`}
                                                            className="w-100"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="blog__details-content">
                                                        <h2 className="title">{blogPost.title}</h2>
                                                        <div className="blog-post-meta">
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <Link
                                                                        href="/blog"
                                                                        className="blog__post-tag-two"
                                                                    >
                                                                        {blogPost.category}
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <div className="blog-avatar">
                                                                        <div className="avatar-thumb">
                                                                            <img
                                                                                src={`/assets/img/avatar/${blogPost.avatar}`}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="avatar-content">
                                                                            <p>
                                                                                By
                                                                                <Link href="/blog">
                                                                                    {blogPost.author}
                                                                                </Link>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-calendar-alt" />
                                                                    {blogPost.date}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bg-gray-200 w-full h-[3px] rounded-lg mb-4" />

                                                        {/* <BlogConvert jsonContent={blogPost.content} /> */}
                                                        {/* <span className='font-bold'></span> */}
                                                        <div>


                                                            <p>
                                                                In the dynamic real estate industry, agents and brokers often find themselves balancing multiple responsibilities—from client engagement to property marketing and negotiations. Amidst these tasks, conducting thorough property valuations can be time-consuming and divert focus from core business activities. This is where <span className='font-bold'>Broker Price Opinion (BPO)</span>  outsourcing becomes invaluable. By delegating these tasks to specialized service providers, you can streamline your operations, enhance efficiency, and concentrate on what truly matters: closing deals and fostering client relationships.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                By outsourcing your<span className='font-bold'> real estate BPO tasks</span> , you can delegate labor-intensive processes such as data entry, research, and valuation report generation to specialized experts. This allows you to simplify your workflow, save time, reduce costs, and focus on driving your business forward.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                Property valuations involve more than just crunching numbers. There’s data collection, market research, comparable selection, and report generation—all of which can bog down your daily operations. By outsourcing these tasks, you streamline your workflow and eliminate unnecessary distractions.
                                                                <br />
                                                            </p>


                                                            <p>
                                                                Our<span className='font-bold'> BPO for real estate agents and brokers</span> integrates seamlessly into your existing processes. With ECESIS, you get a partner who takes care of the technical details while you focus on client engagement, property marketing, and deal-making.
                                                                <br />
                                                            </p>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />


                                                            <p className="mt-4">
                                                                At <span className='font-bold'>ECESIS</span>, we deliver tailored <a href='/services-details/real-estate-valuation' className="font-bold">real estate BPO services</a> designed to meet the unique needs of agents and brokers. From <span className='font-bold'>BPO portal registration to order acceptance and data processing</span>, we ensure seamless management of valuation workflows. Our advanced tools, like the proprietary <a href='https://bpoacceptor.com/' className='font-bold'>BPO Acceptor</a>, further enhance efficiency and help secure opportunities faster than ever.                                                                <br />
                                                            </p>



                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />



                                                            <h2 className="font-bold text-xl my-3">How Broker Price Opinion Outsourcing Simplifies Your Workflow</h2>
                                                            <h3 className="font-bold text-lg my-3">1. BPO Portal Registration and Management</h3>
                                                            <p>
                                                                Navigating the complexities of registering and maintaining profiles across multiple BPO portals can be time-consuming. At ECESIS, we manage this process for you, handling registrations with over 100 leading BPO portals and asset management companies.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                Our team ensures your profiles are compliant, up-to-date, and optimized for maximum order acceptance. This service eliminates the administrative burden of portal management, allowing you to focus on your clients and transactions.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-lg my-3">2. Order Acceptance Powered by BPO Acceptor</h3>
                                                            <p>
                                                                In a competitive market, securing orders quickly is critical. ECESIS addresses this challenge with our proprietary software, <span className='font-bold'>BPO Acceptor</span>, which ensures you never miss an opportunity.
                                                                <br />
                                                            </p>

                                                            <h4 className="font-bold text-lg my-3">Key Features of BPO Acceptor:</h4>
                                                            <ul className="list-disc ml-16">
                                                                <li><span className="font-bold">Instant Captcha Solving:</span> Automates and speeds up the process of solving captchas.</li>
                                                                <li><span className="font-bold">Regional Compliance Checks:</span> Verifies that all orders meet regional and client-specific requirements before acceptance.</li>
                                                                <li><span className="font-bold">Lightning-Fast Order Capture:</span> Maximizes opportunities by securing available orders faster than manual processes.</li>

                                                            </ul>

                                                            <p className="mt-3">
                                                                The result? You save valuable time and secure more assignments, ensuring consistent business growth and profitability.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-lg my-3">3. Comprehensive Data Processing and Analysis</h3>
                                                            <p>
                                                                Accurate property valuations are the foundation of any successful real estate transaction. Our team at ECESIS handles all aspects of data processing, ensuring that every valuation is: <span className='font-bold'>BPO Acceptor</span> ,which ensures you never miss an opportunity.
                                                                <br />
                                                            </p>

                                                            <ul className="list-disc ml-16">
                                                                <li>Backed by thorough market research.</li>
                                                                <li>Compliant with current industry standards and regulations.</li>
                                                                <li>Tailored to meet your specific client and regional requirements.</li>

                                                            </ul>

                                                            <p className="mt-3">
                                                                From initial order capture to generating detailed valuation reports, we ensure that every step is carried out with precision and professionalism, helping you maintain credibility and trust with your clients.
                                                                <br />
                                                            </p>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />


                                                            <h2 className="font-bold text-xl my-3">Why Choose ECESIS for Your Broker Price Opinion Outsourcing Needs?
                                                            </h2>
                                                            <p>
                                                                With over 15 years of experience, ECESIS has established itself as a trusted partner for agents, brokers, and appraisal companies across the U.S. Our focus on delivering efficient and accurate BPO services ensures that you remain competitive in a rapidly evolving market.
                                                                <br />
                                                            </p>



                                                            <h3 className="font-bold text-lg my-3">What Sets Us Apart?</h3>
                                                          
                                                            <ul className="list-decimal ml-16">
                                                                <li className="mt-2"><span className="font-bold">Comprehensive Solutions</span><br/>From <span className="font-bold">BPO portal registration</span> to <span className="font-bold">order acceptance and data processing</span>, we handle every aspect of the valuation lifecycle</li>
                                                                <li className="mt-2"><span className="font-bold">Advanced Technology with BPO Acceptor</span><br/>Our proprietary software eliminates inefficiencies, ensuring unmatched speed and accuracy in order acceptance.</li>
                                                                <li className="mt-2"><span className="font-bold">Skilled and Experienced Team</span><br/>Our analysts and processors bring a wealth of experience in real estate valuation, ensuring that every report meets the highest standards of accuracy and compliance.</li>
                                                                <li className="mt-2"><span className="font-bold">Customizable Services</span><br/>Whether you’re managing a few properties or handling large portfolios, our services are designed to scale with your business needs.</li>
                                                                <li className="mt-2"><span className="font-bold">Compliance and Standards</span><br/>We prioritize adherence to all industry regulations, ensuring that every valuation is compliant and reliable</li>
                                                            </ul>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />

                                                            <h2 className="font-bold text-xl my-3">Benefits of Broker Price Opinion Outsourcing</h2>
                                                            <p>Partnering with ECESIS for your <span className="font-bold">real estate BPO needs </span> provides numerous advantages, including:
                                                                <br/>
                                                            </p>
                                                            <h4 className="font-bold text-xl my-3"></h4>
                                                            <ul className="list-disc ml-16">
                                                                <li className="mt-2"><span className="font-bold">Time Savings:</span> Spend less time on administrative tasks and focus on client-facing activities.</li>
                                                                <li className="mt-2"><span className="font-bold">Enhanced Efficiency:</span> With tools like <span className="font-bold">BPO Acceptor</span>, streamline order acceptance and maximize opportunities.</li>
                                                                <li className="mt-2"><span className="font-bold">Improved Accuracy:</span> Our team ensures that every report is detailed, reliable, and backed by market insights.</li>
                                                                <li className="mt-2"><span className="font-bold">Cost-Effective Operations:</span> Reduce the overhead costs of maintaining an in-house team.</li>
                                                                <li className="mt-2"><span className="font-bold">Scalability:</span> Easily adapt to changing market demands without resource constraints.</li>
                                                            </ul>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />


                                                            <h2 className="font-bold text-xl my-3 ">2. Cost and Resource Optimization:</h2>
                                                            <p>
                                                            At <span className="font-bold">ECESIS</span>, we understand the challenges faced by real estate professionals in managing property valuations. Our <span className="font-bold">Broker Price Opinion outsourcing services</span> are designed to tackle these challenges head-on, offering a comprehensive solution that combines expert insights with cutting-edge technology.
                                                                <br />
                                                            </p>

                                                            <p>
                                                            From <span className="font-bold">BPO portal registration</span> and <span className="font-bold">order acceptance</span> using <span className="font-bold">BPO Acceptor</span> to <span className="font-bold">data processing </span>detailed , we provide everything you need to streamline your valuation workflows and enhance your operations.
                                                                <br />
                                                            </p>

                                                            <p>
                                                            <a href='/contact'><span className="font-bold">Contact us today</span> </a>to learn how our <span className="font-bold">real estate BPO services</span> can save you time, reduce costs, and empower your business to achieve greater success.
                                                                <br />
                                                            </p>


                                                            




                                                            <section className="call-back-area call-back-area-two mt-5">
                                                                <div className="">
                                                                    <div className="call-back-wrap-blog rounded-xl bg-lblue">
                                                                        <div className="row align-items-center">
                                                                            <div className="call-back-content flex flex-col justify-center items-center text-center" >
                                                                                <div className="section-title white-title tg-heading-subheading animation-style3">
                                                                                    <h2 className="mb-0 text-3xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Real Estate expert</span>
                                                                                    </h2>

                                                                                    <p className="text-white  text-lg mt-3">Transform your real estate operations by optimizing processes, increasing efficiency, and driving sustainable growth.</p>
                                                                                    <a href="/schedule-a-meeting" className="btn mt-2">BOOK A CONSULTATION</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>




                                                        <div className="blog__details-bottom">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-9">
                                                                    <div className="post-tags">
                                                                        <h5 className="title">Tags:</h5>
                                                                        {console.log(blogPost.tags)}
                                                                        <ul className="list-wrap flex flex-wrap">
                                                                            {blogPost.tags.map((tag, index) => {
                                                                                return (
                                                                                    <li
                                                                                        key={index}
                                                                                        className="w-fit mr-2 mb-2 md:mb-0 md:mt-2"
                                                                                    >
                                                                                        <Link href="#">{tag}</Link>
                                                                                    </li>
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-md-3">
                                                                    <div className="post-share">
                                                                        <h5 className="title">Share:</h5>
                                                                        <ul className="list-wrap">
                                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog__avatar-wrap">
                                                        <div className="blog__avatar-img">
                                                            <Link href="#">
                                                                <img
                                                                    src={`/assets/img/avatar/${blogPost.avatar}`}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="blog__avatar-info">
                                                            <span className="designation">Author</span>
                                                            <h4 className="name">
                                                                <Link href="#">{blogPost.author}</Link>
                                                            </h4>
                                                            <p>{blogPost.about}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-30">
                                                <aside className="blog__sidebar">
                                                    <div className="sidebar__widget">
                                                        <h4 className="sidebar__widget-title">
                                                            Latest Blogs
                                                        </h4>
                                                        <div className="sidebar__post-list">
                                                            {console.log("", latestPosts.slice(-3))}
                                                            {latestPosts.slice(-3).map((post) => (
                                                                <div
                                                                    className="sidebar__post-item"
                                                                    key={post.id}
                                                                >
                                                                    <div className="sidebar__post-thumb">
                                                                        <Link href={`/blog/${post.slug}`}>
                                                                            <img
                                                                                src={`/assets/img/blog/${post.img}`}
                                                                                alt={post.title}
                                                                                className="h-full w-full object-cover"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="sidebar__post-content">
                                                                        <h5 className="title">
                                                                            <Link href={`/blog/${post.slug}`}>
                                                                                {post.title}
                                                                            </Link>
                                                                        </h5>
                                                                        <span className="date">
                                                                            <i className="flaticon-time" />
                                                                            {new Date(post.date).toLocaleDateString(
                                                                                "en-US",
                                                                                {
                                                                                    year: "numeric",
                                                                                    month: "short",
                                                                                    day: "numeric",
                                                                                }
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                )}
            </Layout>
        </>
    );
}
