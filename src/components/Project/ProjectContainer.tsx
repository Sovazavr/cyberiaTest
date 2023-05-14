import React, { Suspense } from "react"
import { LordIcon } from "../Loader/Loader"

const Project = React.lazy(() => import('./Project'))

export const ProjectContainer = () => {
    return (
        <Suspense fallback={<LordIcon
            src={'https://cdn.lordicon.com/dtgezzsi.json'}
            trigger={'loop'}
            colors={{ primary: '#303958', secondary: '#2d76f9' }}
            size={200}
        />}>
            <Project />
        </Suspense>
    )
}