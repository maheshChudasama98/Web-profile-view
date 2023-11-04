import React from 'react';
import Div from "@jumbo/shared/Div";
import useJumboContentLayout from "@jumbo/hooks/useJumboContentLayout";

const JumboContentLayoutHeader = ({ children }) => {
    const contentLayout = useJumboContentLayout();
    return (
        <Div
            sx={{
                ...contentLayout?.header?.sx,
                marginLeft: "0px !important",
                marginRight: "0px !important",
            }}
            className="CmtLayout-header"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutHeader;
