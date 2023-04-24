// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // // import Card from "@material-ui/core/Card";
// // import CardActionArea from "@material-ui/core/CardActionArea";
// // import CardMedia from "@material-ui/core/CardMedia";
// // import CardContent from "@material-ui/core/CardContent";
// // // import Typography from "@material-ui/core/Typography";
// // // import Grid from "@material-ui/core/Grid";
// // import ReactPlayer from 'react-player';
// // import enter from '../../images/enterAi.png';


// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         maxWidth: "100%",
// //         maxHeight: "100%",
// //     },
// //     media: {
// //         height: 250,
// //     },
// // }));
// // const WideTitle = () => {
// //     const classes = useStyles();

// //     return (
// //         <CardActionArea>
// //             <CardMedia className={classes.media} image={enter} />
// //             <CardContent></CardContent>
// //         </CardActionArea>
// //     )
// // }
// // export default WideTitle;


// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import ReactPlayer from 'react-player';
// import enter from '../../images/enterAi.png';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
//   media: {
//     height: "auto",
//     width: "100%",
//     [theme.breakpoints.up('md')]: {
//       height: 250,
//     },
//   },
// }));

// const WideTitle = () => {
//   const classes = useStyles();

//   return (
//     <CardActionArea>
//       <CardMedia className={classes.media} image={enter} />
//       <CardContent></CardContent>
//     </CardActionArea>
//   );
// };

// export default WideTitle;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from 'react-player';
import enter from '../../images/enterAi.png';

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
