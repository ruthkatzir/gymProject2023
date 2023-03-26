import React from "react";
import { withStyles } from "@material-ui/styles";

const style = {
    root: {
        position: "absolute",
        right: 15,
        top: 15,
        width: 250,
        zIndex: 2
    }
};

const MapControlsContainer = ({ classes, children }) => {
    return (
        <div className={classes.root}>
            {React.Children.toArray(children).map(child => child)}
        </div>
    );
};

export default withStyles(style)(MapControlsContainer);
