import { catchAsync } from "../../helper/catchAsync";
import { AuthService } from "./auth.service";
import { IAuth } from "./auth.interface";
import config from "../../config";
import sendResponse from "../../helper/sendResponse";
import status from "http-status";

const UserLogin = catchAsync(async (req, res) => {
    const result = await AuthService.UserLogin(req.body as IAuth);
    res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: config.node_env === "production",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    })

    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "User logged in successfully",
        data: {
            accessToken: result.accessToken,
        },
    })
});

const UserLogout = catchAsync(async (req, res) => {
   await AuthService.UserLogout(req.cookies.refreshToken);
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: config.node_env === "production",
        maxAge: 0,
    });
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "User logged out successfully",
    })
});

export const AuthController = {
    UserLogin, UserLogout
}