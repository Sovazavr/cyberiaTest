import axios from "axios"
import { Item } from "../store/slices/projectsSlice"


export const getProjectsData = async () => {
    try {
        const res = await axios.get<Item[]>('https://backend.cyberia.studio/api/v1/projects')
        return res.data
    } catch (error) {
        console.log(error)
    }
}