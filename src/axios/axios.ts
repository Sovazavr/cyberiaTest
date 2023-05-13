import axios from "axios"
import { Item, pushForm } from "../store/slices/projectsSlice"
import { useState } from "react"




export async function getProjectsData() {
    const resultGetProject = await axios.get<Item[]>('https://backend.cyberia.studio/api/v1/projects').then(
        (response) => {
            const projects = response.data
            return projects
        }
    ).catch(() => {
        console.log("faile");
    })
    return resultGetProject
}
export async function getProjectIdData(id: number) {
    const resultGetProjectId = await axios.get(`https://backend.cyberia.studio/api/v1/projects/${id}`).then(
        (response) => {
            const projects = response.data
            return projects
        }
    ).catch(() => {
        console.log("faile");
    })
    return resultGetProjectId
}

export function setFormData(email: string, phone: string, message: string, file: File | null) {


    let formData = new FormData();
    if (file) {
        formData.append('file', file)
    }

    const data = {
        email,
        phone,
        message,
        attachment: file,
    }

    axios.post('https://backend.cyberia.studio/api/v1/feedbacks', data)
        .then(function (response) {
            console.log(response.status);
            pushForm(true)
            
        })
        .catch(function (error) {
            console.log(error.status);
            pushForm(false)
        });
    

}

