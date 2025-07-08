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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSaysController = void 0;
const clientsays_service_1 = require("./clientsays.service");
const catchAsync_1 = require("../../helper/catchAsync");
const createClientSays = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = __rest(req.body, []);
    const result = yield clientsays_service_1.ClientSaysService.createClientSays(data, req.file);
    res.status(200).json({
        success: true,
        message: "Client says created successfully",
        data: result
    });
}));
const getAllClientSays = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield clientsays_service_1.ClientSaysService.getAllClientSays();
    res.status(200).json({
        success: true,
        message: "Client says fetched successfully",
        data: result
    });
}));
const getClientSaysById = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield clientsays_service_1.ClientSaysService.getClientSaysById(id);
    res.status(200).json({
        success: true,
        message: "Client says fetched successfully",
        data: result
    });
}));
const updateClientSays = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield clientsays_service_1.ClientSaysService.updateClientSays(id, req.body, req.file);
    res.status(200).json({
        success: true,
        message: "Client says updated successfully",
        data: result
    });
}));
const deleteClientSays = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield clientsays_service_1.ClientSaysService.deleteClientSays(id);
    res.status(200).json({
        success: true,
        message: "Client says deleted successfully",
        data: result
    });
}));
exports.ClientSaysController = {
    createClientSays,
    getAllClientSays,
    getClientSaysById,
    updateClientSays,
    deleteClientSays
};
