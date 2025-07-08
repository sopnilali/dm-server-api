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
exports.PortfolioService = void 0;
const fileUploader_1 = require("../../helper/fileUploader");
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createPortfolio = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const uploadFile = yield fileUploader_1.FileUploader.uploadToCloudinary(file);
        payload.photo = uploadFile === null || uploadFile === void 0 ? void 0 : uploadFile.secure_url;
    }
    const result = yield prisma_1.default.portfolio.create({
        data: payload
    });
    return result;
});
const getAllPortfolio = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.portfolio.findMany();
    return result;
});
const getPortfolioById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.portfolio.findUnique({
        where: { id }
    });
    return result;
});
const updatePortfolio = (id, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const uploadFile = yield fileUploader_1.FileUploader.uploadToCloudinary(file);
        payload.photo = uploadFile === null || uploadFile === void 0 ? void 0 : uploadFile.secure_url;
    }
    const result = yield prisma_1.default.portfolio.update({
        where: { id },
        data: payload
    });
    return result;
});
const deletePortfolio = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.portfolio.delete({
        where: { id }
    });
    return result;
});
exports.PortfolioService = {
    createPortfolio,
    getAllPortfolio,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
};
