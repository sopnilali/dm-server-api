"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required"
    }),
    email: zod_1.z.string({
        required_error: "Email is required"
    }).email(),
    password: zod_1.z.string({
        required_error: "Password is required"
    }),
    avaterUrl: zod_1.z.string().optional(),
});
exports.UserValidation = {
    createUserZodSchema
};
