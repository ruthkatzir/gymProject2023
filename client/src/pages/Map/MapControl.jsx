import React from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const style = {
    card: {
        margin: "1rem 0",
        "&:first-of-type": {
            marginTop: 0
        },
        "&:last-of-type": {
            marginBottom: 0
        }
    },
    cardHeader: {
        paddingBottom: "0!important"
    },
    cardContent: {
        paddingTop: "0!important",
        paddingBottom: "10!important"
    }
};

const MapControl = ({ classes, name, children }) => {
    return (
        <Card square className={classes.card}>
            <CardHeader className={classes.cardHeader} title={name} />
            <CardContent className={classes.cardContent}>{children}</CardContent>
        </Card>
    );
};

export default withStyles(style)(MapControl);
