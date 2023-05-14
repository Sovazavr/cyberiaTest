import React, { useState } from 'react'
import s from "./Arrow.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'

interface Props {
    typeSvg: string,
}

export const Arrow = ({ typeSvg }: Props) => {



    return (
        <div className={s.arrow}>
            <GlobalSVGSelector typeSvg={typeSvg} />
        </div>
    )
}