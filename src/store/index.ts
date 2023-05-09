import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice"

const rootReducer = combineReducers({
    projects: projectsReducer,
})

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
const store = createStore()


export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch


