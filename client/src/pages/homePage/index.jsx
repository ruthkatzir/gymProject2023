import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import ReactPlayer from 'react-player';
import home from '../../images/home.mp4';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/9.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        marginBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heroTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '4rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
    },
    heroSubtitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '1.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
    },
    card: {
        minWidth: '50%',
        margin: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Home = () => {
    const { token, currentUser } = useContext(AuthContext);
    const [isScretery, setIsScretery] = useState(0);
    const classes = useStyles();
    const [heroImage, setHeroImage] = useState(1);

    useEffect(() => {
        if (currentUser) {
            currentUser.roles === 'ADMIN' ? setIsScretery(1) : setIsScretery(0);
        }
        const intervalId = setInterval(() => {
            switch (heroImage) {
                case 1:
                    setHeroImage(2);
                    break;
                case 2:
                    setHeroImage(3);
                    break;
                case 3:
                    setHeroImage(4);
                    break;
                case 4:
                    setHeroImage(1);
                    break;
                default:
                    setHeroImage(1);
                    break;
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [heroImage]);

    if (isScretery) {
        window.location.href = '/secretary';
    }
    else {
        return (
            <div className={classes.root} style={{ marginTop: '0.6pc' }}>
                {<div className={classes.heroContent}>
                    <ReactPlayer
                        url={home}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="100%"
                    />
                </div>}

                <Grid container justify="center" style={{ marginBottom: '10%', marginTop: '5%' }}>
                    <Card className={classes.card} style={{ maxWidth: '100%' }}>
                        <CardMedia
                            className={classes.media}
                            image={
                                heroImage === 1
                                    ? img1
                                    : heroImage === 2
                                        ? img2
                                        : heroImage === 3
                                            ? img3
                                            : img4
                            }
                            title="Personal Training"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Personal Training
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Our certified personal trainers will help you reach your fitness goals.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}
export default Home;    