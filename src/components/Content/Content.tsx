import React from 'react'
import s from "./Content.module.scss"




const Content = () => {
    
    
    

    return (
        <div className={`${s.block__content}`}>
            <div className={s.content__wrapper}>
                <div className={s.open__path}>
                    <span className={s.begin__path}>Главная /</span>
                    <span className={s.end__path}> Проекты</span>
                </div>
                <h1 className={s.content__title}>Проекты</h1>
            </div>
            <div className={s.project__filter__wrapper}>
                <ul className={s.list__filter}>
                    <li className={s.list__filter__item}>Продвижение</li>
                    <li className={s.list__filter__item}>Разработка</li>
                    <li className={s.list__filter__item}>Мобильное приложение</li>
                    <li className={s.list__filter__item}>Юзабилити-аудит</li>
                </ul>
            </div>
            <div className={s.projects__list}>
                <a className={s.project__list__item}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>
                       
                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
                <a className={`${s.project__list__item}`}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>

                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
                <a className={`${s.project__list__item}`}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>

                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
                <a className={`${s.project__list__item}`}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>

                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
                <a className={`${s.project__list__item}`}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>

                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
                <a className={`${s.project__list__item}`}>
                    <div className={s.image__item}>
                        <div className={s.blackout}></div>

                        <span className={s.project__title}>
                            Какой-то умный текст и многа букав
                        </span>
                        <span className={s.project__description}>
                            Еще что-то про умный текст сверху
                        </span>

                    </div>

                </a>
            </div>
        </div>
    )
}

export default Content