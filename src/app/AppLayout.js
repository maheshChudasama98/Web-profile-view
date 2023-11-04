import React from 'react';
import JumboLayoutProvider from "@jumbo/components/JumboLayout/JumboLayoutProvider";
import JumboContentLayoutProvider from "@jumbo/components/JumboContentLayout/JumboContentLayoutProvider";
import useJumboApp from "@jumbo/hooks/useJumboApp";
import { LAYOUTS } from "./utils/constants/layouts";
import { config } from "./config/main";
import useJumboAuth from "@jumbo/hooks/useJumboAuth";
import { sweetAlerts } from './config/sweetAlertsActions';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import Loader from './components/loaders/Loader';
const AppLayout = (props) => {
    const { error, message, loading } = useSelector((state) => state.CommonReducer)
    const { activeLayout } = useJumboApp();
    const { isLoading } = useJumboAuth();
    const theme = useTheme();

    if (!activeLayout) {
        throw Error("AppLayout > No activeLayout is set.");
    }

    const LayoutComponent = React.useMemo(() => {
        const layoutIndex = LAYOUTS.findIndex(layout => layout.name === activeLayout);

        if (layoutIndex >= 0) {
            return LAYOUTS[layoutIndex].component;
        }

        throw Error("No activeLayout is set yet.");
    }, [activeLayout]);


    return (
        <JumboLayoutProvider activeLayout={activeLayout} >
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <LayoutComponent>
                        {error
                            ?
                            sweetAlerts('error', error, theme)
                            : ''}
                        {message
                            ?
                            sweetAlerts('success', message, theme)
                            : ''}
                        <JumboContentLayoutProvider
                            layoutOptions={config.defaultContentLayout}
                        >
                            {props.children}
                            {loading &&
                                <Loader />
                            }
                        </JumboContentLayoutProvider>
                    </LayoutComponent>
            }

        </JumboLayoutProvider >
    );
};

export default AppLayout;
