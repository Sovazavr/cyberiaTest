import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProjectCategories, getProjectIdData, getProjectsData } from "../../axios/axios";


export interface Category {
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
export interface Project {
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
    content: string,
}

type TypeState = {
    status: boolean | null,
    isLoading: boolean,
    items: any;
    project: any,
    isLoadingProject: boolean,
    categories: any,
}
const initialState: TypeState = {
    status: null,
    isLoading: true,
    isLoadingProject: true,
    items: [],
    project: {
        item: {},
        more_projects: [],
    },
    categories: []
}
export const getProjectsThunk = createAsyncThunk("get/projects", async () => getProjectsData())
export const getProjectIdThunk = createAsyncThunk("get/project/id", async (id: number) => getProjectIdData(id))
export const getCategories = createAsyncThunk("get/categories", async ()=> getProjectCategories())

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects(state, action) {
            state.items = action.payload;
        },
        pushForm(state, action) {
            if (action.payload === 200) {
                state.status = true
            } else {
                state.status = false
            }

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
        builder.addCase(getProjectIdThunk.fulfilled, (state, action) => {
            state.project = action.payload
            state.isLoadingProject = false;
        });
        builder.addCase(getProjectIdThunk.pending, (state) => {

            state.isLoadingProject = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action)=> {
            state.categories=action.payload
        })
    }
})


export const { getProjects, pushForm } = projectsSlice.actions
export default projectsSlice.reducer

