"use client";
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/PopupVideo";
import data from "@/util/blog.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogConvert from "@/components/blog/BlogConvert";

export default function BlogTest() {
    let slug =
        "How-Proptech-Firms-Can-Scale-Operations-with-Workforce-Extension-Services";
    const [blogPost, setBlogPost] = useState(null);
    const [latestPosts, setLatestPosts] = useState([]);

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
                                                                With AI-powered tools, mortgage underwriting is
                                                                no longer just a matter of lengthy paperwork and
                                                                waiting periods. Instead, it’s becoming an
                                                                efficient, data-driven process that transforms
                                                                how lenders evaluate loans, assess risk, and
                                                                extend mortgage accessibility.
                                                                <br />
                                                            </p>

                                                            <h2 className="font-bold text-2xl my-3">
                                                                Snapshot: How AI is Transforming Underwriting
                                                            </h2>

                                                            <div className="overflow-x-auto">
                                                                <table className="min-w-full border-collapse border border-gray-200">
                                                                    <thead>
                                                                        <tr className="bg-gray-100">
                                                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-semibold">
                                                                                Key Benefit
                                                                            </th>
                                                                            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-700 font-semibold">
                                                                                Impact on Mortgage Underwriting
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="bg-white">
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Speed
                                                                            </td>
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Real-time underwriting enables faster
                                                                                loan approvals
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-white">
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Accuracy
                                                                            </td>
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Machine learning reduces errors in risk
                                                                                assessment
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-white">
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Compliance
                                                                            </td>
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Automated checks enhance adherence to
                                                                                regulations
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-white">
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Accessibility
                                                                            </td>
                                                                            <td className="px-6 py-4 border-b border-gray-200">
                                                                                Streamlined processes improve mortgage
                                                                                accessibility
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <h2 className="font-bold text-2xl my-3">
                                                                A New Era in Mortgage Underwriting
                                                            </h2>
                                                            <h3 className="font-bold text-xl my-3">
                                                                What Does AI-Powered Underwriting Mean?
                                                            </h3>
                                                            <p>
                                                                AI-driven underwriting means introducing
                                                                <span className="font-bold">automated underwriting systems (AUS)</span> and
                                                                <span className="font-bold">predictive modeling</span> that allow lenders to
                                                                evaluate applications in real-time, improving
                                                                both <span className="font-bold">speed and accuracy</span>. Through data from
                                                                <span className="font-bold">loan origination, credit risk assessment</span>, and
                                                                <span className="font-bold">property valuation</span>, AI enables a more accurate
                                                                understanding of each loan application.
                                                                <br />
                                                            </p>
                                                            <h2 className="font-bold text-2xl my-3">
                                                                Key AI Technologies Shaping Underwriting
                                                            </h2>

                                                            <h3 className="font-bold text-xxl my-3">
                                                                Machine Learning Models for Risk Assessment
                                                            </h3>
                                                            <p>
                                                                <span className="italic">How it Works:</span> AI algorithms evaluate thousands of data points from traditional metrics like <span className="font-bold">debt-to-income ratio (DTI)</span>  and <span className="font-bold">loan-to-value ratio (LTV)</span> to identify patterns that could indicate risk.
                                                                <span className="italic">Why it Matters:</span> By detecting these risk indicators, lenders can make informed lending decisions, reducing default rates.

                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xxl my-3">
                                                                Machine Learning Models for Risk Assessment
                                                            </h3>
                                                            <p>
                                                                <span className="italic">How it Works:</span> RPA tools manage repetitive document verification tasks such as <span className="font-bold">income and asset verification</span>, freeing up human underwriters to focus on complex cases.
                                                                <span className="italic">Why it Matters:</span> Automating these manual steps speeds up the underwriting process and ensures a high level of accuracy, critical for <span className="font-bold">compliance and regulation</span> adherence.
                                                                <br />
                                                            </p>
                                                            <h3 className="font-bold text-xxl my-3">
                                                                Predictive Modeling in Underwriting
                                                            </h3>
                                                            <p>
                                                                <span className="italic">How it Works:</span> Using historical data, predictive models forecast credit risk with unprecedented accuracy, allowing for <span className="font-bold">risk-based pricing</span> tailored to each borrower’s profile.
                                                                <span className="italic">Why it Matters:</span> This tailored approach helps balance risk while enhancing mortgage accessibility for a wider range of borrowers.
                                                                <br />
                                                            </p>
                                                            <h2 className="font-bold text-2xl my-3">
                                                                From Data to Decision: A Step-by-Step Look at AI-Powered Underwriting
                                                            </h2>
                                                            <ul className="list-disc">
                                                                <li><span className="font-bold">Data Collection & Verification:</span>AI systems collect borrower data directly from various sources (e.g., employment records, asset information) and conduct automated verifications, streamlining <span className="font-bold">loan origination</span>.</li>
                                                                <li><span className="font-bold">Enhanced Risk Assessment:</span>Machine learning algorithms perform an in-depth <span className="font-bold">credit risk assessment</span> using DTI, LTV, and other key ratios, and flag potential <span className="font-bold">fraud prevention</span> markers in real-time..</li>
                                                                <li><span className="font-bold">Real-Time Compliance Checks:</span>Throughout the process, AI runs compliance protocols, ensuring adherence to standards like <span className="font-bold">Equal Credit Opportunity Act (ECOA)</span> and <span className="font-bold">Fair Lending</span> practices.</li>

                                                            </ul>
                                                            <h2 className="font-bold text-2xl my-3">
                                                                The Ripple Effects on the Mortgage Industry
                                                            </h2>
                                                            <ul className="list-disc">
                                                                <li><span className="font-bold">Improved Access to Loans:</span>With faster and more efficient underwriting, borrowers have greater access to mortgage products, meeting the industry’s long-standing goal of increased accessibility.</li>
                                                                <li><span className="font-bold">Better Mortgage Quality Control for Secondary Markets:</span>AI tools strengthen <span className="font-bold">loan quality control</span>, vital for mortgage-backed securities (MBS) in the <span className="font-bold">secondary market</span>, reducing risk for investors.</li>
                                                                <li><span className="font-bold">Reduced Underwriting Exceptions Compliance Checks:</span>By enhancing consistency and accuracy, AI minimizes the need for <span className="font-bold">underwriting exceptions</span>, leading to a more standardized process across applications.</li>

                                                            </ul>
                                                            <h2 className="font-bold text-2xl my-3">
                                                                What’s Next for AI in Mortgage Underwriting?
                                                            </h2>
                                                            <p>
                                                                As the technology evolves, expect AI to bring even greater efficiency and consistency to mortgage processes, making homeownership more accessible. Intelligent automation will further reduce processing times, enhance compliance, and introduce advanced tools for mortgage quality control.
                                                                <br />
                                                            </p>
                                                            <p>
                                                                <span className="font-bold">
                                                                    At ECESIS,
                                                                </span>
                                                                we continue to track these AI developments, supporting clients in optimizing their underwriting workflows and embracing the latest advances in mortgage technology.
                                                                <br />
                                                            </p>
                                                            <p>
                                                                Let’s transform your mortgage operations together—reach out to discover the possibilities today!
                                                                <br />
                                                            </p>
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
                                                            {latestPosts.slice(-4).map((post) => (
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
