import React from 'react'
import s from "./Project.module.scss"

const Project = () => {
    return (
        <div className={s.project__block}>
            <div className={s.img__wrapper}>
                <img src='https://krot.info/uploads/posts/2022-03/1646203671_19-krot-info-p-toni-stark-mem-smeshnie-foto-21.jpg' />
            </div>
            <div className={s.project__content}>
                <h1 className={s.project__title}>Название проекта</h1>
            </div>
            
        </div>
    )
}

export default Project