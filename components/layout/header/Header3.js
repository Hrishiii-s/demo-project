'use client'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import OffcanvusMenu from "../OffcanvusMenu"
import SearchPopup from "../SearchPopup"
import React, { useEffect, useState } from "react";

export default function Header3({ Nothome, scroll, isMobileMenu, handleMobileMenu, transparent, isSearch, isOffcanvus, handleOffcanvus, handleSearch }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className={`tg-header__style-three transparent-header ${Nothome ? "" : "absolute"}`} >
                <div id="sticky-header" className={`tg-header__area  tg-header__area-three ${scroll ? "sticky-menu" : ""}`}  >
                    <div className="container" >
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/Logo.webp" alt="Logo" className="h-12 ml-3" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex mr-5">
                                            <Menu />
                                        </div>
                                        <div className="mobile-nav-toggler mobile-nav-toggler-two" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                                                <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                                                <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                                                <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                                                <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                                                <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                                                <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                                                <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                                                <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                                            </svg>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className={`${isMobile ? "tgmobile__menu" : "hidden"}`}>
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/Logo.webp" alt="Logo" className="" />
                                                </Link>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu handleMobileMenu={handleMobileMenu} />
                                        </div>
                                        <div className="tgmobile__menu-bottom">
                                            <div className="social-links">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://www.facebook.com/ecesisservices/"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://x.com/ecesisservices?s=21"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="https://www.instagram.com/ecesistech/profilecard/?igsh=MTVvcnFramdhenJzNA=="><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="https://in.linkedin.com/company/ecesis"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}
