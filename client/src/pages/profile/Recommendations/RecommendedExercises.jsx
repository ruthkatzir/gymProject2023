import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from './../../../images/2.jpg'
import ExcDesc from './ExerciseDescription'
import Grid from '@mui/material/Grid';

export default function ImgMediaCard(props) {

  return (
    <Grid item xs={10} sm={4} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
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