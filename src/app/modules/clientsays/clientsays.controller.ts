import { NextFunction, Request, Response } from "express"
import { ClientSaysService } from "./clientsays.service"
import { catchAsync } from "../../helper/catchAsync"

const createClientSays = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
    const { ...data } = req.body
    const result = await ClientSaysService.createClientSays(data, req.file as Express.Multer.File)
    res.status(200).json({
        success: true,
        message: "Client says created successfully",
        data: result
    })
})

const getAllClientSays = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
    const result = await ClientSaysService.getAllClientSays()
    res.status(200).json({
        success: true,
        message: "Client says fetched successfully",
        data: result
    })
})

const getClientSaysById = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await ClientSaysService.getClientSaysById(id)
    res.status(200).json({
        success: true,
        message: "Client says fetched successfully",
        data: result
    })
})

const updateClientSays = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await ClientSaysService.updateClientSays(id, req.body, req.file as Express.Multer.File)
    res.status(200).json({
        success: true,
        message: "Client says updated successfully",
        data: result
    })
})

const deleteClientSays = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await ClientSaysService.deleteClientSays(id)
    res.status(200).json({
        success: true,
        message: "Client says deleted successfully",
        data: result
    })
})


export const ClientSaysController = {
    createClientSays,
    getAllClientSays,
    getClientSaysById,
    updateClientSays,
    deleteClientSays
}