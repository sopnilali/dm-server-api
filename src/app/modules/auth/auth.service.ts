import { catchAsync } from "../../helper/catchAsync";
import prisma from "../../utils/prisma";
import { IAuth } from "./auth.interface";
import status from "http-status";
import * as bcrypt from "bcrypt"
import AppError from "../../errors/AppError";
import config from "../../config";
import { TokenUtils } from "../../utils/token";
import { Secret } from "jsonwebtoken";
import { UserStatus } from "@prisma/client";


const UserLogin = async (payload: IAuth) => {
    const { email, password } = payload;
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (!user) {
        throw new AppError(status.NOT_FOUND, "User not found")
    }

    if (user.status === UserStatus.BLOCKED) {
        throw new AppError(status.UNAUTHORIZED, "User is blocked")
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        throw new AppError(status.UNAUTHORIZED, "Password is incorrect")
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    const refreshToken = TokenUtils.GenerateToken(jwtPayload, config.jwt.jwt_refresh_secret as Secret, config.jwt.jwt_refresh_expires_in)
    const accessToken = TokenUtils.GenerateToken(jwtPayload, config.jwt.jwt_access_secret as Secret, config.jwt.jwt_access_expires_in)
    return {
        refreshToken,
        accessToken
    }
}

const UserLogout = async (refreshToken: string) => {
    const decoded = TokenUtils.VerifyToken(refreshToken, config.jwt.jwt_refresh_secret as Secret) as any;
    const user = await prisma.user.findUnique({
        where: { id: decoded.id }
    })
    if (!user) {
        throw new AppError(status.NOT_FOUND, "User not found")
    }
}

export const AuthService = {
    UserLogin,
    UserLogout
}