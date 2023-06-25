import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import ExcDesc from './ExerciseDescription'
import Grid from '@mui/material/Grid';

export default function ImgMediaCard(props) {

  return (
    <Grid item xs={10} sm={4} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="exercise img"
            // alt={props.img}
            height="140"
            image={props.imgPath==='1.jpg'? img1 : props.imgPath==='2.jpg'? img2: img3}//לקרא את התמונה מהשרת
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.exc}
          </Typography>
          </CardContent>
          <CardActions>
            <ExcDesc desc={props.desc}></ExcDesc>
          </CardActions>
        </Card>
    </Grid>
  );
}