import Link from "next/link"

export default function BlogCard1({ item }) {
    const titleurl = item.title.replace(/\s+/g, '-');
    return (
        <>
            <div className="col-md-6">
                <div className="blog__post-two shine-animate-item">
                    <div className="blog__post-thumb-two">
                        <Link href={`/blog/${titleurl}`} className="shine-animate">
                            <img src={`/assets/img/banner/${item.img}`} alt="" />
                            </Link>
                    </div>
                    <div className="blog__post-content-two">
                        <div className="blog-post-meta">
                            <ul className="list-wrap">
                                <li>
                                    <Link href="/blog" className="blog__post-tag-two">{item.category}</Link>
                                </li>
                                <li><i className="fas fa-calendar-alt" />{item.date}</li>
                            </ul>
                        </div>
                        <h2 className="title"><Link href={`/blog/${titleurl}`}>{item.title}</Link></h2>
                        <div className="blog-avatar">
                            <div className="avatar-thumb">
                            <img src={`/assets/img/avatar/${item.avatar}`} alt="" />
                            </div>
                            <div className="avatar-content">
                                <p>By <Link href={`/blog/${titleurl}`} style={{color: "#00235f"}}>{item.author}</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
