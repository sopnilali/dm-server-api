"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.ADMIN), experience_controller_1.WorkExperienceController.createWorkExperience);
router.get('/', experience_controller_1.WorkExperienceController.getAllWorkExperience);
router.get('/:id', experience_controller_1.WorkExperienceController.getSingleWorkExperience);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), experience_controller_1.WorkExperienceController.updateWorkExperience);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), experience_controller_1.WorkExperienceController.deleteWorkExperience);
exports.WorkExperienceRoutes = router;
