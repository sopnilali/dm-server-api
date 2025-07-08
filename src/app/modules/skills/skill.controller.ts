import { catchAsync } from "../../helper/catchAsync"
import sendResponse from "../../helper/sendResponse"
import { SkillService } from "./skill.service"
import status from "http-status"


const createSkill = catchAsync(async (req, res) => {
    const result = await SkillService.createSkill(req.body, req.file as Express.Multer.File)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Skill created successfully",
        data: result
    })
})

const getAllSkills = catchAsync(async (req, res) => {
    const result = await SkillService.getAllSkills()
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Skills fetched successfully",
        data: result
    })
})

const getSkillById = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await SkillService.getSkillById(id)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Skill fetched successfully",
        data: result
    })
})

const updateSkill = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await SkillService.updateSkill(id, req.body, req.file as Express.Multer.File)
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Skill updated successfully",
        data: result
    })
})

export const SkillController = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill
}