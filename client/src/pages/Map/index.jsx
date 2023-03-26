import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Map from "./Map";

const theme = createMuiTheme({
    overrides: {
        MuiSelect: {
            icon: {
                fill: "white"
            }
        }
    },
    palette: {
        primary: {
            light: "#e91e62",
            main: "#e91e62",
            dark: "#b00039",
            contrastText: "#fff"
        },
        secondary: {
            light: "#4d6a78",
            main: "#223f4c",
            dark: "#001924",
            contrastText: "#fff"
        }
    }
});

const MapSite = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <>
                <Map />
            </>
        </MuiThemeProvider>
    );
};

export default MapSite;
