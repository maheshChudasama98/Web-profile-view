import { alpha } from "@mui/material";

export function lightenColor(hexColor, factor) {
    hexColor = hexColor.replace('#', '');
    const colorValue = parseInt(hexColor, 16);
    const red = (colorValue >> 16) & 255;
    const green = (colorValue >> 8) & 255;
    const blue = colorValue & 255;
    const newRed = Math.min(255, red + Math.round((255 - red) * factor));
    const newGreen = Math.min(255, green + Math.round((255 - green) * factor));
    const newBlue = Math.min(255, blue + Math.round((255 - blue) * factor));

    const newHexColor = (
        (1 << 24) |
        (newRed << 16) |
        (newGreen << 8) |
        newBlue
    ).toString(16).slice(1);
    return `#${newHexColor}`;
}

export function customSetThemeColors(ThemeColor, theme) {
    let UiChanges = {
        palette: {
            "mode": "light",
            "primary": {
                "main": ThemeColor,
                "light": "#92d050",
                "dark": "#92d050",
                "contrastText": "#FFF"
            },
        },
        components: {
            ...theme.components,
            "MuiCard": {
                "styleOverrides": {
                    "root": {
                        "borderRadius": "12",
                        "boxShadow": `0 0.5rem 1.25rem ${alpha(ThemeColor, .175)}`
                    },
                },
            },
            "MuiDataGrid": {
                "styleOverrides": {
                    root: {
                        '& .MuiDataGrid-row:nth-child(odd)': {
                            backgroundColor: lightenColor(ThemeColor, 0.9),
                        },
                        '& .MuiDataGrid-row:hover': {
                            // backgroundColor: `${lightenColor(ThemeColor, 0.6)} !important`,
                        },
                    },
                },
            },
            "MuiButton": {
                "styleOverrides": {
                    root: {
                        '&:hover': {
                            // backgroundColor: `${lightenColor(ThemeColor, 0.3)} !important`,
                            // color: `${lightenColor(ThemeColor)} !important`,
                        },
                    },
                },

            }
        },
    }
    return UiChanges;
}


// This Action for color as like text color change 
function calculateTextColor(hexBackgroundColor) {
    const thresholdFactor = 0.5;
    const luminance = getRelativeLuminance(hexBackgroundColor);
    const textColor = luminance > thresholdFactor ? 'black' : 'white';
    return textColor;
}
function getRelativeLuminance(hexColor) {
    hexColor = hexColor.replace('#', '');
    const colorValue = parseInt(hexColor, 16);
    const red = (colorValue >> 16) & 255;
    const green = (colorValue >> 8) & 255;
    const blue = colorValue & 255;
    const luminance =
        0.299 * red / 255 + 0.587 * green / 255 + 0.114 * blue / 255;
    return luminance;
}