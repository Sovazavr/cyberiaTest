import React, { useEffect } from 'react'
import s from "./Project.module.scss"
import { Item, getProjectIdThunk } from '../../store/slices/projectsSlice'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHook'
import { useIsLoadingProject, useProject } from '../../hooks/useStateHooks'
import { LordIcon } from '../Loader/Loader'



const Project = () => {
    const location = useLocation()
    const { item } = location.state
    

    const dispatch = useAppDispatch()
    const project = useProject()
    const isLoading = useIsLoadingProject()
    console.log("PROJECT_ITEM", project);
    useEffect(() => {
        dispatch(getProjectIdThunk(item.id))
    }, [dispatch])

    return (
        !isLoading
            ? <div className={s.project__block}>
                <div className={s.img__wrapper}>
                    <img src={`${project.image_dark}`} />
                </div>
                <div className={s.project__content}>
                    <h1 className={s.project__title}>Название проекта</h1>
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