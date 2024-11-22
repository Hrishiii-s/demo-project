"use client";
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/PopupVideo";
import data from "@/util/blog.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogConvert from "@/components/blog/BlogConvert";
import CallbackAuto from "@/components/sections/Callback_Auto"


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
                                                                The U.S. real estate market is in a constant state of evolution, with firms and businesses facing increasing pressure to adapt to new challenges and leverage technology for growth. As one of the leading <span className='font-bold'>PropTech companies</span>, ECESIS brings over 15 years of expertise in real estate solutions, empowering businesses to scale efficiently and boost revenue. Backed by a team of 250+ experienced professionals, ECESIS offers a suite of services tailored to the unique needs of real estate firms across the nation.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                Here’s how ECESIS is helping real estate businesses achieve new heights:
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">1. Property Listings Management Made Easy</h3>
                                                            <p>
                                                                Keeping property listings accurate and up-to-date is critical for attracting buyers and renters. Yet, it’s a time-consuming and error-prone process when handled manually. ECESIS simplifies this task with automated data entry systems, ensuring:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li>Consistent and comprehensive property information.</li>
                                                                <li>Faster updates across multiple listing platforms.</li>
                                                                <li>Time savings that allow your team to focus on core business activities.</li>
                                                            </ul>


                                                            <h3 className="font-bold text-xl my-3">2. Revolutionizing Valuations and Broker Price Opinions</h3>
                                                            <p>
                                                                Valuations and BPOs are the foundation of real estate transactions. ECESIS utilizes AI-powered tools to deliver <span className='font-bold'><a href='/services-details/real-estate-valuation' class='underline text-[#e6ae15] font-bold'>accurate property assessments</a></span>, ensuring market credibility. Key benefits include:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li>Analysis of market trends and comparable sales for precise valuations.</li>
                                                                <li>Reduced turnaround times for BPO reports, enhancing client satisfaction.</li>
                                                                <li>Customizable valuation templates tailored to your firm’s needs.</li>
                                                            </ul>
                                                            <br/>
                                                            <p>
                                                                Our technology and expertise enable firms to provide reliable property appraisals that instill confidence in buyers, sellers, and lenders.
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">3. Streamlining the Underwriting Process</h3>
                                                            <p>
                                                                Underwriting is often plagued by inefficiencies and delays due to manual processes. ECESIS addresses this by <span className='font-bold'>automating key aspects of underwriting</span>, including:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li>Document collection and data validation.</li>
                                                                <li>Integration of AI to assess risks and streamline approvals.</li>
                                                                <li>Ensuring compliance with real estate and lending regulations.</li>
                                                            </ul>
                                                            <br/>
                                                            <p>
                                                                By reducing manual workloads, we help real estate firms expedite loan approvals and deliver a seamless experience to their clients.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">4. Mastering Data Entry and Management</h3>
                                                            <p>
                                                                Real estate operations rely heavily on accurate and organized data. ECESIS brings advanced automation to data entry processes, allowing firms to:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li>Minimize errors through intelligent data validation.</li>
                                                                <li>Maintain clean and organized databases for decision-making.</li>
                                                                <li>Free up resources for high-value business activities.</li>
                                                            </ul>
                                                            <br/>
                                                            <p>
                                                                From tax details and MLS data to market analyses, our team ensures that every piece of information is correctly logged and readily accessible.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">5. Supporting Real Estate Businesses at Scale</h3>
                                                            <p>
                                                                The combination of our cutting-edge <span className='font-bold'><a href='/services-details/proptech' class='underline text-[#e6ae15] font-bold'>PropTech solutions</a></span> and experienced team positions ECESIS as the go-to partner for real estate firms looking to grow. We work with businesses across the U.S., including large real estate firms and appraisal companies, to:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li>Automate repetitive tasks like data entry, valuations, and underwriting.</li>
                                                                <li>Save time and reduce costs while boosting operational efficiency.</li>
                                                                <li>Drive revenue growth by enabling faster, smarter decisions.</li>
                                                            </ul>

                                                            <h2 className="font-bold text-2xl my-3">Why Choose ECESIS?</h2>
                                                            <ul className="list-disc ml-4">
                                                                <li>
                                                                    <p className=""><span className="font-bold">Industry Expertise: </span>With over 15 years of experience in the U.S. real estate market, we bring unparalleled insights into the industry's challenges and opportunities.<br /></p>
                                                                </li>

                                                                <li>
                                                                    <p className=""><span className="font-bold">Skilled Team: </span>We harness the power of AI, automation, and machine learning to create solutions that drive tangible results.<br /></p>
                                                                </li>

                                                                <li>
                                                                    <p className=""><span className="font-bold">Innovative Technology: </span>We harness the power of AI, automation, and machine learning to create solutions that drive tangible results.<br /></p>

                                                                </li>


                                                                <li>
                                                                    <p className=""><span className="font-bold">Client-Focused Approach: </span>At ECESIS, your success is our priority. We customize our services to align with your business goals, ensuring sustainable growth.<br /></p>

                                                                </li>

                                                                <li>
                                                                    <p className=""><span className="font-bold">Partner with ECESIS Today: </span>As the real estate industry continues to embrace PropTech, partnering with ECESIS ensures your firm stays ahead of the competition. Whether it’s managing listings, conducting valuations, or automating data processes, our solutions are designed to optimize your operations and fuel your growth.<br /></p>

                                                                </li>


                                                            </ul>

                                                            <p className="mb-3">
                                                                Let ECESIS help you evolve, transform, and grow in today’s competitive market. Contact us today to learn how we can redefine the way your business operates.
                                                                <br />
                                                            </p>

                                                            <section className="call-back-area call-back-area-two mt-3">
                                                                <div className="">
                                                                    <div className="call-back-wrap-blog rounded-xl bg-lblue">
                                                                        <div className="row align-items-center">
                                                                            <div className="call-back-content flex flex-col justify-center items-center text-center" >
                                                                                <div className="section-title white-title tg-heading-subheading animation-style3">
                                                                                    <h2 className="mb-0 text-3xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Proptech expert</span>
                                                                                    </h2>

                                                                                    <p className="text-white  text-lg mt-3">Discover cutting-edge PropTech solutions to streamline real estate processes, boost operational efficiency, and drive growth.</p>
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
