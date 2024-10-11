
import React from 'react';
import data from '@/util/blog.json';
import BlogDetails from './client';

// Fetch blog post data dynamically
async function fetchBlogPost(slug) {
  // Simulate fetching data (could be an API call)
  return data.find((post) => post.slug === slug);
}

// This function generates dynamic metadata for each page
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const blogPost = await fetchBlogPost(slug);

  if (!blogPost) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: blogPost.title,
    description: blogPost.description || 'Discover more in our latest blog post!',
    openGraph: {
      title: blogPost.title,
      description: blogPost.description || 'Discover more in our latest blog post!',
      images: blogPost.img ? [{ url: `/assets/img/banner/${blogPost.img}` }] : [],
      url: `https://www.ecesistech.com/blog/${slug}`,
      type: 'article',
    },
  };
}

export default function BlogPage() {
  return (
    <div>
      <BlogDetails />
    </div>
  );
}
