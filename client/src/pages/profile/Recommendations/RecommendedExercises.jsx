import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './../../../images/2.jpg'
import ExcDesc from './ExerciseDescription'
import Grid from '@mui/material/Grid';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/authContext';
// import axios from 'axios';
import { useSlotProps } from '@mui/base';
//localhost:3600/api/recommendations/Abdominals

export default function ImgMediaCard(props) {

  return (
    <Grid item xs={10} sm={4} md={5}>
      {/* {recommendationsExc.forEach(e => { */}
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
      {/* })} */}
    </Grid>
  );
}