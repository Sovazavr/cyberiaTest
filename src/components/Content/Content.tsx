import React, { useEffect, useState } from 'react'
import s from "./Content.module.scss"
import { useAppSelector } from '../../hooks/reduxHook'
import { Item } from '../../store/slices/projectsSlice'
import { storage } from '../../Storage/storage'
import { useIsLoading, useItems } from '../../hooks/useStateHooks'
import { url } from 'inspector'
import { Link } from 'react-router-dom'




const Content = () => {
    const items = useItems()
    // const projects = useAppSelector(state => state.projects)
    
    // console.log("projectsType", typeof (projects.items));
    // console.log("projectsitemsType", typeof (projects.items.items));
    // console.log("projectsitemsIt", projects.items.items[0]);
    // useEffect(() => {


    // }, [projects])
    const isLoading = useIsLoading()
    function upScroll(){
        window.scrollTo({top: 0})
    }

    


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
                {!isLoading
                    ? items.map((el: Item) => {
                        return (
                            <Link to={`/project/${el.slug}`} state={{ item: el }} onClick={upScroll}>
                                <a key={el.id} className={s.project__list__item} >
                                    <div className={s.image__item} style={{ "backgroundImage": `url(${el.image_dark})` }}>
                                        <div className={s.blackout}></div>
                                        <div className={s.back__text}></div>
                                        <span className={s.project__title}>
                                            {el.title}
                                        </span>
                                        <span className={s.project__description}>
                                            {el.description}
                                        </span>

                                    </div>

                                </a>
                            </Link>
                        )
                    })
                    : <div>loading</div>
                }
                {/* {items.map((el: any) => {
                    <a className={s.project__list__item}>
                        <div className={s.image__item}>
                            <div className={s.blackout}></div>

                            <span className={s.project__title}>
                                {el.title}
                            </span>
                            <span className={s.project__description}>
                                {el.description}
                            </span>

                        </div>

                    </a>
                })} */}

            </div>
        </div>
    )
}

export default Content