import React from "react";
// import { Navigate } from "react-router-dom";
import Page from "@jumbo/shared/Page";
import WebView from "app/pages/webView/index";
import UserProfile from "app/pages/users/user-profile/UserProfile";
import LoginComponents from "app/pages/Auth/Login/LoginComponents";
import SingUpComponents from "app/pages/Auth/SingUp/SingUpComponents";

import userRoutes from "app/routes/user.routes";
import companiesRoutes from "app/routes/admin/companies.routes";
import educationRoutes from "app/routes/admin/education.routes";
import experienceRoutes from "app/routes/admin/experience.routes";
import projectsRoutes from "app/routes/admin/projects.routes";
import settingRoutes from "app/routes/admin/setting.routes";
import skillsRoutes from "app/routes/admin/skills.routes";

// import company from "./company";

/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/dashboards",
        element: <Page component={WebView} layout={"solo-page"} disableSmLogin={true} />
    },
    {
        path: "/profile",
        element: <Page component={UserProfile} layout={"solo-page"} disableSmLogin={true} />
    },

];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [
    ...userRoutes,
    ...companiesRoutes,
    ...educationRoutes,
    ...experienceRoutes,
    ...projectsRoutes,
    ...settingRoutes,
    ...skillsRoutes,
];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [
    {
        path: "/login",
        element: <Page component={LoginComponents} layout={"solo-page"} disableSmLogin={true} />
    },
    {
        path: "/singup",
        element: <Page component={SingUpComponents} layout={"solo-page"} disableSmLogin={true} />
    },
];

const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export { routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly };
