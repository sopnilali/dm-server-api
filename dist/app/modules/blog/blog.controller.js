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
exports.BlogController = void 0;
const catchAsync_1 = require("../../helper/catchAsync");
const sendResponse_1 = __importDefault(require("../../helper/sendResponse"));
const blog_service_1 = require("./blog.service");
const http_status_1 = __importDefault(require("http-status"));
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.createBlog(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    });
});
const getAllBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getAllBlog();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result
    });
}));
const getSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getSingleBlog(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result
    });
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.updateBlog(req.params.id, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog updated successfully",
        data: result
    });
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield blog_service_1.BlogService.deleteBlog(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog deleted successfully",
    });
});
const editorUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.editorUpload(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Editor upload successfully",
        data: result
    });
});
exports.BlogController = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog, editorUpload };
