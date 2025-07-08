import { UserRole } from "@prisma/client"
import { Router } from "express"
import { FileUploader } from "../../helper/fileUploader"
import auth from "../../middlewares/auth"
import { BlogController } from "./blog.controller"

const router = Router()

router.post('/', auth(UserRole.ADMIN), FileUploader.upload.single('thumbnail'), (req: any, res: any) => {
    req.body = JSON.parse(req.body.data)
    BlogController.createBlog(req, res)
})
router.get('/', BlogController.getAllBlog)
router.get('/:id', BlogController.getSingleBlog)
router.patch('/:id', auth(UserRole.ADMIN), FileUploader.upload.single('thumbnail'), (req: any, res: any) => {
    req.body = JSON.parse(req.body.data)
    BlogController.updateBlog(req, res)
})
router.delete('/:id', auth(UserRole.ADMIN), BlogController.deleteBlog)
router.post('/editor-upload', auth(UserRole.ADMIN), FileUploader.editorUpload.single('file'), BlogController.editorUpload)


export const BlogRoutes  = router
