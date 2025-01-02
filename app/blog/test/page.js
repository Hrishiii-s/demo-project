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
                                                                As we approach 2025, the U.S. housing market is poised for significant shifts that real estate professionals need to be prepared for. Analysts foresee increased home sales, a gradual rise in housing inventory, and stabilizing mortgage rates. These changes not only offer new opportunities for buyers but also present realtors with the chance to enhance their role as trusted advisors in this evolving landscape.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">The Landscape of Home Sales</h3>
                                                            <p>
                                                                The <span className='font-bold'>National Association of Realtors (NAR)</span> projects approximately 4.5 million existing home sales in 2025, a 7% to 12% increase compared to 2024. For realtors, this uptick signals a revitalized market where buyer interest and activity are likely to rise.
                                                                <br />
                                                            </p>

                                                            <p>
                                                                Realtors can prepare by focusing on buyer education, ensuring clients understand how this shift impacts their purchasing power and options. Highlighting these favorable conditions in marketing efforts can attract clients who have been hesitant to enter the market.
                                                                <br />
                                                            </p>


                                                            <h3 className="font-bold text-xl my-3">Mortgage Rates: A Welcome Stabilization</h3>
                                                            <p>
                                                                <span className='font-bold'>Mortgage rates, a critical factor for affordability are expected to stabilize at around 6% in 2025</span>, down from the near 7% seen in 2024. This stabilization could make homeownership attainable for approximately 6.2 million households.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">What This Means for Realtors:</h3>

                                                            <ul className="list-disc ml-4">
                                                                <li>Position yourself as an expert by offering workshops or consultations on how clients can leverage stable rates to secure their dream homes.</li>
                                                                <li>Partner with mortgage lenders to provide clients with pre-qualification assistance, reinforcing trust and preparedness.</li>
                                                            </ul>


                                                            <h3 className="font-bold text-xl my-3">Rising Inventory Levels: Expanding Buyer Options</h3>

                                                            <p>
                                                                With an 11.7% increase in inventory and a 13.8% rise in new-home construction anticipated, realtors can look forward to a less competitive market where buyers have more choices. This trend reduces the intensity of bidding wars, allowing clients to focus on finding homes that align with their needs and budgets.
                                                                <br />                                               </p>

                                                            <h3 className="font-bold text-xl my-3">Tips for Realtors:</h3>
                                                            <ul className="list-disc ml-4">
                                                                <li>Stay informed about new listings and developments to provide clients with timely updates.</li>
                                                                <li>Use this period to strengthen your buyer network, offering personalized support to navigate the increased inventory effectively.</li>
                                                            </ul>


                                                            <h3 className="font-bold text-xl my-3">Modest Home Price Appreciation</h3>
                                                            <p>
                                                                <span className='font-bold'>Home prices are projected to grow modestly at 2% to 3.7%</span>, with a median home price of $410,700. This steady appreciation creates a balanced market that encourages long-term investments without overwhelming buyers.
                                                                <br />
                                                            </p>




                                                            <h3 className="font-bold text-xl my-3">Actionable Insights for Realtors:</h3>

                                                            <ul className="list-disc ml-4">
                                                                <li>Educate clients about the benefits of moderate price growth, emphasizing long-term value and reduced urgency to rush purchases.</li>
                                                                <li>Leverage price trends in local markets to position yourself as a go-to expert for accurate and insightful property advice.</li>
                                                            </ul>


                                                            <h3 className="font-bold text-xl my-3">Regional Market Highlights: Where to Focus</h3>
                                                            <p>
                                                                Certain metropolitan areas, including <span className='font-bold'>Boston, Phoenix, and Grand Rapids</span> are expected to outperform the national average in home sales and price appreciation. Realtors operating in these regions should capitalize on growing demand by tailoring their services to local market dynamics.
                                                                <br />
                                                            </p>

                                                            <h3 className="font-bold text-xl my-3">Shaping the Buyer Experience in 2025</h3>
                                                            <p>
                                                                The 2025 housing market offers a promising environment for buyers. As a real estate professional, your role in guiding clients through these opportunities is more vital than ever. Key strategies include:
                                                                <br />
                                                            </p>
                                                            <ul className="list-disc ml-4">
                                                                <li><span className='font-bold'>Educating Clients:</span> Demystify mortgage rates, inventory trends, and price stability to instill confidence in buyers.</li>
                                                                <li><span className="font-bold">Leveraging Technology:</span> Use AI-powered tools for property valuation, predictive analytics, and market insights to provide clients with cutting-edge solutions.</li>
                                                                <li><span className="font-bold">Expanding Your Network:</span> Collaborate with other professionals, such as mortgage brokers and developers, to offer a seamless home-buying experience.</li>
                                                            </ul>

                                                            <h2 className="font-bold text-2xl my-3">Real Estate Professionals: The Key to Success in 2025</h2>

                                                            <p>The anticipated changes in the 2025 housing market offer a unique opportunity for real estate professionals to strengthen their client relationships and grow their businesses. By staying ahead of trends, adopting innovative strategies, and emphasizing personalized service, you can establish yourself as a trusted advisor in a shifting landscape.</p>
                                                            <p>At ECESIS, we support real estate professionals in scaling their operations efficiently, enabling them to meet market demands with confidence. Whether you’re navigating increased inventory or helping buyers make informed decisions, we’re here to help you achieve your goals.</p>

                                                            <h2 className="font-bold text-2xl my-3">Conclusion: A Year of Opportunity</h2>

                                                            <p>The 2025 housing market is shaping up to be a year of opportunity for buyers and real estate professionals alike. With stabilizing mortgage rates, increased inventory, and moderate price growth, the market is moving towards a more balanced and sustainable future. For realtors, understanding these trends and leveraging them effectively will be key to success.</p>
                                                            <p>By positioning yourself as a knowledgeable and proactive partner, you can not only help your clients achieve their homeownership goals but also thrive in this evolving market.
                                                            </p><br />


                                                            <section className="call-back-area call-back-area-two mt-3">
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
