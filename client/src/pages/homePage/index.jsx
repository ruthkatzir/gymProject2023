// // // import React from 'react';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import AppBar from '@material-ui/core/AppBar';
// // // import Toolbar from '@material-ui/core/Toolbar';
// // // import Typography from '@material-ui/core/Typography';
// // // import Button from '@material-ui/core/Button';
// // // import Card from '@material-ui/core/Card';
// // // import CardMedia from '@material-ui/core/CardMedia';
// // // import CardContent from '@material-ui/core/CardContent';
// // // import Grid from '@material-ui/core/Grid';

// // // const useStyles = makeStyles((theme) => ({
// // //     root: {
// // //         flexGrow: 1,
// // //     },
// // //     appBar: {
// // //         marginBottom: theme.spacing(2),
// // //     },
// // //     title: {
// // //         flexGrow: 1,
// // //     },
// // //     heroContent: {
// // //         padding: theme.spacing(8, 0, 6),
// // //         backgroundImage: 'url(https://source.unsplash.com/collection/287876/1600x900)',
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //         minHeight: '400px',
// // //         display: 'flex',
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //     },
// // //     heroTitle: {
// // //         color: '#fff',
// // //         textAlign: 'center',
// // //         fontWeight: 700,
// // //         fontSize: '4rem',
// // //         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
// // //     },
// // //     heroSubtitle: {
// // //         color: '#fff',
// // //         textAlign: 'center',
// // //         fontWeight: 400,
// // //         fontSize: '1.5rem',
// // //         textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
// // //     },
// // //     card: {
// // //         maxWidth: 345,
// // //         margin: theme.spacing(2),
// // //     },
// // //     media: {
// // //         height: 0,
// // //         paddingTop: '56.25%', // 16:9
// // //     },
// // //     cardContent: {
// // //         flexGrow: 1,
// // //     },
// // // }));

// // // const Home = () => {
// // //     const classes = useStyles();
// // //     return (
// // //         <div className={classes.root} style={{ marginTop: '4.5pc' }}>
// // //             <div className={classes.heroContent}>
// // //                 <div>
// // //                     <Typography variant="h1" className={classes.heroTitle}>
// // //                         Get Fit with My Gym
// // //                     </Typography>
// // //                     <Typography variant="h3" className={classes.heroSubtitle}>
// // //                         The Best Gym in Town
// // //                     </Typography>
// // //                 </div>
// // //             </div>
// // //             <Grid container justify="center">
// // //                 <Card className={classes.card}>
// // //                     <CardMedia
// // //                         className={classes.media}
// // //                         image="https://source.unsplash.com/collection/287876/800x600"
// // //                         title="Card Title"
// // //                     />
// // //                     <CardContent className={classes.cardContent}>
// // //                         <Typography gutterBottom variant="h5" component="h2">
// // //                             Personal Training
// // //                         </Typography>
// // //                         <Typography variant="body2" color="textSecondary" component="p">
// // //                             Our certified personal trainers will help you reach your fitness goals.
// // //                         </Typography>
// // //                     </CardContent>
// // //                 </Card>
// // //                 <Card className={classes.card}>
// // //                     <CardMedia
// // //                         className={classes.media}
// // //                         image="https://source.unsplash.com/collection/287876/800x600"
// // //                         title="Card Title"
// // //                     />
// // //                     <CardContent className={classes.cardContent}>
// // //                         <Typography gutterBottom variant="h5" component="h2">
// // //                             Group Classes
// // //                         </Typography>
// // //                         <Typography variant="body2" color="textSecondary" component="p">
// // //                             Join our fun and challenging group classes led by expert instructors.
// // //                         </Typography>
// // //                     </CardContent>
// // //                 </Card>
// // //             </Grid>
// // //         </div>
// // //     );
// // // }
// // // export default Home;


