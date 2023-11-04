import {alpha} from "@mui/material/styles";

export const headerTheme = {
    type: "light",
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    background: '#222D45'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    background: '#3C475F'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    background: '#3C475F',
                    '&:hover': {
                        background: '#46536f',
                    }
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#7352C7',
            light: '#A67FFB',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#475259',
            secondary: '#8595A6',
            disabled: '#A2B2C3',
        },
        divider : alpha('#FFFFFF', 0.1),
        background: {
            paper: '#26324D',
            default: '#3C475F',
        },
        action: {
            active: '#C5CDE6',
            hover: '#323b4f',
        },
    },
};