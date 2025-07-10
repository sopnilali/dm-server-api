"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillService = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const fileUploader_1 = require("../../helper/fileUploader");
const createSkill = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.skill.findFirst({
        where: { name: payload.name }
    });
    if (isExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Skill already exists");
    }
    if (payload.percentage > 100) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Percentage must be less than or equal to 100");
    }
    if (payload.percentage < 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Percentage must be greater than or equal to 0");
    }
    if (file) {
        const uploadFile = yield fileUploader_1.FileUploader.uploadToCloudinary(file);
        payload.icon = uploadFile === null || uploadFile === void 0 ? void 0 : uploadFile.secure_url;
    }
    const result = yield prisma_1.default.skill.create({
        data: {
            name: payload.name,
            icon: payload.icon,
            percentage: payload.percentage
        }
    });
    return result;
});
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.findMany();
    return result;
});
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.findUnique({
        where: { id }
    });
    return result;
});
const updateSkill = (id, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.skill.findUnique({
        where: { id }
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Skill not found");
    }
    if (payload.percentage > 100) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Percentage must be less than or equal to 100");
    }
    if (file) {
        const uploadFile = yield fileUploader_1.FileUploader.uploadToCloudinary(file);
        payload.icon = uploadFile === null || uploadFile === void 0 ? void 0 : uploadFile.secure_url;
    }
    const result = yield prisma_1.default.skill.update({
        where: { id },
        data: {
            name: payload.name,
            icon: payload.icon,
            percentage: payload.percentage
        }
    });
    return result;
});
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.delete({
        where: { id }
    });
    return result;
});
exports.SkillService = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
