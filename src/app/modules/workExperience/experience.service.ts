import prisma from "../../utils/prisma"
import { IWorkExperience } from "./experience.interface"

const createWorkExperience = async (payload: IWorkExperience) => {
    const result = await prisma.workExperience.create({
        data: payload
    })
    return result
}

const getAllWorkExperience = async () => {
    const result = await prisma.workExperience.findMany()
    return result
}

const getSingleWorkExperience = async (id: string) => {
    const result = await prisma.workExperience.findUnique({
        where: { id }
    })
    return result
}

const updateWorkExperience = async (id: string, payload: IWorkExperience) => {
    const result = await prisma.workExperience.update({
        where: { id },
        data: payload
    })
    return result
}

const deleteWorkExperience = async (id: string) => {
    const result = await prisma.workExperience.delete({
        where: { id }
    })
    return result
}

export const WorkExperienceService = {
    createWorkExperience,
    getAllWorkExperience,
    getSingleWorkExperience,
    updateWorkExperience,
    deleteWorkExperience
}