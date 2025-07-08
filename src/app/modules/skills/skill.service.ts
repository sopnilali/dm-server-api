import { ISkill } from "./skill.interface"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import status from "http-status"
import { FileUploader } from "../../helper/fileUploader"

const createSkill = async (payload: ISkill, file: Express.Multer.File) => {
    const isExist = await prisma.skill.findFirst({
        where: { name: payload.name }
    })
    if (isExist) {
        throw new AppError(status.BAD_REQUEST, "Skill already exists")
    }

    if (payload.percentage > 100) {
        throw new AppError(status.BAD_REQUEST, "Percentage must be less than or equal to 100")
    }

    if (payload.percentage < 0) {
        throw new AppError(status.BAD_REQUEST, "Percentage must be greater than or equal to 0")
    }


    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.icon = uploadFile?.secure_url;
    }

    const result = await prisma.skill.create({
        data: {
            name: payload.name,
            icon: payload.icon,
            percentage: payload.percentage
        }
    })
    return result
}

const getAllSkills = async () => {
    const result = await prisma.skill.findMany()
    return result
}

const getSkillById = async (id: string) => {
    const result = await prisma.skill.findUnique({
        where: { id }
    })
    return result
}

const updateSkill = async (id: string, payload: ISkill, file: Express.Multer.File) => {
    const isExist = await prisma.skill.findUnique({
        where: { id }
    })
    if (!isExist) {
        throw new AppError(status.NOT_FOUND, "Skill not found")
    }

    if (payload.percentage > 100) {
        throw new AppError(status.BAD_REQUEST, "Percentage must be less than or equal to 100")
    }

    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.icon = uploadFile?.secure_url;
    }

    const result = await prisma.skill.update({
        where: { id },
        data: {
            name: payload.name,
            icon: payload.icon,
            percentage: payload.percentage
        }
    })
    return result
}

export const SkillService = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill
}