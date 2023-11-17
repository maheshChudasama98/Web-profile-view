import React from "react";
import Page from "@jumbo/shared/Page";

import Companies from "app/pages/Admin/companies/Companies";
import ModifyCompany from "app/pages/Admin/companies/ModifyCompany";


const routes = [
    {
        path: "/admin/companies",
        element: <Page component={Companies} />
    },
    {
        path: "/admin/company/create",
        element: <Page component={ModifyCompany} />
    },
    {
        path: "/admin/company/edit",
        element: <Page component={ModifyCompany} />
    },
]

export default routes;