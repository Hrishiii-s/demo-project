'use client'
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"



export default function VideoPopup({ style, url }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
  
        handleResize();
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {!style && <a onClick={() => setOpen(true)} className="play-btn w-[45px] h-[45px] mt-[13px] sm:w-[60px] sm:h-[60px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px] md:mt-[15px] popup-video  lg:mt-[22px] xl:mt-[30px] sm:max-md:mt-[30px] text-xs" style={{ marginLeft: '-2px'}}><i className="fas fa-play" /></a>}
            {style === 1 && <a onClick={() => setOpen(true)} className="popup-youtube bnt-play"><img src="/assets/img/home6/play.svg" /></a>}
            {style === 2 && <a onClick={() => setOpen(true)} className="btn-play"><img src="/assets/img/home8/play.svg" /></a>}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={url} onClose={() => setOpen(false)} />
        </>
    )
}