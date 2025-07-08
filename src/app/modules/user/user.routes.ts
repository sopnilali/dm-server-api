import express, { NextFunction, Request, Response } from "express";
import { FileUploader } from "../../helper/fileUploader";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post('/', FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction)=> {
    req.body = JSON.parse(req.body.data)
    return UserController.createUser(req, res, next)
})

router.get('/', auth(UserRole.ADMIN), UserController.getAllUser)
router.get('/:id', auth(UserRole.ADMIN, UserRole.USER), UserController.getSingleUser)
router.patch('/:id', auth(UserRole.ADMIN, UserRole.USER), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction)=> {
    req.body = JSON.parse(req.body.data)
    return UserController.updateUser(req, res, next)
})

export const UserRoutes = router;