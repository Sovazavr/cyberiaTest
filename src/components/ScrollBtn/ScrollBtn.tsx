import React, { useState } from 'react'
import s from "./ScrollBtn.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'

export const ScrollBtn = () => {
    const [typeSvg, setTypeSvg] = useState<string>('scroll-btn')
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <div className={s.scroll__button}
            onMouseMove={() => setTypeSvg('scroll-btn-long')}
            onMouseLeave={() => setTypeSvg('scroll-btn')}
            onClick={scrollToTop}
        >
            <GlobalSVGSelector typeSvg={typeSvg} />
        </div>
    )
}
