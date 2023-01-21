import React from 'react';
import { Grid } from '@mui/material';
import useStyle from './MovieListStyles'
import Movie from '../Movie/Movie';


const MovieList = ({ movies }) => {

   const classes = useStyle()
   console.log(movies?.results);
  return (
    <Grid container className={classes.moviesContainer}>
       {
   movies?.results?.map((movie,i)=><Movie movie={movie} i={i} key={i}/>)} 
    </Grid>
  );
};

export default MovieList;