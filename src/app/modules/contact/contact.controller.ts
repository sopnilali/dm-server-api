import { NextFunction, Request, Response } from "express";
import { ContactService } from "./contact.service";
import { catchAsync } from "../../helper/catchAsync";
import sendResponse from "../../helper/sendResponse";
import status from "http-status";

const createContact = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ContactService.createContact(req.body)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Contact created successfully",
        data: result
    })
})

const getAllContact = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ContactService.getAllContact()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Contact fetched successfully",
        data: result
    })
})

const deleteContact = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await ContactService.deleteContact(id)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Contact deleted successfully",
        data: result
    })
})


export const ContactController = {
    createContact,
    getAllContact,
    deleteContact
}
