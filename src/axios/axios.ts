import axios from "axios"
import { Item } from "../store/slices/projectsSlice"


export async function getProjectsData() {
    const resultGetProject = await axios.get<Item[]>('https://backend.cyberia.studio/api/v1/projects').then(
        (response) => {
            const projects = response.data
            return projects
        }
    ).catch(() => {
        console.log("faile");
    }
    )
    return resultGetProject
}

