import { catchAsync } from "../../helper/catchAsync"
import sendResponse from "../../helper/sendResponse"
import { WorkExperienceService } from "./experience.service"
import status from "http-status"


const createWorkExperience = catchAsync(async (req, res) => {
    const result = await WorkExperienceService.createWorkExperience(req.body)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Work experience created successfully",
        data: result
    })
})

const getAllWorkExperience = catchAsync(async (req, res) => {
    const result = await WorkExperienceService.getAllWorkExperience()
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Work experience fetched successfully",
        data: result
    })
})

const getSingleWorkExperience = catchAsync(async (req, res) => {
    const result = await WorkExperienceService.getSingleWorkExperience(req.params.id)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Work experience fetched successfully",
        data: result
    })
})

const updateWorkExperience = catchAsync(async (req, res) => {
    const result = await WorkExperienceService.updateWorkExperience(req.params.id, req.body)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Work experience updated successfully",
        data: result
    })
})

const deleteWorkExperience = catchAsync(async (req, res) => {
    const result = await WorkExperienceService.deleteWorkExperience(req.params.id)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Work experience deleted successfully",
        data: result
    })
})

export const WorkExperienceController = {
    createWorkExperience, getAllWorkExperience, getSingleWorkExperience, updateWorkExperience, deleteWorkExperience
}