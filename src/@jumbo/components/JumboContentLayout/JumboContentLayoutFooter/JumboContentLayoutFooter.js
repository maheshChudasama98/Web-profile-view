import React from 'react';
import Div from "@jumbo/shared/Div";

const JumboContentLayoutFooter = ({ children }) => {

    return (
        <Div
            sx={{
                padding: theme => theme.spacing(2, 3),
                backgroundColor: theme => theme.palette.footer.background,
                color: theme => theme.palette.footer.text,
            }}
            className="CmtLayout-footer"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutFooter;
