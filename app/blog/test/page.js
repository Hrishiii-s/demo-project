'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/PopupVideo"
import data from "@/util/blog.json"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import BlogConvert from "@/components/blog/BlogConvert"

export default function BlogTest() {
    let slug = "How-Proptech-Firms-Can-Scale-Operations-with-Workforce-Extension-Services"
    const [blogPost, setBlogPost] = useState(null)
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        // Sort posts by date in descending order (latest first)
        // Sort posts by date (latest first) and fetch the last 4
        const sortedPosts = [...data].sort((a, b) => new Date(b.sort_date) - new Date(a.sort_date));

        // Get the last 4 entries
        const lastFourPosts = sortedPosts.slice(0, 4);
        setLatestPosts(lastFourPosts);

    }, []);


    useEffect(() => {
        console.log('Slug:', slug);  // Check if slug is correct
        const post = data.find((post) => post.slug === slug);
        console.log('BlogPost:', post);  // Check if the post is being found
        setBlogPost(post);  // Find the blog post by slug
    }, [slug]);  // Effect will re-run if slug changes


    const titleurl = slug.replace(/-/g, ' ');
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
                                                        <img src={`/assets/img/blog/${blogPost.img}`} className="w-100" alt="" />
                                                    </div>
                                                    <div className="blog__details-content">
                                                        <h2 className="title">{blogPost.title}</h2>
                                                        <div className="blog-post-meta">
                                                            <ul className="list-wrap">
                                                                <li><Link href="/blog" className="blog__post-tag-two">{blogPost.category}</Link></li>
                                                                <li>
                                                                    <div className="blog-avatar">
                                                                        <div className="avatar-thumb">
                                                                            <img src={`/assets/img/avatar/${blogPost.avatar}`} alt="" />
                                                                        </div>
                                                                        <div className="avatar-content">
                                                                            <p>By <Link href="/blog">{blogPost.author}</Link></p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li><i className="fas fa-calendar-alt" />{blogPost.date}</li>
                                                            </ul>
                                                        </div>
                                                        {/* <BlogConvert jsonContent={blogPost.content} /> */}
                                                        {/* <span className='font-bold'></span> */}
                                                        <div>
                                                            <p>While AI has become synonymous with enhancing property valuations and real estate appraisals, its capabilities extend far beyond. In the realm of property management, AI-powered solutions are transforming the way repairs and maintenance are handled, bringing new levels of efficiency and cost-effectiveness to real estate firms. At ECESIS, we leverage our expertise in AI and automation to provide solutions that not only enhance property valuations but also streamline the maintenance processes for our clients, ensuring properties remain in optimal condition and retain their value.<br /></p>

                                                            <h2 className='font-bold text-2xl my-3'>Automated Property Inspections and Damage Detection</h2>
                                                            <p>Traditionally, property inspections involve manual assessments that can be time-consuming and prone to errors. With AI, however, inspections have become more automated and precise. AI-powered property appraisal software and image recognition technology, such as our very own <span className='font-bold'>PropVision</span>, play a pivotal role in this transformation. By analyzing images captured during property inspections, AI systems can detect damages—like cracks, water leaks, or structural issues—faster and with greater accuracy than manual inspections.<br /></p>
                                                            <p><span className='font-bold'>PropVision</span> enhances this process by automating the inspection of real estate property images, identifying necessary repairs, and even verifying property addresses accurately. This technology allows property managers to proactively address maintenance issues before they escalate, minimizing repair costs and ensuring tenant satisfaction.<br/></p>
                                                            
                                                            <h2 className='font-bold text-2xl my-3'>Predictive Maintenance Using AI-Powered Analytics</h2>
                                                            <p>AI’s role doesn’t end at predicting issues; it also enhances how maintenance requests are managed. Automated systems, integrated with AI-powered tools, can process maintenance requests from tenants and prioritize them based on urgency and impact. For instance, a major plumbing issue is flagged for immediate attention, while routine maintenance can be scheduled for a later date.<br /></p>
                                                            <p>At ECESIS, our <span className='font-bold'>AI and automation solutions</span> are tailored to provide such predictive insights, empowering real estate firms to maintain properties efficiently. By integrating AI algorithms that analyze usage patterns, environmental factors, and system performance, firms can optimize maintenance schedules and extend the lifespan of building systems, ensuring properties remain in top condition and compliant with real estate regulations.<br/></p>
                                                            
                                                            <h2 className='font-bold text-2xl my-3'>Streamlining Maintenance Requests with Automation</h2>
                                                            <p>Another significant way AI assists in property maintenance is through predictive analytics. By monitoring real-time data from IoT (Internet of Things) devices installed in buildings—such as HVAC systems, plumbing, and electrical systems—AI can predict when these systems are likely to fail. This proactive approach enables property managers to schedule maintenance before issues occur, reducing the risk of costly emergency repairs.<br /></p>
                                                            <p>ECESIS offers <span className='font-bold'>custom software solutions</span> for real estate firms that automate these processes, integrating them with existing management platforms to ensure seamless communication between tenants and maintenance teams. By streamlining the workflow, our solutions reduce response times, improve tenant satisfaction, and enable property managers to focus on strategic operations rather than manual coordination.<br/></p>

                                                            <h2 className='font-bold text-2xl my-3'>Cost Optimization through AI-Driven Repair Assessments</h2>
                                                            <p>Determining the most cost-effective repair solution is critical for maintaining profitability in commercial real estate. AI can assist by analyzing historical repair costs, material prices, and labor availability to suggest the most efficient repair methods. For instance, if a building’s HVAC system shows signs of wear, AI can recommend whether a repair or a replacement would be more cost-effective based on past data and market conditions.<br /></p>
                                                            <p>Our <span className='font-bold'>AI-powered valuation and maintenance management tools</span>  at ECESIS are designed to provide property managers with detailed insights, helping them make informed decisions that optimize both operational efficiency and repair budgets. By integrating these tools with predictive maintenance, real estate firms can not only maintain properties efficiently but also enhance their overall asset management strategy.<br/></p>
                                                            
                                                            <h2 className='font-bold text-2xl my-3'>Digital Twins: Simulating and Optimizing Property Maintenance</h2>
                                                            <p>Digital twins—virtual replicas of physical buildings—are another AI-driven innovation transforming property maintenance. By creating a digital twin, property managers can simulate various scenarios, such as the impact of a potential repair method or the effect of environmental changes on building systems. This technology allows for precise planning, minimizing risks and ensuring that any maintenance activities undertaken are both efficient and effective.<br /></p>
                                                            <p>ECESIS's expertise in<a href="/services-details/artificial-intelligence"><span className='font-bold'>AI and technology solutions</span></a>  enables us to support real estate firms in implementing digital twin technology, providing a comprehensive approach to property management. By combining digital twins with predictive analytics and automated inspection tools, firms can monitor properties in real time, optimize maintenance schedules, and ultimately extend the lifecycle of their assets.<br/></p>
                                                            
                                                            <h2 className='font-bold text-2xl my-3'>Enhanced Compliance Monitoring with AI Solutions</h2>
                                                            <p>Real estate compliance is a crucial aspect of property management, especially when it comes to repairs and maintenance. With AI, property managers can track compliance requirements automatically, ensuring that repairs meet legal standards and industry guidelines. AI-powered platforms can generate compliance reports, alert managers to upcoming inspection deadlines, and verify that maintenance work aligns with regulatory standards.<br /></p>
                                                            <p>At ECESIS, we integrate <a href="/services-details/business-process-automation"><span className='underline text-[#e6ae15] font-bold'>automation in real estate</span></a> compliance monitoring within our property management software solutions, allowing firms to remain compliant effortlessly. By automating these processes, our clients can focus on maintaining the quality and value of their properties without the burden of manual compliance checks.<br/></p>

                                                            <h4 className='font-bold text-2xl my-3'>Conclusion</h4>
                                                            <p>AI is taking property management beyond valuations by offering innovative solutions that streamline repairs and maintenance processes. From predictive maintenance and automated inspections to digital twins and compliance monitoring, AI provides real estate firms with the tools they need to optimize their operations and enhance property value.<br /></p>
                                                            <p>At ECESIS, we are committed to providing AI-driven solutions that empower real estate firms to maintain their properties efficiently and effectively. Our expertise in <a href="/services-details/proptech"><span className='underline text-[#e6ae15] font-bold'>proptech</span></a> and automation ensures that our clients remain at the forefront of the industry, offering superior services and maintaining properties that tenants love. If you’re ready to explore how AI can enhance your property management strategies, connect with ECESIS today.<br /></p>


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
                                                                                    <li key={index} className="w-fit mr-2 mb-2 md:mb-0 md:mt-2"><Link href="#">{tag}</Link></li>
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
                                                            <Link href="#"><img src={`/assets/img/avatar/${blogPost.avatar}`} alt="img" /></Link>
                                                        </div>
                                                        <div className="blog__avatar-info">
                                                            <span className="designation">Author</span>
                                                            <h4 className="name"><Link href="#">{blogPost.author}</Link></h4>
                                                            <p>{blogPost.about}</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="col-30">
                                                <aside className="blog__sidebar">

                                                    <div className="sidebar__widget">
                                                        <h4 className="sidebar__widget-title">Latest Blogs</h4>
                                                        <div className="sidebar__post-list">
                                                            {latestPosts.slice(-4).map((post) => (
                                                                <div className="sidebar__post-item" key={post.id}>
                                                                    <div className="sidebar__post-thumb">
                                                                        <Link href={`/blog/${post.slug}`}>
                                                                            <img src={`/assets/img/blog/${post.img}`} alt={post.title} className="h-full w-full object-cover" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="sidebar__post-content">
                                                                        <h5 className="title">
                                                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                                                        </h5>
                                                                        <span className="date">
                                                                            <i className="flaticon-time" />
                                                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                                                year: 'numeric',
                                                                                month: 'short',
                                                                                day: 'numeric',
                                                                            })}
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
    )
}