import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface Category {
    id: number,
    name: string,
}

export interface Item {
    id: number,
    title: string,
    slug: string,
    image: string,
    image_dark: string,
    description: string,
    geo: {
        lat: number,
        lng: number,
    },
    categories: Category[],

}

type TypeState = {
    items: Item[];
}
const initialState: TypeState = {
    items: []
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects(state, action) {
            state.items=action.payload;
        }
    }
})

export const {getProjects}=projectsSlice.actions
export default projectsSlice.reducer

