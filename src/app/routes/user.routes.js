import React from "react";
import Page from "@jumbo/shared/Page";

import Dashboard from "app/pages/Admin/dashboard/Dashboard";
import Profile from "app/pages/Admin/profile/Profile";

const routes = [
    {
        path: "/admin/dashboard",
        element: <Page component={Dashboard} />
    },
    {
        path: "/admin/profile",
        element: <Page component={Profile} />
    },
]

export default routes;