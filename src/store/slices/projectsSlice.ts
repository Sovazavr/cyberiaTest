import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProjectsData } from "../../axios/axios";


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
    isLoading: boolean,
    items: any;
}
const initialState: TypeState = {
    isLoading: true,
    items: [],

}
export const getProjectsThunk = createAsyncThunk("get/projects", async () => getProjectsData())

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects(state, action) {
            state.items = action.payload;
        }
       
    },
    extraReducers: (builder) => {
        builder.addCase(getProjectsThunk.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProjectsThunk.pending, (state) => {

            state.isLoading = true;
        });

    }
})


export const { getProjects } = projectsSlice.actions
export default projectsSlice.reducer

