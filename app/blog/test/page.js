"use client";
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/PopupVideo";
import data from "@/util/blog.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogConvert from "@/components/blog/BlogConvert";
import CallbackAuto from "@/components/sections/Callback_Auto";
import DOMPurify from "dompurify";
import Model from "@/public/assets/img/blog/BOT_Model.png";

export default function BlogTest() {
  let slug = "Broker-Price-Opinion-Outsourcing";
  const [blogPost, setBlogPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
                          <div className="blog__details-thumb ">
                            {console.log("stats", isMobile, blogPost.Mimg)}
                            {isMobile && blogPost.Mimg ? (
                              <>
                                <img
                                  src={`/assets/img/blog/${blogPost.Mimg}`}
                                  className=""
                                  alt=""
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src={`/assets/img/blog/${blogPost.img}`}
                                  className={`md:w-full object-left`}
                                  alt=""
                                />
                              </>
                            )}
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
                                The real estate industry thrives on precision,
                                speed, and efficient workflows. As a real estate
                                professional, managing Broker Price Opinions
                                (BPOs) can be time-consuming and overwhelming,
                                leaving you with less time to focus on client
                                relationships and strategic growth. Enter the
                                real estate virtual assistant — a game-changing
                                solution designed to simplify your processes,
                                improve productivity, and reduce costs.
                                <br />
                              </p>

                              <p>
                                From{" "}
                                <span className="font-bold">
                                  real estate BPO services to title search
                                  services
                                </span>
                                , virtual assistants can take on a wide range of
                                tasks, freeing you to focus on growing your
                                business. In this blog, we’ll explore the top 5
                                reasons why hiring a{" "}
                                <span className="font-bold">
                                  real estate virtual assistant for BPO
                                </span>{" "}
                                tasks is essential for success in today’s
                                competitive market.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>

                              <h2 className="font-bold text-lg my-3">
                                1. Streamline Real Estate BPO Services
                              </h2>

                              <p>
                                Handling BPO tasks involves multiple steps,
                                including pulling tax records, researching
                                comparables, completing data entry, and
                                uploading photos. These tasks require a high
                                level of detail and accuracy, which can take up
                                hours of your time. A virtual assistant can
                                handle these tasks efficiently, including:
                                <br />
                              </p>

                              <ul className="list-disc ml-16">
                                <li>Accepting BPO orders from vendors.</li>
                                <li>
                                  Performing <span className="font-bold">CMA preparation</span> by selecting the
                                  best comparables.
                                </li>
                                <li>
                                  Completing <a href='/services-details/real-estate-valuation#data-process' className="font-bold">BPO data entry</a>, including property
                                  details, market information, and valuation
                                  comments.
                                </li>
                                <li>
                                  Managing photo uploads for subject and
                                  comparable properties.
                                </li>
                                <li>
                                  Conducting quality checks to ensure reports
                                  meet vendor standards.
                                </li>
                              </ul>

                              <p className="mt-3">
                              By outsourcing your <a href='/services-details/real-estate-valuation' className="font-bold">real estate BPO services</a> to a virtual assistant, you can focus on high-priority tasks, such as building client relationships and closing deals.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>

                              <h2 className="font-bold text-lg my-3">
                              2. Expertise in Title Search and Property Preservation Services
                              </h2>

                              <p>
                              In addition to BPO tasks, virtual assistants can provide specialized support in <span className="font-bold">title search services and property preservation services</span>. These critical tasks often require knowledge of industry-specific tools and platforms, which virtual assistants are well-equipped to handle. Some key services include:
                                <br />
                              </p>

                              <ul className="list-disc ml-16">
                                <li>Performing full title history searches, including chain-of-title research and lien checks.</li>
                                <li>Managing property preservation work orders, such as photo labeling, damage reporting, and invoicing.</li>
                                <li>Using platforms like Safeguard, AssetShield, and PPW for property preservation data entry and processing.</li>
                            
                              </ul>

                              <p className="mt-3">
                              With a virtual assistant managing these tasks, you can ensure that your operations run smoothly while maintaining compliance with industry standards.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>

                              <h2 className="font-bold text-lg my-3">
                              3. Affordable and Cost-Effective Solutions
                              </h2>

                              <p>
                              Hiring an in-house team to manage BPO and related tasks can be expensive, considering salaries, benefits, and office space. <span className="font-bold">Affordable real estate virtual assistant services</span> offer a cost-effective alternative, allowing you to scale your support without the overhead costs. By outsourcing tasks like <span className="font-bold">real estate appraisal services, BPO data entry, and mortgage loan processing</span>, you only pay for the services you need, which helps maximize your return on investment.

                                <br />
                              </p>

                              <p>
                              Virtual assistants provide flexibility, allowing you to adjust your support during peak seasons or when managing a high volume of BPO orders. This adaptability ensures your business operates efficiently without unnecessary expenses.

                                <br />
                              </p>

                              
                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>

                              
                              <h2 className="font-bold text-lg my-3">
                              4. Access to MLS and Industry Tools
                              </h2>

                              <p>
                              When you <span className="font-bold">find a real estate virtual assistant with MLS access</span> , you gain a valuable asset for tasks like <span className="font-bold">CMA preparation</span>, comparable research, and data entry. Virtual assistants with MLS access are skilled in:
                                <br />
                              </p>

                              <ul className="list-disc ml-16">
                                <li>Pulling property data, including tax records and vital market insights.</li>
                                <li>Researching and selecting comparables for accurate property valuations.</li>
                                <li>Uploading and organizing subject photos and comparable images.</li>
                                <li>Submitting completed BPO reports with accuracy and attention to detail.</li>
                            
                              </ul>

                              <p className="mt-3">
                              With expertise in tools like AppFolio, Buildium, and other real estate platforms, virtual assistants ensure every task is completed efficiently and professionally.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>


                              <h2 className="font-bold text-lg my-3">
                              5. Improve Productivity and Focus on Growth
                              </h2>

                              <p>
                              Delegating tasks to a virtual assistant allows you to concentrate on core aspects of your business, such as client acquisition, networking, and strategic planning. Whether it’s <span className="font-bold">REO services, real estate appraisal services, or mortgage loan processing</span>, virtual assistants can take on the administrative burden, giving you more time to focus on closing deals and expanding your business.
                                <br />
                              </p>
                              <h3 className="font-bold text-base my-3">
                              For instance, a virtual assistant can handle the following tasks:
                              </h3>

                              <ul className="list-disc ml-16">
                                <li>Coordinating transactions and listings as a transaction coordinator.</li>
                                <li>Managing CRM platforms to ensure smooth client interactions.</li>
                                <li>Generating accurate reports for real estate appraisals and valuations.</li>
                            
                              </ul>

                              <p className="mt-3">
                              By outsourcing these tasks, you not only save time but also improve the overall efficiency of your operations, giving you a competitive edge in the market.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>

                              <h2 className="font-bold text-lg my-3">
                              Ecesis: Your Partner in Virtual Assistant Services
                              </h2>

                              <p>
                              At <span className="font-bold">Ecesis</span>, we specialize in providing <span className="font-bold">real estate virtual assistant services</span> tailored to the needs of busy real estate professionals. Our expertise spans a wide range of services, including:

                                <br />
                              </p>
                       

                              <ul className="list-disc ml-16">
                                <li>Comprehensive <a href='/services-details/real-estate-valuation' className="font-bold">real estate BPO services</a>, from order acceptance to report submission.</li>
                                <li>Detailed <span className="font-bold">title search services</span> and chain-of-title research.</li>
                                <li>Efficient handling of <span className="font-bold">property preservation services</span>, including data entry and reporting.</li>
                                <li>Support for <span className="font-bold">real estate appraisal services</span> and valuation processes.</li>
                                <li>Expertise in <span className="font-bold">mortgage loan processing</span> and underwriting support.</li>
                            
                              </ul>

                              <p className="mt-3">
                              Our virtual assistants are equipped with MLS access and are skilled in using industry-leading tools, ensuring accurate and timely completion of every task. By partnering with Ecesis, you gain a dedicated team committed to helping your business thrive.
                                <br />
                              </p>

                              <div className="w-full h-[2px] bg-gray-300 mt-4"></div>


                              <h2 className="font-bold text-lg my-3">
                              Conclusion: Why Virtual Assistants Are Essential for Real Estate Success
                              </h2>

                              <p>
                              In today’s fast-paced real estate market, leveraging virtual assistants for BPO and other tasks is a smart way to save time, reduce costs, and enhance productivity. From <span className="font-bold">real estate appraisal services to REO services</span>, virtual assistants offer the expertise and flexibility needed to streamline your operations and support your growth.

                                <br />
                              </p>

                              <p>
                              If you’re ready to take your real estate business to the next level, consider the benefits of partnering with a virtual assistant. <span className="font-bold">Affordable real estate virtual assistant services</span> are not just a cost-saving measure—they’re an investment in the future success of your business.

                                <br />
                              </p>

                              <p>
                              Ready to get started? <a href='/contact' className="font-bold">Contact Ecesis today</a> to learn more about how our virtual assistants can help you simplify your workflow, improve accuracy, and focus on what matters most: growing your real estate business.

                                <br />
                              </p>
                       

                              


                              <section className="call-back-area call-back-area-two mt-5">
                                <div className="">
                                  <div className="call-back-wrap-blog rounded-xl bg-lblue">
                                    <div className="row align-items-center">
                                      <div className="call-back-content flex flex-col justify-center items-center text-center">
                                        <div className="section-title white-title tg-heading-subheading animation-style3">
                                          <h2 className="mb-0 text-3xl text-white tg-element-title">
                                            Get a{" "}
                                            <span className="text-ly">
                                              30-minute
                                            </span>
                                            ,<br /> no-cost consulting session
                                            with our{" "}
                                            <span className="text-ly">
                                              Real Estate expert
                                            </span>
                                          </h2>

                                          <p className="text-white  text-lg mt-3">
                                            Transform your real estate
                                            operations by optimizing processes,
                                            increasing efficiency, and driving
                                            sustainable growth.
                                          </p>
                                          <a
                                            href="/schedule-a-meeting"
                                            className="btn mt-2"
                                          >
                                            BOOK A CONSULTATION
                                          </a>
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
