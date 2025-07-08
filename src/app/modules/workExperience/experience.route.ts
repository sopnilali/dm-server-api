import express, { NextFunction, Request, Response } from "express";
import { WorkExperienceController } from "./experience.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();


router.post('/', auth(UserRole.ADMIN), WorkExperienceController.createWorkExperience)
router.get('/', WorkExperienceController.getAllWorkExperience)
router.get('/:id', WorkExperienceController.getSingleWorkExperience)
router.patch('/:id', auth(UserRole.ADMIN), WorkExperienceController.updateWorkExperience)
router.delete('/:id', auth(UserRole.ADMIN), WorkExperienceController.deleteWorkExperience)

export const WorkExperienceRoutes = router;