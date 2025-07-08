import { NextFunction, Request, Response } from "express";
import { PortfolioService } from "./portfolio.service";
import { catchAsync } from "../../helper/catchAsync";
import sendResponse from "../../helper/sendResponse";
import status from "http-status";

const createPortfolio = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await PortfolioService.createPortfolio(req.body, req.file as Express.Multer.File)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Portfolio created successfully",
        data: result
    })
})

const getAllPortfolio = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await PortfolioService.getAllPortfolio()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Portfolio fetched successfully",
        data: result
    })
})

const getPortfolioById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {    
    const { id } = req.params
    const result = await PortfolioService.getPortfolioById(id)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Portfolio fetched successfully",
        data: result
    })
})

const updatePortfolio = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await PortfolioService.updatePortfolio(id, req.body, req.file as Express.Multer.File)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Portfolio updated successfully",
        data: result
    })
})

const deletePortfolio = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await PortfolioService.deletePortfolio(id)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Portfolio deleted successfully",
        data: result
    })
})

export const PortfolioController = {
    createPortfolio,
    getAllPortfolio,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
}
