// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import Card from '@material-ui/core/Card';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import CardContent from '@material-ui/core/CardContent';
// // import Grid from '@material-ui/core/Grid';

// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         flexGrow: 1,
// //     },
// //     appBar: {
// //         marginBottom: theme.spacing(2),
// //     },
// //     title: {
// //         flexGrow: 1,
// //     },
// //     heroContent: {
// //         padding: theme.spacing(8, 0, 6),
// //         backgroundImage: 'url(https://source.unsplash.com/collection/287876/1600x900)',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         minHeight: '400px',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     heroTitle: {
// //         color: '#fff',
// //         textAlign: 'center',
// //         fontWeight: 700,
// //         fontSize: '4rem',
// //         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
// //     },
// //     heroSubtitle: {
// //         color: '#fff',
// //         textAlign: 'center',
// //         fontWeight: 400,
// //         fontSize: '1.5rem',
// //         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
// //     },
// //     card: {
// //         maxWidth: 345,
// //         margin: theme.spacing(2),
// //     },
// //     media: {
// //         height: 0,
// //         paddingTop: '56.25%', // 16:9
// //     },
// //     cardContent: {
// //         flexGrow: 1,
// //     },
// // }));

// // const Home = () => {
// //     const classes = useStyles();
// //     return (
// //         <div className={classes.root} style={{ marginTop: '4.5pc' }}>
// //             <div className={classes.heroContent}>
// //                 <div>
// //                     <Typography variant="h1" className={classes.heroTitle}>
// //                         Get Fit with My Gym
// //                     </Typography>
// //                     <Typography variant="h3" className={classes.heroSubtitle}>
// //                         The Best Gym in Town
// //                     </Typography>
// //                 </div>
// //             </div>
// //             <Grid container justify="center">
// //                 <Card className={classes.card}>
// //                     <CardMedia
// //                         className={classes.media}
// //                         image="https://source.unsplash.com/collection/287876/800x600"
// //                         title="Card Title"
// //                     />
// //                     <CardContent className={classes.cardContent}>
// //                         <Typography gutterBottom variant="h5" component="h2">
// //                             Personal Training
// //                         </Typography>
// //                         <Typography variant="body2" color="textSecondary" component="p">
// //                             Our certified personal trainers will help you reach your fitness goals.
// //                         </Typography>
// //                     </CardContent>
// //                 </Card>
// //                 <Card className={classes.card}>
// //                     <CardMedia
// //                         className={classes.media}
// //                         image="https://source.unsplash.com/collection/287876/800x600"
// //                         title="Card Title"
// //                     />
// //                     <CardContent className={classes.cardContent}>
// //                         <Typography gutterBottom variant="h5" component="h2">
// //                             Group Classes
// //                         </Typography>
// //                         <Typography variant="body2" color="textSecondary" component="p">
// //                             Join our fun and challenging group classes led by expert instructors.
// //                         </Typography>
// //                     </CardContent>
// //                 </Card>
// //             </Grid>
// //         </div>
// //     );
// // }
// // export default Home;


// // import React, { useState, useEffect } from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import Card from '@material-ui/core/Card';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import CardContent from '@material-ui/core/CardContent';
// // import Grid from '@material-ui/core/Grid';

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Grid from '@material-ui/core/Grid';

// import img1 from '../../assets/images/image1.jpg';
// import img2 from '../../assets/images/image2.jpg';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     appBar: {
//         marginBottom: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     heroContent: {
//         padding: theme.spacing(8, 0, 6),
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '400px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     heroTitle: {
//         color: '#fff',
//         textAlign: 'center',
//         fontWeight: 700,
//         fontSize: '4rem',
//         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
//     },
//     heroSubtitle: {
//         color: '#fff',
//         textAlign: 'center',
//         fontWeight: 400,
//         fontSize: '1.5rem',
//         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
//     },
//     card: {
//         maxWidth: 345,
//         margin: theme.spacing(2),
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
// }));

// const Home = () => {
//     const classes = useStyles();
//     const [bgImgIndex, setBgImgIndex] = useState(0);
//     const bgImages = ['https://source.unsplash.com/collection/287876/1600x900', 'https://source.unsplash.com/collection/218650/1600x900', 'https://source.unsplash.com/collection/179527/1600x900',];

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setBgImgIndex((bgImgIndex + 1) % bgImages.length);
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, [bgImgIndex]);

//     return (
//         <div className={classes.root} style={{ marginTop: '4.5pc' }}>
//             <div className={classes.heroContent}>
//                 <div>
//                     <Typography variant="h1" className={classes.heroTitle}>
//                         Get Fit with My Gym
//                     </Typography>
//                     <Typography variant="h3" className={classes.heroSubtitle}>
//                         The Best Gym in Town
//                     </Typography>
//                 </div>
//             </div>
//             <Grid container justify="center">
//                 <Card className={classes.card}>
//                     <CardMedia
//                         className={classes.media}
//                         image={img1}
//                         title="Card Title"
//                     />
//                     <CardContent className={classes.cardContent}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Personal Training
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Our certified personal trainers will help you reach your fitness goals.
//                         </Typography>
//                     </CardContent>
//                 </Card>
//                 <Card className={classes.card}>
//                     <CardMedia
//                         className={classes.media}
//                         image={img2}
//                         title="Card Title"
//                     />
//                     <CardContent className={classes.cardContent}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Group Classes
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Join our fun and challenging group classes led by expert instructors.
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         </div>
//     );
// }
// export default Home;      


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import RecommendationsPopup from '../RecommentsPopup';

import img1 from '../../images/7.jpg';
import img2 from '../../images/8.jpg';

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
        backgroundImage: 'url(https://source.unsplash.com/collection/287876/1600x900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
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
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Home = () => {
    const classes = useStyles();
    const [heroImage, setHeroImage] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroImage((prev) => prev === 1 ? 2 : 1);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={classes.root} style={{ marginTop: '4.5pc' }}>
            <RecommendationsPopup />
            <div className={classes.heroContent}>
                <div>
                    <Typography variant="h1" className={classes.heroTitle}>
                        Get Fit with My Gym
                    </Typography>
                    <Typography variant="h3" className={classes.heroSubtitle}>
                        The Best Gym in Town
                    </Typography>
                </div>
            </div>
            <Grid container justify="center">
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={img1}
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
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={img2}
                        title="Group Classes"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Group Classes
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Join our fun and challenging group classes led by expert instructors.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
export default Home;    