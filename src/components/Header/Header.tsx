import React from 'react'
import s from "./Header.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'

const Header = () => {
    return (
        <header className={`${s.header} ${s.header__block}`}>
            <div className={s.header__content__wrapper}>
            <span className={s.header__logo}>
                <GlobalSVGSelector typeSvg={'company-name'} />
            </span>
            <ul className={s.header__links}>
                <li className={s.header__link__item}>О нас</li>
                <li className={s.header__link__item}>Услуги</li>
                <li className={s.header__link__item}>Проекты</li>
                <li className={s.header__link__item}>Блог</li>
                <li className={s.header__link__item}>Контакты</li>
            </ul>
            </div>
        </header>
    )
}

export default Header