import sendResponse from "../../helper/sendResponse"
import { BlogService } from "./blog.service"
import status from "http-status"

const createBlog = async (req: any, res: any) => {
    const result = await BlogService.createBlog(req)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })
}

const getAllBlog = async (req: any, res: any) => {
    const result = await BlogService.getAllBlog()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result
    })
}

const getSingleBlog = async (req: any, res: any) => {
    const result = await BlogService.getSingleBlog(req.params.id)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result
    })
}

const updateBlog = async (req: any, res: any) => {
    const result = await BlogService.updateBlog(req.params.id, req)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog updated successfully",
        data: result
    })
}

const deleteBlog = async (req: any, res: any) => {
    await BlogService.deleteBlog(req.params.id)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog deleted successfully",
    })
}

const editorUpload = async (req: any, res: any) => {
    const result = await BlogService.editorUpload(req)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Editor upload successfully",
        data: result
    })
}
export const BlogController = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog, editorUpload }
