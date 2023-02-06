import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
console.log(tmdbApiKey);
const page = 1;

// genre/movie/list?api_key=${tmdbApiKey}

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //get genres
    getGenres: builder.query({
      query: () => ({
        url: `genre/movie/list?api_key=${tmdbApiKey}`,
      }),
    }),
    //get movies by [popular]
    getPopularMovies: builder.query({
      query: () => ({
        url: `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery,useGetGenresQuery } = tmdbApi;
