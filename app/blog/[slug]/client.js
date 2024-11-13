'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/PopupVideo"
import data from "@/util/blog.json"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import BlogConvert from "@/components/blog/BlogConvert"
import MoonLoader from "react-spinners/MoonLoader";


export default function BlogDetails() {
    let { slug } = useParams();  // Extract slug directly from useParams
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded
    const [blogPost, setBlogPost] = useState(null)
    const [latestPosts, setLatestPosts] = useState([]);
    const [sidebarFixed, setSidebarFixed] = useState(true);  // State for sidebar fixed position
    const sidebarContainerRef = useRef(null); // Ref for sidebar container

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

    useEffect(() => {
        // Observer to detect when sidebar container reaches the end
        const observer = new IntersectionObserver(
            ([entry]) => {
                setSidebarFixed(!entry.isIntersecting); // Release fixed position when the end is visible
            },
            { root: null, threshold: 1.0 } // Trigger when 100% of the element is in view
        );

        if (sidebarContainerRef.current) {
            observer.observe(sidebarContainerRef.current);
        }

        return () => {
            if (sidebarContainerRef.current) {
                observer.unobserve(sidebarContainerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarContainerRef.current || !sidebarContainerRef.current) return;

            const containerBottom = sidebarContainerRef.current.getBoundingClientRect().bottom;
            const sidebarHeight = sidebarContainerRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            console.log("viewportHeight",viewportHeight)
            console.log("containerBottom",containerBottom)
            console.log("sidebarHeight",sidebarHeight)

            if (containerBottom  <= viewportHeight) {
                setSidebarFixed(false);
            } else {
                setSidebarFixed(true);
            }
        };


        setAllLoaded(true);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(()=>{
console.log("sidebar",sidebarFixed)
    },[sidebarFixed])
    const titleurl = slug.replace(/-/g, ' ');

    if (!allLoaded) {
        return (
            <div className="fixed inset-0 flex justify-center items-center">
                <MoonLoader />
            </div>
        ); // Or any other loading indicator
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                {blogPost && (
                    <>
                        <div>
                            <section className="blog__details-area">
                                <div className="container relative" ref={sidebarContainerRef}>
                                    <div className="blog__inner-wrap" >
                                        <div className="row">
                                            <div className="col-70">
                                                <div className="blog__details-wrap">
                                                    <div className="blog__details-thumb">
                                                        <img src={`/assets/img/blog/${blogPost.img}`} className="w-full lg:h-[65vh]" alt="" />
                                                    </div>
                                                    <div className="blog__details-content">
                                                        <h2 className="title">{blogPost.title}</h2>
                                                        <div className="blog-post-meta">
                                                            <ul className="list-wrap">
                                                                <li><Link href="/blog" className="blog__post-tag-two">{blogPost.category}</Link></li>
                                                                <li>
                                                                    {/* <div className="blog-avatar">
                                                                        <div className="avatar-thumb">
                                                                            <img src={`/assets/img/avatar/${blogPost.avatar}`} alt="" />
                                                                        </div>
                                                                        <div className="avatar-content">
                                                                            <p>By <Link href="/blog">{blogPost.author}</Link></p>
                                                                        </div>
                                                                    </div> */}
                                                                </li>
                                                                <li><i className="fas fa-calendar-alt" />{blogPost.date}</li>
                                                            </ul>
                                                        </div>
                                                        <BlogConvert jsonContent={blogPost.content} />
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
                                                </div>
                                            </div>
                                            
                                            <div className={`col-30 hidden lg:block`}>
                                                <aside className={`blog__sidebar ${sidebarFixed ? 'fixed' : 'absolute bottom-0'}`}>

                                                    <div className="sidebar__widget w-[400px]">
                                                        <h4 className="sidebar__widget-title">Latest Blogs</h4>
                                                        <div className="sidebar__post-list">
                                                            {latestPosts.slice(-3).map((post) => (
                                                                <div className="sidebar__post-item" key={post.id}>
                                                                    <div className="sidebar__post-thumb">
                                                                        <Link href={`/blog/${post.slug}`}>
                                                                            <img src={`/assets/img/blog/${post.img}`} alt={post.title}  className="h-full w-full object-cover"/>
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