// hooks/useSearchLocalDate.ts
import api from '@/api/axios';
import { useMutation } from '@tanstack/react-query';

export const fetchMoviesByLocalDate = async ({sede, localDate}:{sede:string; localDate:string}) => {
  const response = await api.post('/pelicula/filtrar', {
    sede,
    localDate
  })
  return response.data;
}

export const useSearchLocalDate = (sede: string, localDate: string) => {
  const mutation = useMutation({
    mutationKey: ['filtrar', { sede, localDate }],
    mutationFn: () => fetchMoviesByLocalDate({ sede, localDate }),
  });

  return {
    data: mutation.data,
    isError: mutation.isError,
    error: mutation.error,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
  };
};








