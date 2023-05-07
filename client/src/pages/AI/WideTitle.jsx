import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import enter from '../../images/enterAi1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    media: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.up('md')]: {
            height: 250,
        },
    },
}));

const WideTitle = () => {
    const classes = useStyles();

    return (
        <CardActionArea>
            <CardMedia className={classes.media} image={enter} />
            <CardContent></CardContent>
        </CardActionArea>
    );
};

export default WideTitle;