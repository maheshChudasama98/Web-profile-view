import React from "react";
import Page from "@jumbo/shared/Page";

import Projects from "app/pages/Admin/projects/Projects";
import ModifyProjects from "app/pages/Admin/projects/ModifyProjects";

const routes = [
    {
        path: "/admin/projects",
        element: <Page component={Projects} />
    },
    {
        path: "/admin/project/create",
        element: <Page component={ModifyProjects} />
    },
    {
        path: "/admin/project/edit",
        element: <Page component={ModifyProjects} />
    },

]

export default routes;