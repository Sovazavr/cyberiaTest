import React, { useEffect, useState } from 'react'
import s from "./Project.module.scss"
import { Item, getProjectIdThunk } from '../../store/slices/projectsSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHook'
import { useIsLoadingProject, useMoreProject, useProject } from '../../hooks/useStateHooks'
import { LordIcon } from '../Loader/Loader'
import { Link } from 'react-router-dom'
import {useUpScroll} from '../../hooks/useScroll'
import { Arrow } from './Arrow'
import { LazyImage } from './LazyImage'



const Project = () => {
    const location = useLocation()
    const { item } = location.state
    const [typeSvg, setTypeSvg] = useState<string>('arrow-link')

    const dispatch = useAppDispatch()
    const project = useProject()
    const more_projects = useMoreProject()
    const isLoading = useIsLoadingProject()

    
    
    useEffect(() => {
        dispatch(getProjectIdThunk(item.id))
    }, [dispatch, item])

    const upScroll=()=>{
        window.scrollTo({
            top: 0
        })
    }

    const data = project.content
    const navigate = useNavigate()
    return (
        !isLoading
            ? <div className={s.project__block}>
                <div className={s.img__wrapper}>
                    {/* <img src={`${project.image_dark}`} /> */}
                    <LazyImage image={{src : `${project.image_dark}`}}/>
                </div>
                <div className={s.project__content__wrapper}>
                    <div className={s.open__path}>
                        <span className={s.begin__path}>Главная /</span>
                        <span className={s.begin__path} onClick={() => navigate("/")}> Проекты / </span>
                        <span className={s.end__path}>{project.title}</span>
                    </div>
                    <div className={s.project__content} >
                        <div className={s.project__header}>
                            <span className={s.project__title}>{project.title}</span>
                            <span className={s.project__description}>{project.description}</span>
                        </div>
                        <div className={s.project__backend__data}
                            dangerouslySetInnerHTML={{ __html: data }}
                        />
                    </div>
                    <div className={s.project__footer}>
                        <div className={s.button__more__projects} onClick={()=>{navigate("/"); upScroll()}} 
                            onMouseMove={() => setTypeSvg('arrow-link-long')}
                            onMouseLeave={() => setTypeSvg('arrow-link')}
                        >
                            <span>Другие проекты</span>
                            <Arrow typeSvg={typeSvg} />
                        </div>
                        <div className={s.more_projects}>
                            {more_projects.map((el: Item) => <Link to={`/project/${el.slug}`} state={{ item: el }} onClick={useUpScroll}>
                                <a key={el.id} className={s.project__list__item} href={`/project/${el.slug}`}>
                                    <div className={s.image__item} style={{ "backgroundImage": `url(${el.image_dark})` }}>
                                        <div className={s.blackout}></div>
                                        <div className={s.back__text}></div>
                                        <span className={s.project__title__link}>
                                            {el.title}
                                        </span>
                                        <span className={s.project__description__link}>
                                            {el.description}
                                        </span>

                                    </div>

                                </a>
                            </Link>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
            :
            <LordIcon
                src={'https://cdn.lordicon.com/dtgezzsi.json'}
                trigger={'loop'}
                colors={{ primary: '#303958', secondary: '#2d76f9' }}
                size={200}
            ></LordIcon>

    )
}

export default Project