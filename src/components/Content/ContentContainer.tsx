
import React, { Suspense } from "react"
import { LordIcon } from "../Loader/Loader"


const Content = React.lazy(() => import('./Content'))

export const ContentContainer = () => {
    return (
        <Suspense fallback={<LordIcon
            src={'https://cdn.lordicon.com/dtgezzsi.json'}
            trigger={'loop'}
            colors={{ primary: '#303958', secondary: '#2d76f9' }}
            size={200}
        />}>
            <Content />
        </Suspense>
    )
}
