import { useQuery } from '@tanstack/react-query';
import api from '@/api/axios';

const getMoviesByLocalDate = (sede?: number, localDate?: string) => {
  return useQuery({
    queryKey: ['peliculas', { sede, localDate }],
    queryFn: async () => {
      let url = '/pelicula/filtrar';
      const params = new URLSearchParams();

      if (sede) params.append('idCine', sede.toString());
      if (localDate) params.append('fechaFin', localDate);

      const response = await api.get(`${url}?${params.toString()}`);
      return response.data;
    },
    enabled: !!sede || !!localDate, 
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchLocalDate = (sede?: number, localDate?: string) => {
  const { data, isLoading, isError } = getMoviesByLocalDate(sede, localDate);
  return {
    data,
    isLoading,
    isError,
  };
};
