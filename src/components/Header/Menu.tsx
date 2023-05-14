import React, { Dispatch, SetStateAction } from 'react'
import s from "./Header.module.scss"
import { useNavigate } from 'react-router-dom'

interface Props {
    openedMenu: boolean,
    setOpenedMenu: Dispatch<SetStateAction<boolean>>,
}

const Menu = ({ openedMenu, setOpenedMenu }: Props) => {
    const navigate = useNavigate()


    return (
        <div className={openedMenu ? s.header__menu__opened : s.header__menu} >

            <div className={s.closed__button}>
                <div className={s.line__wrapper} onClick={() => setOpenedMenu(false)}>
                    <div className={s.one__line}></div>
                    <div className={s.two__line}></div>
                </div>
            </div>
            <ul className={s.header__menu__links}>
                <li className={s.header__link__item}>
                    О нас
                    <div className={s.hover__line}></div>
                </li>
                <li className={s.header__link__item}>
                    Услуги
                    <div className={s.hover__line}></div>
                </li>
                <li className={s.header__link__item} onClick={() => { navigate("/"); setOpenedMenu(false) }}>
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

            <ul className={s.menu__contact}>
                <li>Контакты:</li>
                <li>+7 499 679 45 79</li>
                <li>hello@cyberia.ru</li>
                <li>Аносова 3Б, оф. 1</li>
            </ul>
        </div>

    )
}

export default Menu