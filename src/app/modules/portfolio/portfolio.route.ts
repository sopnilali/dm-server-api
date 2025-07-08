import express, { NextFunction, Request, Response } from "express";
import { PortfolioController } from "./portfolio.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { FileUploader } from "../../helper/fileUploader";

const router = express.Router();


router.post('/', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return PortfolioController.createPortfolio(req, res, next)
})

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return PortfolioController.getAllPortfolio(req, res, next)
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    return PortfolioController.getPortfolioById(req, res, next)
})

router.patch('/:id', auth(UserRole.ADMIN), FileUploader.upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return PortfolioController.updatePortfolio(req, res, next)
})

router.delete('/:id', auth(UserRole.ADMIN), (req: Request, res: Response, next: NextFunction) => {
    return PortfolioController.deletePortfolio(req, res, next)
})

export const PortfolioRoutes = router;