// // // import React, { useState, useEffect } from 'react';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import AppBar from '@material-ui/core/AppBar';
// // // import Toolbar from '@material-ui/core/Toolbar';
// // // import Typography from '@material-ui/core/Typography';
// // // import Button from '@material-ui/core/Button';
// // // import Card from '@material-ui/core/Card';
// // // import CardMedia from '@material-ui/core/CardMedia';
// // // import CardContent from '@material-ui/core/CardContent';
// // // import Grid from '@material-ui/core/Grid';

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

// // import img1 from '../../assets/images/image1.jpg';
// // import img2 from '../../assets/images/image2.jpg';

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
// //     const [bgImgIndex, setBgImgIndex] = useState(0);
// //     const bgImages = ['https://source.unsplash.com/collection/287876/1600x900', 'https://source.unsplash.com/collection/218650/1600x900', 'https://source.unsplash.com/collection/179527/1600x900',];

// //     useEffect(() => {
// //         const timer = setTimeout(() => {
// //             setBgImgIndex((bgImgIndex + 1) % bgImages.length);
// //         }, 5000);
// //         return () => clearTimeout(timer);
// //     }, [bgImgIndex]);

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
// //                         image={img1}
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
// //                         image={img2}
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


// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Grid from '@material-ui/core/Grid';
// import RecommendationsPopup from '../RecommentsPopup';

// import homeImg from '../../images/homeImg.jpeg';
// import img1 from '../../images/1.jpg';
// import img2 from '../../images/2.jpg';
// import img3 from '../../images/3.jpg';
// import img4 from '../../images/9.jpg';

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
//         backgroundImage: `url(${homeImg})`,
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
//     const [heroImage, setHeroImage] = useState(1);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setHeroImage((prev) => prev === 1 ? 2 : 1);
//         }, 5000);
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className={classes.root} style={{ marginTop: '4.5pc' }}>
//             <RecommendationsPopup />
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
//                         title="Personal Training"
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
//                 {/* <Card className={classes.card}>
//                     <CardMedia
//                         className={classes.media}
//                         image={img2}
//                         title="Group Classes"
//                     />
//                     <CardContent className={classes.cardContent}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Group Classes
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Join our fun and challenging group classes led by expert instructors.
//                         </Typography>
//                     </CardContent>
//                 </Card> */}
//             </Grid>
//         </div>
//     );
// }
// export default Home;    


// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import img0 from '../../images/homeImg.jpeg';
// import img1 from '../../images/1.jpg';
// import img2 from '../../images/2.jpg';
// import img3 from '../../images/3.jpg';
// import img4 from '../../images/9.jpg';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '95vh',
//     },
//     image: {
//         maxWidth: '100%',
//         maxHeight: '100%',
//         objectFit: 'contain',
//     },
// }));

// const images = [
//     img2, img3, img1, img4
// ];

// const Home = () => {
//     const classes = useStyles();
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 5000);

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className={classes.root} style={{ marginTop: '7%', marginLeft: '1%' }}>
//             {images.map((img, index) => (
//                 <img
//                     key={index}
//                     src={img}
//                     alt={`Image ${index + 1}`}
//                     className={classes.image}
//                     style={{
//                         maxWidth: '100%',
//                         maxHeight: '100%',
//                         objectFit: 'contain',
//                         width: classes.image.maxWidth,
//                         height: classes.image.maxHeight,
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import RecommendationsPopup from '../RecommentsPopup';
import ReactPlayer from 'react-player';
import StickyHeadTable from './try';
// import homeImg from '../../images/homeImg.jpeg';
// import movie from '../../images/2.mp4';
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
        // backgroundImage: `url(${homeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        // maxHeight:'10%',
        // maxWidth: '10%',
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
        // maxWidth: 500, // update the maxWidth here
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
    const classes = useStyles();
    const [heroImage, setHeroImage] = useState(1);

    useEffect(() => {
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
                // style={{ position: 'absolute' }}
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
                {/* <Card className={classes.card}>
                    <ReactPlayer
                        url={movie}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="60%"
                        height="60%"
                        style={{ position: 'absolute' }}
                    />
                </Card>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent> */}
                {/* <StickyHeadTable></StickyHeadTable> */}
            </Grid>
        </div>
    );
}
export default Home;    
