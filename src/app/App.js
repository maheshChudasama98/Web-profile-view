import React, { Suspense } from "react";
import "app/styles/app.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import AppProvider from "./AppProvider";
import { config } from "./config/main";
import AppLayout from "./AppLayout";
import AppRoutes from "./AppRoutes";
import configureStore, { history } from './redux/store';
import JumboApp from "@jumbo/components/JumboApp";
import JumboTheme from "@jumbo/components/JumboTheme";
import JumboDialog from "@jumbo/components/JumboDialog";
import JumboDialogProvider from "@jumbo/components/JumboDialog/JumboDialogProvider";
import JumboAuthProvider from "../@jumbo/components/JumboAuthProvider/JumboAuthProvider";
import Div from "@jumbo/shared/Div";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CircularProgress } from "@mui/material";


library.add(faHeart);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const store = configureStore();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <AppProvider>
                        <JumboApp activeLayout={config.defaultLayout}>
                            <JumboTheme init={config.theme}>
                                <JumboDialogProvider>
                                    <JumboDialog />
                                    <SnackbarProvider
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        maxSnack={3}>
                                        <JumboAuthProvider>
                                            <AppLayout>
                                                <Suspense
                                                    fallback={
                                                        <Div
                                                            sx={{
                                                                display: 'flex',
                                                                minWidth: 0,
                                                                alignItems: 'center',
                                                                alignContent: 'center',
                                                                height: '100%',
                                                            }}
                                                        >
                                                            <CircularProgress sx={{ m: '-40px auto 0' }} />
                                                        </Div>
                                                    }
                                                >
                                                    <AppRoutes />
                                                </Suspense>
                                            </AppLayout>
                                        </JumboAuthProvider>
                                    </SnackbarProvider>
                                </JumboDialogProvider>
                            </JumboTheme>
                        </JumboApp>
                    </AppProvider>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
