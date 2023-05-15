import { useState } from "react";
import { useAppSelector } from "./reduxHook";


export function useItems(){
    const items = useAppSelector(state=>state.projects.items)
    return items.items
}

export function useIsLoading(){
    const isLoading = useAppSelector(state => state.projects.isLoading)
    return isLoading
}
export function useIsLoadingCategories(){
    const isLoading = useAppSelector(state => state.projects.isLoadingCategories)
    return isLoading
}

export function useStatus(){
    const status=useAppSelector(state=>state.projects.status)
    return status
}
export function useProject(){
    const project=useAppSelector(state=> state.projects.project.item)
    return project
}
export function useMoreProject(){
    const project=useAppSelector(state=> state.projects.project.more_projects)
    return project
}

export function useIsLoadingProject(){
    const isLoading=useAppSelector(state => state.projects.isLoadingProject)
    return isLoading
}

export function useCategories(){
    const categories=useAppSelector(state=>state.projects.categories.items)
    return categories
}