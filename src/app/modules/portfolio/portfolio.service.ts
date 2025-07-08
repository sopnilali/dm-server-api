import { FileUploader } from "../../helper/fileUploader";
import prisma from "../../utils/prisma";
import { IPortfolio } from "./portfolio.interface";

const createPortfolio = async (payload: IPortfolio, file: Express.Multer.File) => {
    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.photo = uploadFile?.secure_url;
    }

    const result = await prisma.portfolio.create({
        data: payload
    })
    return result
}

const getAllPortfolio = async () => {
    const result = await prisma.portfolio.findMany()
    return result
}

const getPortfolioById = async (id: string) => {
    const result = await prisma.portfolio.findUnique({
        where: { id }
    })
    return result
}

const updatePortfolio = async (id: string, payload: IPortfolio, file: Express.Multer.File) => {
    if (file) {
        const uploadFile = await FileUploader.uploadToCloudinary(file)
        payload.photo = uploadFile?.secure_url;
    }

    const result = await prisma.portfolio.update({
        where: { id },
        data: payload
    })
    return result
}

const deletePortfolio = async (id: string) => {
    const result = await prisma.portfolio.delete({
        where: { id }
    })
    return result
}


export const PortfolioService = {
    createPortfolio,
    getAllPortfolio,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
}