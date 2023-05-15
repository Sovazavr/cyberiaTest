import React, { useEffect, useState } from 'react'
import s from "./Content.module.scss"

import { Item } from '../../store/slices/projectsSlice'

import { useCategories, useIsLoading, useIsLoadingCategories, useItems } from '../../hooks/useStateHooks'

import { Link } from 'react-router-dom'
import { LordIcon } from '../Loader/Loader'
import { useUpScroll } from '../../hooks/useScroll'



type Category = {
    id: number,
    name: string,
}


const Content = () => {
    const items = useItems()
    const isLoading = useIsLoading()
    
    // // const projects = useAppSelector(state => state.projects)
    const [selectCategory, setSelectCategory] = useState<number | null>(null)

    const categories = useCategories()


    
   




    const checkSelectedCategory = (id: number) => {
        if (selectCategory === id) {
            setSelectCategory(null)
        }
        else {
            setSelectCategory(id)
        }
    }
    //  useEffect(() => {
    //      setFilterItems(items)
    //  }, [items])
    function filtered(item: Item) {
        if (selectCategory) {
            return (item.categories.length > 1
                ?
                (item.categories[0].id === selectCategory || item.categories[1].id === selectCategory)
                :
                item.categories[0].id === selectCategory)
        }
        else { return item }
    }




    return (
        <div className={s.block__content}>
            <div className={s.content__wrapper}>
                <div className={s.open__path}>
                    <span className={s.begin__path}>Главная /</span>
                    <span className={s.end__path}> Проекты</span>
                </div>
                <h1 className={s.content__title}>Проекты</h1>
            </div>
            <div className={s.project__filter__wrapper}>
                <ul className={s.list__filter}>
                    {categories && categories.map((e: Category) =>
                        <li className={e.id === selectCategory ? s.list__filter__item__selected : s.list__filter__item} onClick={() => checkSelectedCategory(e.id)}>
                            {e.name}
                        </li>
                    )}
                    {/* <li className={s.list__filter__item}>Продвижение</li>
                    <li className={s.list__filter__item}>Разработка</li>
                    <li className={s.list__filter__item}>Мобильное приложение</li>
                    <li className={s.list__filter__item}>Юзабилити-аудит</li> */}
                </ul>
            </div>
            <div className={s.projects__list}>
                {!isLoading
                    ? items.filter(filtered)
                        .map((el: Item) => {
                            return (
                                <Link to={`/project/${el.slug}`} state={{ item: el }} onClick={useUpScroll}>
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
                    : <LordIcon
                        src={'https://cdn.lordicon.com/dtgezzsi.json'}
                        trigger={'loop'}
                        colors={{ primary: '#303958', secondary: '#2d76f9' }}
                        size={200}
                    ></LordIcon>
                }

            </div>
        </div>
    )
}

export default Content