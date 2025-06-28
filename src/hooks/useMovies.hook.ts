'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/api/axios';

const getMoviesUrl = (genreId?: number) =>
  genreId ? `/pelicula/genero?id=${genreId}` : '/pelicula/cartelera';

const fetchMovies = async (genreId?: number) => {
  const response = await api.get(getMoviesUrl(genreId));
  return response.data;
};

export const useMoviesQuery = (genreId?: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: genreId ? ['movies', genreId] : ['movies'],
    queryFn: () => fetchMovies(genreId),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isError };
};


//funcion de obtener una pelicula por id
const getMovieId = (movieId?: number) =>
  movieId ? `/pelicula/detalle?id=${movieId}` : '/pelicula/detalle';

const fetchMovieById = async (movieId?: number) => {
  const response = await api.get(getMovieId(movieId));
  return response.data;
}

export const useFetchMovieById = (movieId: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: movieId ? ['movie', movieId] : ['movie'],
    queryFn: () => fetchMovieById(movieId),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isError };
}


