import React from "react";
import Page from "@jumbo/shared/Page";
import Dashboard from "app/pages/Admin/dashboard/Dashboard";
import Profile from "app/pages/Admin/profile/Profile";
import Education from "app/pages/Admin/education/Education";
import ModifyEducation from "app/pages/Admin/education/ModifyEducation";
import Experience from "app/pages/Admin/experience/Experience";
import Projects from "app/pages/Admin/projects/Projects";
import TechnicalSkills from "app/pages/Admin/skills/technicalSkills/TechnicalSkills";
import SoftSkills from "app/pages/Admin/skills/softSkills/SoftSkills";
import Languages from "app/pages/Admin/skills/languagesSkills/Languages";
import Certificate from "app/pages/Admin/skills/certificate/Certificate";
import Company from "app/pages/Admin/company/Company";
import Setting from "app/pages/Admin/setting/Setting";

const userRoutes = [
    {
        path: "/admin/dashboard",
        element: <Page component={Dashboard} />
    },
    {
        path: "/admin/profile",
        element: <Page component={Profile} />
    },
    {
        path: "/admin/education",
        element: <Page component={Education} />
    },
    {
        path: "/admin/education/create",
        element: <Page component={ModifyEducation} />
    },
    {
        path: "/admin/experience",
        element: <Page component={Experience} />
    },
    {
        path: "/admin/projects",
        element: <Page component={Projects} />
    },
    {
        path: "/admin/technical/skills",
        element: <Page component={TechnicalSkills} />
    },
    {
        path: "/admin/soft/skills",
        element: <Page component={SoftSkills} />
    },
    {
        path: "/admin/languages/skills",
        element: <Page component={Languages} />
    },
    {
        path: "/admin/certificate",
        element: <Page component={Certificate} />
    },
    {
        path: "/admin/company",
        element: <Page component={Company} />
    },
    {
        path: "/admin/setting",
        element: <Page component={Setting} />
    },
];

export default userRoutes;