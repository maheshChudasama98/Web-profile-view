import React from "react";
import JumboLayout from "@jumbo/components/JumboLayout";
import Header from "../shared/headers/Header";
import Sidebar from "../shared/sidebars/Sidebar";
import Footer from "../shared/footers/Footer";
import useJumboLayout from "@jumbo/hooks/useJumboLayout";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import {SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from "@jumbo/utils/constants";
import {headerTheme as theme4} from "../../themes/header/theme4";
import {headerTheme as defaultTheme} from "../../themes/header/default";
import useApp from "../../hooks/useApp";
import layoutConfig from "./layoutConfig";
import {useMediaQuery} from "@mui/material";

const VerticalDefault = ({children}) => {
    const {setJumboLayoutOptions} = useJumboLayout();
    const {headerTheme, setHeaderTheme} = useJumboHeaderTheme();
    const {theme} = useJumboTheme();
    const appBarBgColor = headerTheme.components?.MuiAppBar?.styleOverrides?.root?.background;
    const {sidebarOptions} = useJumboLayoutSidebar();
    const appData = useApp();


    React.useEffect(() => {
        setJumboLayoutOptions(layoutConfig)
    }, []);


    React.useEffect(() => {

        if (appBarBgColor === "#F5F7FA" && sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER) {
            setHeaderTheme({...theme, ...theme4});
            appData.setAppState({
                prevHeaderBgColor: theme?.mode === "dark" ? "#222D45" :"#F5F7FA",
            });
        } else if (appData.prevHeaderBgColor && appData.prevHeaderBgColor === "#F5F7FA") {
            setHeaderTheme({...theme, ...defaultTheme});
        }

    }, [sidebarOptions.style]);


    return (
        <JumboLayout
            header={<Header/>}
            sidebar={<Sidebar/>}
            footer={<Footer/>}
            headerSx={{
                height: 80,
            }}
        >
            {children}
        </JumboLayout>
    );
};

export default VerticalDefault;
