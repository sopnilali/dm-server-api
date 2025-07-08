import AppError from "../../errors/AppError"
import { FileUploader } from "../../helper/fileUploader"
import prisma from "../../utils/prisma"
import { IClientSays } from "./clientsays.interface"
import status from "http-status"


const createClientSays = async (payload: IClientSays, file: Express.Multer.File) => {

    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.photo = uploadFile?.secure_url;
    }

    const result = await prisma.clientSays.create({
        data: payload
    })
    return result
}

const getAllClientSays = async () => {
    const result = await prisma.clientSays.findMany()
    return result
}

const getClientSaysById = async (id: string) => {
    const result = await prisma.clientSays.findUnique({
        where: { id }
    })
    return result
}

const updateClientSays = async (id: string, payload: IClientSays, file: Express.Multer.File) => {

    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.photo = uploadFile?.secure_url;
    }


    const isExist = await prisma.clientSays.findUnique({
        where: { id }
    })
    if (!isExist) {
        throw new AppError(status.NOT_FOUND, "Client says not found")
    }

    const result = await prisma.clientSays.update({
        where: { id },
        data: payload
    })
    return result
}

const deleteClientSays = async (id: string) => {
    const isExist = await prisma.clientSays.findUnique({
        where: { id }
    })
    if (!isExist) {
        throw new AppError(status.NOT_FOUND, "Client says not found")
    }
    const result = await prisma.clientSays.delete({
        where: { id }
    })
    return result
}



export const ClientSaysService = {
    createClientSays,
    getAllClientSays,
    getClientSaysById,
    updateClientSays,
    deleteClientSays
}