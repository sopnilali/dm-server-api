import express, { NextFunction, Request, Response } from "express";
import { SkillController } from "./skill.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { FileUploader } from "../../helper/fileUploader";
const router = express.Router();

router.post('/', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return SkillController.createSkill(req, res, next)
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return SkillController.getAllSkills(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    return SkillController.getSkillById(req, res, next)
})

router.patch('/:id', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return SkillController.updateSkill(req, res, next)
})

router.delete('/:id', auth(UserRole.ADMIN), (req: Request, res: Response, next: NextFunction) => {
    return SkillController.deleteSkill(req, res, next)
})



export const SkillRoutes = router;