import React from 'react'
import s from "./Header.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const Header = () => {
    const scrollDirection = useScrollDirection()

    return (
        <header className={scrollDirection === "down" ? s.header__down : s.header}>
            <div className={s.header__content__wrapper}>
                <span className={s.header__logo}>
                    <GlobalSVGSelector typeSvg={'company-name'} />
                </span>
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
    )
}

export default Header