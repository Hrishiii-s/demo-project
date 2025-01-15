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
                                                                Scaling operations is one of the most significant challenges businesses face today. It involves balancing efficiency, cost, and risk while ensuring alignment with strategic goals. The Build-Operate-Transfer (BOT) model, combined with the establishment of Global Capability Centers (GCCs), has emerged as a transformative solution to address these challenges.
                                                                <br />
                                                            </p>

                                                            <h2 className="font-bold text-xl my-3">Understanding the BOT Model for GCCs</h2>
                                                            <p>
                                                                The BOT model is a phased approach to setting up operations, designed to streamline scaling while maintaining control and minimizing risks. Here’s how it works:
                                                                <br />
                                                            </p>






                                                            <h2 className="font-bold text-xl my-3">Key Benefits of the BOT Model</h2>
                                                            <p>
                                                                The BOT model provides significant advantages for businesses aiming to scale efficiently and effectively:
                                                                <br />
                                                            </p>

                                                            <h4 className="font-bold text-xl my-3">1. Streamlined GCC Setup:</h4>
                                                            <ul className="list-disc ml-16">
                                                                <li>Quickly establish fully operational Global Capability Centers tailored to your business goals.</li>
                                                                <li>Reduce complexities in setup and scale seamlessly for future growth.</li>
                                                            </ul>

                                                            <h4 className="font-bold text-xl my-3 ">2. Cost and Resource Optimization:</h4>
                                                            <ul className="list-disc ml-16">
                                                                <li>Minimize upfront investments and optimize operational costs.</li>
                                                                <li>Access skilled resources and scale operations based on business needs.</li>
                                                            </ul>

                                                            <h4 className="font-bold text-xl my-3">3. Risk Mitigation and Knowledge Transfer:</h4>
                                                            <ul className="list-disc ml-16">
                                                                <li>Leverage partner expertise during the initial phases to mitigate risks.</li>
                                                                <li>Ensure a smooth handover with structured knowledge transfer.</li>
                                                            </ul>

                                                            <h4 className="font-bold text-xl my-3 ">4. Focus on Strategic Goals:</h4>
                                                            <ul className="list-disc ml-16">
                                                                <li>Delegate operational tasks to focus on innovation, growth, and core business objectives.</li>
                                                            </ul>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />



                                                            <h2 className="font-bold text-xl my-3">Shared Resources and Support</h2>
                                                            <p>
                                                                The success of the BOT model lies in providing businesses with a strong foundation. This includes access to shared resources such as:
                                                                <br />
                                                            </p>


                                                            <ul className="list-disc ml-12">
                                                                <li><span className="font-bold">Infrastructure:</span> Fully equipped office spaces, workstations, and technology setups.</li>
                                                                <li><span className="font-bold">HR and Administrative Support:</span> Comprehensive services to manage team needs effectively.</li>
                                                                <li><span className="font-bold">Regulatory Compliance:</span> Adherence to all legal requirements, ensuring smooth operations.</li>
                                                            </ul>
                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />



                                                            <h3 className="font-bold text-xl my-3">Tailored to Meet Every Business Need</h3>
                                                            <p>
                                                                Whether you’re scaling for automation-focused initiatives or enhancing standard operational processes, the BOT model can be customized to suit your needs:
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">1. Automation-Focused Centers:</h3>
                                                            <ul className="list-disc ml-12">
                                                                <li>Establish Centers of Excellence for automation initiatives.</li>
                                                                <li>Integrate cutting-edge tools and technologies to drive innovation.</li>
                                                            </ul>

                                                            <h3 className="font-bold text-xl my-3">2. Standard Operational Processes:</h3>
                                                            <ul className="list-disc ml-12">
                                                                <li>Streamline workflows for tasks like data entry, BPO, or administrative support.</li>
                                                                <li>Optimize processes to reduce costs and improve productivity.</li>
                                                            </ul>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />

                                                            <h3 className="font-bold text-xl my-3">Your Role in the Journey: Key Questions</h3>
                                                            <p>
                                                                To create a GCC and BOT model tailored to your business, here are some questions to consider:
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">1. Strategic Goals:</h3>
                                                            <ul className="list-disc ml-12">
                                                                <li>What are the key objectives for your GCC?</li>
                                                                <li>How does this align with your long-term business vision?</li>
                                                            </ul>

                                                            <h3 className="font-bold text-xl my-3">2. Team and Resources:</h3>
                                                            <ul className="list-disc ml-12">
                                                                <li>What team size and skill sets are required to start operations?</li>
                                                                <li>Are there specific capabilities or expertise you are looking for?</li>
                                                            </ul>

                                                            <h3 className="font-bold text-xl my-3">3.Timelines and Milestones:</h3>
                                                            <ul className="list-disc ml-12">
                                                                <li>What are your target timelines for the Build, Operate, and Transfer phases?</li>
                                                                <li>Are there specific deliverables or milestones we should prioritize?</li>
                                                            </ul>

                                                            <div className="w-full h-[2px] bg-gray-300 mt-4" />

                                                            <h3 className="font-bold text-xl my-3">

                                                                Conclusion
                                                            </h3>
                                                            <p>
                                                                The Build-Operate-Transfer model, paired with Global Capability Centers, is reshaping how businesses scale operations. By offering a structured, phased approach, it allows organizations to grow efficiently while maintaining flexibility and control.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                Whether you’re launching automation initiatives or streamlining standard processes, the BOT model provides the foundation for long-term success. Ready to scale your operations? Let’s start building together!
                                                                <br />
                                                            </p>





                                                            <section className="call-back-area call-back-area-two mt-3">
                                                                <div className="">
                                                                    <div className="call-back-wrap-blog rounded-xl bg-lblue">
                                                                        <div className="row align-items-center">
                                                                            <div className="call-back-content flex flex-col justify-center items-center text-center" >
                                                                                <div className="section-title white-title tg-heading-subheading animation-style3">
                                                                                    <h2 className="mb-0 text-3xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Business expert</span>
                                                                                    </h2>

                                                                                    <p className="text-white  text-lg mt-3">Transform your operations by optimizing processes, increasing efficiency, and driving sustainable growth.</p>
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
