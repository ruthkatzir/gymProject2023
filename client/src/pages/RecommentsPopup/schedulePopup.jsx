// // // import React, { useState, useEffect } from 'react';
// // // import { makeStyles } from '@material-ui/core/styles';
// // // import { Snackbar } from '@material-ui/core';

// // // const useStyles = makeStyles((theme) => ({
// // //     root: {
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         position: 'fixed',
// // //         zIndex: 9999,
// // //     },
// // // }));

// // // const RecommendationsPopup = ({ message }) => {
// // //     const classes = useStyles();
// // //     const [open, setOpen] = useState(true);

// // //     useEffect(() => {
// // //         const timeout = setTimeout(() => {
// // //             setOpen(false);
// // //         }, 10000);

// // //         return () => {
// // //             clearTimeout(timeout);
// // //         };
// // //     }, []);

// // //     return (
// // //         <Snackbar
// // //             className={classes.root}
// // //             anchorOrigin={{
// // //                 vertical: 'top',
// // //                 horizontal: 'center',
// // //             }}
// // //             open={open}
// // //             message={message}
// // //         />
// // //     );
// // // };

// // // export default RecommendationsPopup;


// // import React, { useState, useEffect } from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import { Snackbar, Typography } from '@material-ui/core';

// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         position: 'fixed',
// //         zIndex: 9999,
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         backgroundColor: theme.palette.primary.main,
// //         color: theme.palette.primary.contrastText,
// //         padding: theme.spacing(2),
// //     },
// // }));

// // const RecommendationsPopup = () => {
// //     const classes = useStyles();
// //     const [open, setOpen] = useState(true);
// //     const [recommendations, setRecommendations] = useState('the perfect gym in town');

// //     useEffect(() => {
// //         const fetchRecommendations = async () => {
// //             const response = await fetch('https://my-api.com/recommendations');
// //             const data = await response.json();
// //             setRecommendations(data.join(', '));
// //         };

// //         fetchRecommendations();
// //     }, []);

// //     useEffect(() => {
// //         const timeout = setTimeout(() => {
// //             setOpen(false);
// //         }, 10000);

// //         return () => {
// //             clearTimeout(timeout);
// //         };
// //     }, []);

// //     return (
// //         <Snackbar style={{margin: '10%'}}
// //             className={classes.root}
// //             anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'center',
// //             }}
// //             open={open}
// //         >
// //             <Typography variant="subtitle1">
// //                 {recommendations}
// //             </Typography>
// //         </Snackbar>
// //     );
// // };

// // export default RecommendationsPopup;


// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Avatar, Snackbar, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         top: 0,
//         left: 0,
//         right: 0,
//         position: 'fixed',
//         zIndex: 9999,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: theme.palette.primary.main,
//         color: theme.palette.primary.contrastText,
//         padding: theme.spacing(2),
//     },
//     avatar: {
//         marginRight: theme.spacing(2),
//     },
// }));

// const RecommendationsPopup = () => {
//     const classes = useStyles();
//     const [open, setOpen] = useState(true);
//     const [recommendations, setRecommendations] = useState('the perfect gym in town');
//     const [recommendation, setRecommendation] = useState(null);

//     useEffect(() => {
//         const fetchRecommendations = async () => {
//             const response = await fetch('https://my-api.com/recommendations');
//             const data = await response.json();
//             setRecommendations(data);
//         };

//         fetchRecommendations();
//     }, []);

//     useEffect(() => {
//         if (recommendations.length > 0) {
//             setRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
//         }
//     }, [recommendations]);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setOpen(false);
//         }, 10000);

//         return () => {
//             clearTimeout(timeout);
//         };
//     }, []);

//     return (
//         <Snackbar
//             className={classes.root}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'center',
//             }}
//             open={open}
//         >
//             {recommendation && (
//                 <div>
//                     <Avatar className={classes.avatar} src={recommendation.profileImg} alt={recommendation.name} />
//                     <Typography variant="subtitle1">
//                         {recommendation.recommendation}
//                         {recommendations}
//                     </Typography>
//                 </div>
//             )}
//         </Snackbar>
//     );
// };

// export default RecommendationsPopup;


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Snackbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: 9999,
        top: '25%',
        left: '15%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
}));

const RecommendationsPopup = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [recommendations, setRecommendations] = useState(['the perfect gym in town af !!!!!!!!!!!!']);
    const [recommendation, setRecommendation] = useState(null);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const response = await fetch('https://my-api.com/recommendations');
            const data = await response.json();
            setRecommendations(data);
        };

        fetchRecommendations();
    }, []);

    useEffect(() => {
        if (recommendations.length > 0) {
            setRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
        }
    }, [recommendations]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false);
        }, 10000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Snackbar
            className={classes.root}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
        >
            {recommendation && (
                <div>
                    <Avatar className={classes.avatar} src={recommendation.profileImg} alt={recommendation.name} />
                    <Typography variant="subtitle1">
                        {recommendation.recommendation}
                        {recommendations}
                    </Typography>
                </div>
            )}
        </Snackbar>
    );
};

export default RecommendationsPopup;

