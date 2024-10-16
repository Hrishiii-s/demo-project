
import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Blog() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <div>
                    <section className="blog__area">
                        <div className="container">
                            <div className="blog__inner-wrap">
                                <div className="row">
                                    <div className="col-70">
                                        <div className="blog-post-wrap">
                                            <div className="row gutter-24">
                                                <BlogPost showItem={6} style={1} showPagination />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* blog-area-end */}
                    {/* call-back-area */}

                </div>

            </Layout>
        </>
    )
}