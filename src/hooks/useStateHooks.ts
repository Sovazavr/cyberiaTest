import { useAppSelector } from "./reduxHook";


export function useItems(){
    const items = useAppSelector(state=>state.projects.items)
    return items.items
}

export function useIsLoading(){
    const isLoading = useAppSelector(state => state.projects.isLoading)
    return isLoading
}