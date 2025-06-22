import { useQuery } from '@tanstack/react-query';
import api from '@/api/axios';

const getMoviesUrl = (genreId?: number) =>
  genreId ? `/pelicula/genero?id=${genreId}` : '/pelicula';

const fetchMovies = async (genreId?: number) => {
  const response = await api.get(getMoviesUrl(genreId));
  return response.data;
};

export const useFetchMovies = (genreId?: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: genreId ? ['movies', genreId] : ['movies'],
    queryFn: () => fetchMovies(genreId),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isError };
};