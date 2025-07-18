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
exports.SkillController = void 0;
const catchAsync_1 = require("../../helper/catchAsync");
const sendResponse_1 = __importDefault(require("../../helper/sendResponse"));
const skill_service_1 = require("./skill.service");
const http_status_1 = __importDefault(require("http-status"));
const createSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.createSkill(req.body, req.file);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Skill created successfully",
        data: result
    });
}));
const getAllSkills = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getAllSkills();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Skills fetched successfully",
        data: result
    });
}));
const getSkillById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.getSkillById(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Skill fetched successfully",
        data: result
    });
}));
const updateSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.updateSkill(id, req.body, req.file);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Skill updated successfully",
        data: result
    });
}));
const deleteSkill = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.deleteSkill(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Skill deleted successfully",
        data: result
    });
}));
exports.SkillController = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
