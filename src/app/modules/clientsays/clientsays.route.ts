import express, { NextFunction, Request, Response } from "express";
import { ClientSaysController } from "./clientsays.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { FileUploader } from "../../helper/fileUploader";

const router = express.Router();


router.post('/', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return ClientSaysController.createClientSays(req, res, next)
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return ClientSaysController.getAllClientSays(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    return ClientSaysController.getClientSaysById(req, res, next)
})

router.patch('/:id', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return ClientSaysController.updateClientSays(req, res, next)
})

router.delete('/:id', auth(UserRole.ADMIN), (req: Request, res: Response, next: NextFunction) => {
    return ClientSaysController.deleteClientSays(req, res, next)
})


export const ClientSaysRoutes = router;
