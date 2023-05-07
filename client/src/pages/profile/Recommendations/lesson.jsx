import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './../../../images/1.jpg' 
import Grid from '@mui/material/Grid';        

export default function ImgMediaCard() {
  return (
    <Grid item  xs={10} sm={4} md={5}>
   <Card    sx={{maxWidth: 345 , height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Zubma
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">or the lesson times</Button>
      </CardActions>
    </Card></Grid>
  );
}