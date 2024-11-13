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
                                                        {/* <BlogConvert jsonContent={blogPost.content} /> */}
                                                        {/* <span className='font-bold'></span> */}
                                                        <div>
                                                            <p>
                                                                In the modern business landscape, data stands as the cornerstone, driving insights, shaping decisions, and significantly affecting your bottom line. However, the manual collection of data can evolve into a cumbersome and error-prone chore, acting as a stealthy adversary to productivity. This is where the challenge of manual data entry emerges prominently.
                                                                <br />
                                                            </p>
                                                            <p>
                                                                When your workforce is bogged down by entering data from various sources like forms, PDFs, and online platforms, it's a glaring indicator that it's time to pivot to automation. Below are 5 critical signs that herald the urgency for a data entry transformation:
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xl my-3">1. Your Team is Stuck in a Copy-Paste Cacophony</h3>
                                                            <p>
                                                                Is copying and pasting data from online sources a daily ritual for your team? This repetitive task is not only error-prone but also a huge drain on productivity. Automating online data entry frees your team to focus on higher-value activities.
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xl my-3">2. Data Inconsistency is a Tangled Web</h3>
                                                            <p>
                                                                Does your team struggle with inconsistent data formats from different online sources? Manually reformatting data takes time and increases the risk of errors. Automation ensures consistent data capture, regardless of the source.
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xl my-3">3. Validation Becomes a Manual Marathon</h3>
                                                            <p>
                                                                Verifying the accuracy of online data entry can be a tedious and time-consuming process. Imagine the wasted hours spent double-checking information! Automated data validation eliminates this burden, ensuring reliable data from the start.
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xl my-3">4. Integration Nightmares are Keeping You Up at Night</h3>
                                                            <p>
                                                                Does your business rely on multiple online platforms and databases? Manually transferring data between these systems can be a recipe for errors and delays. Automation streamlines data flow and ensures seamless integration.
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xl my-3">5. Valuable Insights are Buried in a Data Graveyard</h3>
                                                            <p>
                                                                Inconsistent and inaccurate data makes it difficult to generate meaningful reports and uncover valuable insights. Automation ensures clean data capture, empowering you to unlock the true potential of your business intelligence.
                                                                <br />
                                                            </p>
                                                            <h2 className="font-bold text-2xl my-3">Introducing SmartEntry: Your Data Entry Superhero</h2>
                                                            <p>
                                                                SmartEntry is your secret weapon for conquering the online data entry challenge. Our innovative software utilizes cutting-edge technology to automate data capture from various online sources:
                                                                <br />
                                                            </p>
                                                            <p>
                                                                Intelligent Web Scraping: Extract data from websites and applications with pinpoint accuracy, eliminating the need for manual copy-pasting.
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li><span className="font-bold">Streamlined Form Processing: </span>Automate data capture from online forms, ensuring consistent and error-free information.</li>
                                                                <li><span className="font-bold">Effortless Integration: </span>Connect seamlessly with your existing online platforms and databases, creating a smooth data flow.</li>
                                                                <li><span className="font-bold">Automated Validation: </span>Eliminate manual verification with built-in data validation tools, guaranteeing clean and reliable information.</li>
                                                            </ul>
                                                            <p className="mt-3">
                                                                Stop wasting time and resources on manual online data entry. Empower your team, unlock productivity, and gain valuable insights from your data. Contact us today to see how SmartEntry can transform your business!
                                                                <br />
                                                            </p>
                                                            <section className="call-back-area call-back-area-two mt-3">
                                                                <div className="">
                                                                    <div className="call-back-wrap-blog rounded-xl bg-lblue">
                                                                        <div className="row align-items-center">
                                                                            <div className="call-back-content flex flex-col justify-center items-center text-center" >
                                                                                <div className="section-title white-title tg-heading-subheading animation-style3">
                                                                                    <h2 className="mb-0 text-3xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Automation expert</span>
                                                                                    </h2>

                                                                                    <p className="text-white  text-lg mt-3">Embrace RPA innovation and new process optimization opportunities to increase business efficiency and reduce costs.</p>
                                                                                    <Link href="/schedule-a-meeting" className="btn mt-2">BOOK A CONSULTATION</Link>
                                                                                </div>
                                                                                {!isMobile ? (<div className="">
                                                                                    <img src="/assets/img/images/callback_photo.webp" alt="" style={{ width: '1100px' }} className="ml-2 rounded-2xl" />

                                                                                </div>) : null}


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
                                                            {console.log("",latestPosts.slice(-3))}
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
