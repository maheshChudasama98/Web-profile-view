import React from "react";
import Page from "@jumbo/shared/Page";
import Dashboard from "app/pages/Admin/dashboard/Dashboard";
import Profile from "app/pages/Admin/profile/Profile";
import Education from "app/pages/Admin/education/Education";
import ModifyEducation from "app/pages/Admin/education/ModifyEducation";

import Experience from "app/pages/Admin/experience/Experience";
import ModifyExperience from "app/pages/Admin/experience/ModifyExperience";

import Projects from "app/pages/Admin/projects/Projects";
import ModifyProjects from "app/pages/Admin/projects/ModifyProjects";

import Companies from "app/pages/Admin/companies/Companies";
import ModifyCompany from "app/pages/Admin/companies/ModifyCompany";

import TechnicalSkills from "app/pages/Admin/skills/technicalSkills/TechnicalSkills";
import ModifyTechnicalSkills from "app/pages/Admin/skills/technicalSkills/ModifyTechnicalSkills";

import SoftSkills from "app/pages/Admin/skills/softSkills/SoftSkills";
import ModifySoftSkills from "app/pages/Admin/skills/softSkills/ModifySoftSkills";

import Languages from "app/pages/Admin/skills/languagesSkills/Languages";
import ModifyLanguage from "app/pages/Admin/skills/languagesSkills/ModifyLanguage";

import Certificate from "app/pages/Admin/skills/certificate/Certificate";
import ModifyCertificate from "app/pages/Admin/skills/certificate/ModifyCertificate";

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
        path: "/admin/education/edit",
        element: <Page component={ModifyEducation} />
    },
    {
        path: "/admin/experience",
        element: <Page component={Experience} />
    },
    {
        path: "/admin/experience/create",
        element: <Page component={ModifyExperience} />
    },
    {
        path: "/admin/experience/edit",
        element: <Page component={ModifyExperience} />
    },
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
    {
        path: "/admin/skills/technical",
        element: <Page component={TechnicalSkills} />
    },
    {
        path: "/admin/skills/technical/create",
        element: <Page component={ModifyTechnicalSkills} />
    },
    {
        path: "/admin/skills/technical/edit",
        element: <Page component={ModifyTechnicalSkills} />
    },
    {
        path: "/admin/skills/soft",
        element: <Page component={SoftSkills} />
    },
    {
        path: "/admin/skills/soft/create",
        element: <Page component={SoftSkills} />
    },
    {
        path: "/admin/skills/soft/edit",
        element: <Page component={SoftSkills} />
    },
    {
        path: "/admin/skills/languages",
        element: <Page component={Languages} />
    },
    {
        path: "/admin/skills/language/create",
        element: <Page component={Languages} />
    },
    {
        path: "/admin/skills/language/edit",
        element: <Page component={Languages} />
    },
    {
        path: "/admin/skills/certificate",
        element: <Page component={Certificate} />
    },
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
    {
        path: "/admin/setting",
        element: <Page component={Setting} />
    },
];

export default userRoutes;