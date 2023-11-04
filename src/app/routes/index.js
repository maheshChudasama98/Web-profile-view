import React from "react";
import { Navigate } from "react-router-dom";
import Page from "@jumbo/shared/Page";
import WebView from "app/pages/webView/index";
import UserProfile from "app/pages/users/user-profile/UserProfile";
import loginPage from "app/pages/Login/LoginComponents";

import company from "./company";

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
    {
        path: "/login",
        element: <Page component={loginPage} layout={"solo-page"} disableSmLogin={true} />
    },
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [
    ...company
];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [
    // {
    //     path: "/user/login",
    //     element: <Page component={Login2} layout={"solo-page"} disableSmLogin={true}/>
    // },
    // {
    //     path: "/user/signup",
    //     element: <Signup2/>
    // },
];

const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export { routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly };
