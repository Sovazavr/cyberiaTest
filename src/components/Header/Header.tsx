import React, { Dispatch, SetStateAction, useState } from 'react'
import s from "./Header.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'
import { useScrollDirection, useScrollPosition } from '../../hooks/useScrollDirection'

interface Props {
    setOpenedMenu: Dispatch<SetStateAction<boolean>>,
}

const Header = ({ setOpenedMenu }: Props) => {
    const scrollDirection = useScrollDirection()
    const scrollPosition = useScrollPosition()

    return (
        <>
            <header className={scrollDirection === "down" ? s.header__down : (scrollPosition > 0 ? s.header__scroll : s.header)}>
                <div className={s.header__content__wrapper}>
                    <span className={s.header__logo}>
                        <GlobalSVGSelector typeSvg={'company-name'} />
                    </span>
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
                        <li className={s.header__link__item}>
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