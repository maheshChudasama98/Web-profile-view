import React, { useEffect, useState } from 'react';
import JumboNavIdentifier from "@jumbo/components/JumboVerticalNavbar/JumboNavIdentifier";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import { SIDEBAR_VIEWS } from "@jumbo/utils/constants/layout";
import List from "@mui/material/List";
import PropTypes from 'prop-types';

const JumboVerticalNavbar = ({ items }) => {
    const [menusList, setMenusList] = useState(items)
    const { sidebarOptions } = useJumboLayoutSidebar();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    let userRole = localStorage.getItem('user') === null ? "" : JSON.parse(localStorage.getItem('user')).user
    // console.log(userRole);
    const filter = () => {
        const filteredData = menusList.filter((item) => item.role.includes(userRole));
        setMenusList(filteredData);
    };

    useEffect(() => {
        filter()
    }, [userRole])
    return (
        <List
            disablePadding
            sx={{
                mr: isMiniAndClosed ? 0 : 2,
                pb: 2
            }}
        >
            {
                
                menusList.map((item, index) => (
                // items.map((item, index) => (
                    <JumboNavIdentifier translate item={item} key={index} />
                ))
            }
        </List>
    );
};

JumboVerticalNavbar.defaultProps = {
    items: PropTypes.array,
    translate: false
};

export default JumboVerticalNavbar;

