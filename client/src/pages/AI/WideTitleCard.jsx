import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pool from '../../images/pool.jpg';
import gym from '../../images/gym1.jpg';
import lesson from '../../images/lesson1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    media: {
        height: '30vh',
        width: '100%'
    },
}));

const WideTitleCard = ({ cardTitle, cardText, cardImgSrc, onClick, cardType }) => {
    const classes = useStyles();

    return (
        <Card style={{ marginTop: '3%', marginBottom: '5%', width: '100%' }}>
            <CardActionArea
                onClick={onClick}
                style={{ backgroundColor: "#e86262", height: "100%", width: "100%" }}
            >
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <CardMedia
                            className={classes.media}
                            image={cardImgSrc === 'pool' ? pool : cardImgSrc === 'gym' ? gym : lesson}
                            title={cardTitle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {cardTitle}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {cardText}
                            </Typography>
                            {cardType !== 'lessons' &&
                                <Typography gutterBottom variant="h5" component="h2">
                                    {cardType}
                                </Typography>
                            }
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
};

export default WideTitleCard;