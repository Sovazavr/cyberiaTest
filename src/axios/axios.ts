import axios from "axios"
import { Category, Item, pushForm } from "../store/slices/projectsSlice"
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
export async function getProjectCategories() {

    const result = await axios.get<Category[]>('https://backend.cyberia.studio/api/v1/project-categories').then(
        (response) => {
            const categories = response.data
            return categories
        }
    ).catch((error) => {
        console.log(error)
    })
    return result

}

export function setFormData(email: string, phone: string, message: string, fileList: FileList | null) {

    const files = fileList ? Array.from(fileList) : [];
    let formData = new FormData();
    if (files) {
        files.forEach((file : File, i :number) => {
            formData.append(`file-${i}`, file, file.name);
          });
        // formData.append('file', file)
    }

    const data = {
        email,
        phone,
        message,
        attachment: files,
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

