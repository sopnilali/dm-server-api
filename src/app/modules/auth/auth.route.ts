import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post('/login', AuthController.UserLogin)
router.post('/logout', auth(UserRole.ADMIN, UserRole.USER), AuthController.UserLogout)

export const AuthRoutes = router;