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
import MoonLoader from "react-spinners/MoonLoader";


export const metadata = {
    title: 'EcesisTech',
}

export default function Layout({ Nothome, headerStyle, footerStyle, headTitle, breadcrumbTitle, children, transparent }) {

    const [Path, setPath] = useState('');
    const [bread, setBread] = useState(false);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set the active path from window.location.pathname
            setPath(window.location.pathname);
            console.log(window.location.pathname)
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

    useEffect(() => {
        console.log("BEEADD", bread)
    }, [bread])
    
    




    return (
        <>
            <SpeedInsights />
            <PageHead headTitle={headTitle} />
            <DataBg />
            {(bread || (Path==="/" || Path==="/services-details/proptech")) && (<>
                {headerStyle == 3 ? <Header3 Nothome={Nothome} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}

            </>)}


            <main className="fix">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} bread={bread} loaded={() => setBread(true)} />}
                {(bread || (Path==="/" || Path==="/services-details/proptech")) && (<>
                    {children}
                </>)}

            </main>

            {(bread || (Path==="/" || Path==="/services-details/proptech")) && (<>
                {footerStyle == 3 ? < Footer3 /> : null}
            </>)}


            <BackToTop />
        </>
    )
}
