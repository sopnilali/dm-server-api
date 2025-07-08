import express, { NextFunction, Request, Response } from "express";
import { ContactController } from "./contact.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    return ContactController.createContact(req, res, next)
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return ContactController.getAllContact(req, res, next)
})

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    return ContactController.deleteContact(req, res, next)
})


export const ContactRoutes = router;