import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice"

const rootReducer=combineReducers({
    projects: projectsReducer,
})

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
const store = createStore()
export default store