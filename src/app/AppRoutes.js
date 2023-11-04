import React from "react";

import routes from "./routes";
import useJumboRoutes from "@jumbo/hooks/useJumboRoutes";

const AppRoutes = () => {
    const appRoutes = useJumboRoutes(routes);

    return (
        <React.Fragment>
            {
                appRoutes
            }
        </React.Fragment>
    );
};
export default AppRoutes;
