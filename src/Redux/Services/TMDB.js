import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
console.log(tmdbApiKey);
const page = 1;

// api: https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //get movies by [type]
    getPopularMovies: builder.query({
      query: () => ({
        url: `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery } = tmdbApi;
