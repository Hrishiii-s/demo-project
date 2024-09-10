'use client'
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner2 from "@/components/sections/Banner2"
import Counter3 from "@/components/sections/Counter3"
import Request3 from "@/components/sections/Request3"
import MainService from "@/components/sections/MainService"
import Marquee2 from "@/components/sections/Marquee2"
import withLoading from "./withLoading"
import LazyLoad from "react-lazyload"
import React, { useRef, useEffect, useState } from 'react';
import Head from "next/head"
import { MoonLoader } from "react-spinners"


function Home() {

    const mainServiceRef = useRef(null); // Create a ref
    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        setAllLoaded(true);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!allLoaded) {
        return <div className="flex justify-center items-center">
            <MoonLoader/>
        </div>; // Or any other loading indicator
    }


    return (
        <>
        <Head>
        <Head>
            <title>ECESIS | AI-Driven Digital Transformation & PropTech Solutions Company</title>
            <meta name="description" content="We are the leading provider of AI-driven digital transformation and PropTech solutions, empowering businesses to evolve, transform, and grow through cutting-edge technology and strategic expertise." />
            </Head>
        </Head>

            <Layout headerStyle={3} footerStyle={3}>
                <Banner2 scrollRef={mainServiceRef} />
                <Marquee2 />
                <About3 />
                <LazyLoad height={100} offset={250} once>
                    <Counter3 />
                </LazyLoad>
                <div ref={mainServiceRef}><MainService /></div>
            </Layout>
        </>
    )
}

export default withLoading(Home);