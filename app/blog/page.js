import React from 'react'
import Blog from './client';

export async function generateMetadata() {

  return {
    title: 'Blogs | PropTech Trends & Innovations',
    description: 'Discover real estate tech insights and PropTech innovations. Stay informed with expert blogs & articles from ECESIS.',
    openGraph: {
      title: 'Blogs | PropTech Trends & Innovations',
      description: 'Discover real estate tech insights and PropTech innovations. Stay informed with expert blogs & articles from ECESIS.',
      images: { url: `/assets/img/logo/Logo_meta.png` },
      url: `https://www.ecesistech.com/blog`,
    },
  };
}



function Blogpage() {
  return (
    <div> 
        <Blog/>
           </div>
  )
}

export default Blogpage;