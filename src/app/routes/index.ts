import express from 'express'
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { WorkExperienceRoutes } from '../modules/workExperience/experience.route';
import { SkillRoutes } from '../modules/skills/skill.route';
import { ClientSaysRoutes } from '../modules/clientsays/clientsays.route';
import { PortfolioRoutes } from '../modules/portfolio/portfolio.route';
import { ContactRoutes } from '../modules/contact/contact.route';
import { BlogRoutes } from '../modules/blog/blog.route';

const router = express.Router()


const moduleRoutes = [
    {
        path: "/user",
        routes: UserRoutes
    },
    {
        path: "/auth",
        routes: AuthRoutes
    },
    {
        path: "/work-experience",
        routes: WorkExperienceRoutes
    },
    {
        path: "/skills",
        routes: SkillRoutes
    },
    {
        path: "/client-says",
        routes: ClientSaysRoutes
    },
    {
        path: "/portfolio",
        routes: PortfolioRoutes
    },
    {
        path: "/contact",
        routes: ContactRoutes
    },
    {
        path: "/blog",
        routes: BlogRoutes
    }
]

moduleRoutes.forEach(({path, routes})=> {
    router.use(path, routes);
});


export default  router

