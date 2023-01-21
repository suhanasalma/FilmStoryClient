import React from 'react';
import { Typography, Grid,Grow,Tooltip,Rating } from '@mui/material';
import useStyle from './movieStyles'

const Movie = ({ movie ,i}) => {
   console.log(movie)
   const { vote_average, title } = movie;
   const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
    </Grid>
  );
};

export default Movie;