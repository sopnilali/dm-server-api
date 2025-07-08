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
exports.WorkExperienceService = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createWorkExperience = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.workExperience.create({
        data: payload
    });
    return result;
});
const getAllWorkExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.workExperience.findMany();
    return result;
});
const getSingleWorkExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.workExperience.findUnique({
        where: { id }
    });
    return result;
});
const updateWorkExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.workExperience.update({
        where: { id },
        data: payload
    });
    return result;
});
const deleteWorkExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.workExperience.delete({
        where: { id }
    });
    return result;
});
exports.WorkExperienceService = {
    createWorkExperience,
    getAllWorkExperience,
    getSingleWorkExperience,
    updateWorkExperience,
    deleteWorkExperience
};
