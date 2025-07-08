import status from "http-status";
import { TokenUtils } from "../utils/token";
import config from "../config";
import { Secret } from "jsonwebtoken";
import { catchAsync } from "../helper/catchAsync";
import AppError from "../errors/AppError";

const auth = (...roles: string[])=> {
    return catchAsync(async (req, res, next) => {
        let token;
        token = req.headers.authorization;
        if (!token) {
            throw new AppError(status.UNAUTHORIZED, "You are not authorized to access this resource");
        }
        const decoded = TokenUtils.VerifyToken(token, config.jwt.jwt_access_secret as Secret) as any;
        const role = decoded.role;
        if(roles.length && !roles.includes(role)) {
            throw new AppError(status.FORBIDDEN, "You do not have permission to access this resource");
        }
        req.user = decoded;
        next();
    })
}

export default auth;
