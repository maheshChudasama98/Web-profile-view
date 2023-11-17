import React from "react";
import Page from "@jumbo/shared/Page";

import Education from "app/pages/Admin/education/Education";
import ModifyEducation from "app/pages/Admin/education/ModifyEducation";


const routes = [
    {
        path: "/admin/education",
        element: <Page component={Education} />
    },
    {
        path: "/admin/education/create",
        element: <Page component={ModifyEducation} />
    },
    {
        path: "/admin/education/edit",
        element: <Page component={ModifyEducation} />
    },
]

export default routes;