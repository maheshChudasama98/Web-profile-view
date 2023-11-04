import {matchRoutes, useLocation} from "react-router-dom";
import {buildRoutes} from "@jumbo/utils";

const useRoutePathMatch = async (routes, searchPath) => {
    const location =  useLocation();

    if(Array.isArray(routes) && routes.length > 0 && (searchPath || location?.pathname)) {
        const generatedRoutes = await buildRoutes(routes);
        const matchedRoutes = matchRoutes(generatedRoutes, location.pathname);
        return matchedRoutes && matchedRoutes.length > 0;
    }

    return false;
};

export default useRoutePathMatch;