"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const experience_route_1 = require("../modules/workExperience/experience.route");
const skill_route_1 = require("../modules/skills/skill.route");
const clientsays_route_1 = require("../modules/clientsays/clientsays.route");
const portfolio_route_1 = require("../modules/portfolio/portfolio.route");
const contact_route_1 = require("../modules/contact/contact.route");
const blog_route_1 = require("../modules/blog/blog.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        routes: user_routes_1.UserRoutes
    },
    {
        path: "/auth",
        routes: auth_route_1.AuthRoutes
    },
    {
        path: "/work-experience",
        routes: experience_route_1.WorkExperienceRoutes
    },
    {
        path: "/skills",
        routes: skill_route_1.SkillRoutes
    },
    {
        path: "/client-says",
        routes: clientsays_route_1.ClientSaysRoutes
    },
    {
        path: "/portfolio",
        routes: portfolio_route_1.PortfolioRoutes
    },
    {
        path: "/contact",
        routes: contact_route_1.ContactRoutes
    },
    {
        path: "/blog",
        routes: blog_route_1.BlogRoutes
    }
];
moduleRoutes.forEach(({ path, routes }) => {
    router.use(path, routes);
});
exports.default = router;
