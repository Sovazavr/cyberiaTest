import React, { Dispatch, SetStateAction, useState } from 'react'
import s from "./Header.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'
import { useScrollDirection, useScrollPosition } from '../../hooks/useScrollDirection'
import { useNavigate } from 'react-router-dom'
import { useUpScroll } from '../../hooks/useScroll'
import { Link } from 'react-router-dom'

interface Props {
    setOpenedMenu: Dispatch<SetStateAction<boolean>>,
}

const Header = ({ setOpenedMenu }: Props) => {
    const scrollDirection = useScrollDirection()
    const scrollPosition = useScrollPosition()
    const navigate = useNavigate()

    return (
        <>
            <header className={scrollDirection === "down" ? s.header__down : (scrollPosition > 0 ? s.header__scroll : s.header)}>
                <div className={s.header__content__wrapper}>
                    <Link to={'/'}>
                        <span className={s.header__logo} onClick={useUpScroll}>
                            <GlobalSVGSelector typeSvg={'company-name'} />
                        </span>
                    </Link>
                    <div className={s.header__burger} onClick={() => setOpenedMenu(true)}>
                        <div className={s.burger__line}></div>
                        <div className={s.burger__line}></div>
                        <div className={s.burger__line}></div>
                    </div>




                    <ul className={s.header__links}>
                        <li className={s.header__link__item}>
                            О нас
                            <div className={s.hover__line}></div>
                        </li>
                        <li className={s.header__link__item}>
                            Услуги
                            <div className={s.hover__line}></div>
                        </li>
                        <li className={s.header__link__item} onClick={() => navigate("/")}>
                            Проекты
                            <div className={s.hover__line}></div>
                        </li>
                        <li className={s.header__link__item}>
                            Блог
                            <div className={s.hover__line}></div>
                        </li>
                        <li className={s.header__link__item}>
                            Контакты
                            <div className={s.hover__line}></div>
                        </li>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default Header