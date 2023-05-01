import React from 'react'
import s from "./Footer.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'

const Footer = () => {
    return (
        <footer className={s.footer__block}>
            <div className={s.block__container}>
                <div className={s.footer__company}>
                    <GlobalSVGSelector typeSvg={'company-name'} />
                    <span>
                        Web and machine learning developing company
                    </span>
                </div>
                <div className={s.footer__information}>
                    <ul>
                        <li>+7 499 679 45 79</li>
                        <li>hello@cyberia.ru</li>
                        <li>Аносова 3Б, оф. 1</li>
                    </ul>
                    <ul>
                        <li>Главная</li>
                        <li>Услуги</li>
                        <li>Проекты</li>
                    </ul>
                    <ul>
                        <li>Блог</li>
                        <li>О нас</li>
                        <li>Команда</li>
                    </ul>
                    <span>2022, digital-агентство Cyberia
                        Положение о защите персональных данных
                        Политика в отношении обработки
                        и защиты персональных данных
                        Оферта оказания услуг</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer