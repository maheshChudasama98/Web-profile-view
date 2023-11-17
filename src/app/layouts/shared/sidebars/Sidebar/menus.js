import React from "react";
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBarsProgress, faBuilding, faGear, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

let menus = [
    {
        role: ["SuperAdmin", "Admin"],
        label: 'Dashboard',
        type: "nav-item",
        uri: "/admin/dashboard",
        icon: <AutoAwesomeMosaicRoundedIcon sx={{ fontSize: 20 }} />
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Profile',
        type: "nav-item",
        uri: "/admin/profile",
        // icon: <AccountCircleIcon sx={{ fontSize: 20 }} />
        icon: <FontAwesomeIcon icon={faUser} style={{ fontSize: 17 }} />
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Education',
        type: "nav-item",
        uri: "/admin/education",
        // icon: <AccountTreeRoundedIcon sx={{ fontSize: 20 }} />
        icon: <FontAwesomeIcon icon={faUserGraduate} style={{ fontSize: 17 }} />
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Experience',
        type: "nav-item",
        uri: "/admin/experience",
        icon: <FontAwesomeIcon icon={faAward} style={{ fontSize: 17 }} />
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Projects',
        type: "nav-item",
        uri: "/admin/projects",
        icon: <FontAwesomeIcon icon={faBarsProgress} style={{ fontSize: 17 }} />
    },

    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Skills',
        type: "collapsible",
        icon: <StreamOutlinedIcon sx={{ fontSize: 20 }} />,
        children: [
            {
                uri: "/admin/skills/technical",
                label: 'Technical Skills',
                type: "nav-item",
                // icon: <HistoryToggleOffIcon sx={{ fontSize: 20 }} />
            },
            {
                uri: "/admin/skills/soft",
                label: 'Soft Skills',
                type: "nav-item",
                // icon: <HistoryToggleOffIcon sx={{ fontSize: 20 }} />
            },
            {
                uri: "/admin/skills/languages",
                label: 'Languages',
                type: "nav-item",
                // icon: <HistoryToggleOffIcon sx={{ fontSize: 20 }} />
            },
            {
                uri: "/admin/skills/certificate",
                label: 'Certificate',
                type: "nav-item",
                // icon: <HistoryToggleOffIcon sx={{ fontSize: 20 }} />
            },
        ]
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Company',
        type: "nav-item",
        uri: "/admin/companies",
        icon: <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 17 }} />
    },
    {
        role: ["SuperAdmin", "Admin", "User"],
        label: 'Profile Setting',
        type: "nav-item",
        uri: "/admin/setting",
        icon: <FontAwesomeIcon icon={faGear} style={{ fontSize: 17 }} />
    },
]


export default menus;
