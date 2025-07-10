"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const fileUploader_1 = require("../../helper/fileUploader");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.ADMIN), fileUploader_1.FileUploader.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return skill_controller_1.SkillController.createSkill(req, res, next);
});
router.get('/', (req, res, next) => {
    return skill_controller_1.SkillController.getAllSkills(req, res, next);
});
router.get('/:id', (req, res, next) => {
    return skill_controller_1.SkillController.getSkillById(req, res, next);
});
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), fileUploader_1.FileUploader.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return skill_controller_1.SkillController.updateSkill(req, res, next);
});
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), (req, res, next) => {
    return skill_controller_1.SkillController.deleteSkill(req, res, next);
});
exports.SkillRoutes = router;
