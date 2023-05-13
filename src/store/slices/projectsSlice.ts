import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProjectIdData, getProjectsData } from "../../axios/axios";


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
}
const initialState: TypeState = {
    status: null,
    isLoading: true,
    isLoadingProject: true,
    items: [],
    project: {
        item: {},
        more_projects: [],
    }

}
export const getProjectsThunk = createAsyncThunk("get/projects", async () => getProjectsData())
export const getProjectIdThunk = createAsyncThunk("get/project/id", async (id: number) => getProjectIdData(id))

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

    }
})


export const { getProjects, pushForm } = projectsSlice.actions
export default projectsSlice.reducer

