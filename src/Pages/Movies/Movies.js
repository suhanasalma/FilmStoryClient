import React,{useEffect,useState} from 'react';
import { useGetPopularMoviesQuery } from "../../Redux/Services/TMDB";
import {Box,CircularProgress,useMediaQuery,Typography} from '@mui/material';
import {useSelectior} from 'react-redux'
import MovieList from './MovieList/MovieList';


const Movies = () => {
    const {data,error,isFetching} = useGetPopularMoviesQuery();

    if(isFetching){
      return (
         <Box display='flex' justifyContent = "center">
            <CircularProgress size='4rem'/>
         </Box>
      )
    }
    if(!data.results.length){
      return (
         <Box display='flex' alignItems= "center" mt='20px'>
            <Typography varient='h4'>No Movies that match that name <br /> Please search for something else</Typography>
         </Box>
      )
    }

    if(error){
      return 'An error has occured'
    }
   
   return (
      <div>
         <MovieList movies={data}/>
      </div>
   );
};

export default Movies;