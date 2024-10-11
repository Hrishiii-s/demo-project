'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/PopupVideo"
import data from "@/util/blog.json"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import BlogConvert from "@/components/blog/BlogConvert"

export default function BlogDetails() {
    let { slug } = useParams();  // Extract slug directly from useParams
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
                                                        <img src={`/assets/img/banner/${blogPost.img}`} className="w-100" alt="" />
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
                                                                            <p>By <Link href="/blog-details">{blogPost.author}</Link></p>
                                                                        </div>
                                                                    </div>
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
                                                        <h4 className="sidebar__widget-title">Latest Posts</h4>
                                                        <div className="sidebar__post-list">
                                                            {latestPosts.slice(0, 4).map((post) => (
                                                                <div className="sidebar__post-item" key={post.id}>
                                                                    <div className="sidebar__post-thumb">
                                                                        <Link href={`/blog-details/${post.slug}`}>
                                                                            <img src={`/assets/img/banner/${post.img}`} alt={post.title}  className="h-full w-full object-cover"/>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="sidebar__post-content">
                                                                        <h5 className="title">
                                                                            <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
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