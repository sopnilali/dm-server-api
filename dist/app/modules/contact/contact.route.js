"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
router.post('/', (req, res, next) => {
    return contact_controller_1.ContactController.createContact(req, res, next);
});
router.get('/', (req, res, next) => {
    return contact_controller_1.ContactController.getAllContact(req, res, next);
});
router.delete('/:id', (req, res, next) => {
    return contact_controller_1.ContactController.deleteContact(req, res, next);
});
exports.ContactRoutes = router;
