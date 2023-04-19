// // import * as React from 'react';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';




// // export default function ImgMediaCard(props) {
// //   return (
// //     <Card sx={{ maxWidth: 345 }}>
// //       <CardMedia
// //         component="img"
// //         alt="green iguana"
// //         height="140"
// //         image='F:\project\GymProject\client\src\images\3.jpg'
// //       />
// //       <CardContent>
// //         <Typography gutterBottom variant="h5" component="div">
// //           {/*   ///props.name */}
// //           Zomba
// //         </Typography>
// //         <Typography variant="body2" color="text.secondary">
// //             props.description
// //         </Typography>
// //       </CardContent>
 
// //     </Card>
// //   );
// // }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import img1 from    '../../images/1.jpg';
//import img2 from '../../images/2.jpg';
import img from './1.jpg'//';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CardActions from '@mui/material/CardActions';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ActionAreaCard() {
  return (<Grid item  xs={12} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={img}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Zomba
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">for lesson times</Button>
        {/* <Button size="small">Edit</Button> */}
      </CardActions>
    </Card>
  </Grid>
  
  
  
  
  
  
  
  
  
  
  
    //   <Grid item  xs={12} sm={6} md={4}>
  //  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
  //     {/* <CardActionArea> */}
  //     {/* <CardMedia
  //                   component="img"
  //                    height="300"
  //                   // width="10"
  //                   //src={'./1.jpg'}
  //                    image={img}
  //                   //'https://www.nofshonit-club.co.il/files//%D7%97%D7%93%D7%A8%20%D7%9B%D7%95%D7%A9%D7%A8/%D7%97%D7%93%D7%A8_%D7%9B%D7%95%D7%A9%D7%A8_%D7%91%D7%97%D7%95%D7%9C%D7%95%D7%9F_2.jpg'
  //                   alt="GFG Logo"
  //               /> */}
      
      
  //     {/* <Grid item key={card} xs={12} sm={6} md={4}>
  //               <Card
  //                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  //               > */}
  //                 <CardMedia
  //                   component="img"
  //                   sx={{
  //                     // 16:9
  //                     pt: '56.25%',
  //                   }}
  //                   image="https://source.unsplash.com/random"
  //                   alt="random"
  //                 />
  //                 <CardContent sx={{ flexGrow: 1 }}>
  //                   <Typography gutterBottom variant="h5" component="h2">
  //                     Heading
  //                   </Typography>
  //                   <Typography>
  //                     This is a media card. You can use this section to describe the
  //                     content.
  //                   </Typography>
  //                 </CardContent>
  //                 <CardActions>
  //                   <Button size="small">for the lesson times</Button>
  //                   {/* <Button size="small">Edit</Button> */}
  //                 {/* </CardActions> */}
  //                 </CardContent>
  //               </Card>
  //                </Grid>
  //     // </CardActionArea>
      
  //   //     <CardMedia
  //   //       component="img"
  //   //       sx={{
  //   //         // 16:9
  //   //         pt: '56.25%',
  //   //       }}
  //   //       image= {img}
  //   //       alt="green iguana"//alt="random"
  //   //     />
  //   //     <CardContent>
  //   //       <Typography gutterBottom variant="h5" component="div">
  //   //         Zomba
  //   //       </Typography>
  //   //       <Typography variant="body2" color="text.secondary">
  //   //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //   //         species, ranging across all continents except Antarctica
  //   //       </Typography>
       
  //   // </Card>
    
  );
}
