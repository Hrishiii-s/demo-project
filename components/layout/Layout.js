'use client'
import Aos from "aos"
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import PageHead from './PageHead'
import Footer3 from "./footer/Footer3"
import Header3 from "./header/Header3"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
    title: 'EcesisTech',
}

export default function Layout({ Nothome, headerStyle, footerStyle, headTitle, breadcrumbTitle, children, transparent }) {

    const [Path, setPath] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set the active path from window.location.pathname
            setPath(window.location.pathname);
        }
    }, []);

    const [scroll, setScroll] = useState(0)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }
    // Search Menu
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)
    // Moblile Menu
    const [isOffcanvus, setOffcanvus] = useState(false)
    const handleOffcanvus = () => setOffcanvus(!isOffcanvus)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
        Aos.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <SpeedInsights />
            <PageHead headTitle={headTitle} />
            <DataBg />

            {headerStyle == 3 ? <Header3 Nothome={Nothome} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}


            <main className="fix">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>


            {footerStyle == 3 ? < Footer3 /> : null}

            <BackToTop />
        </>
    )
}
