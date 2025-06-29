
import api from '@/api/axios'
import { useMutation } from '@tanstack/react-query'

export const fetchMoviesByLocalDate = async ({ sede, localDate }: { sede: string; localDate: string }) => {
  const response = await api.post('/pelicula/filtrar', { sede, localDate })
  return response.data
}

export const useSearchLocalDate = () => {
  return useMutation({
    mutationKey: ['filtrar'],
    mutationFn: fetchMoviesByLocalDate,
  })
}
