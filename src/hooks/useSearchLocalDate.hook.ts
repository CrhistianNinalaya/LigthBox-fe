
import api from '@/api/axios'
import { useMutation } from '@tanstack/react-query'

export const fetchMoviesByLocalDate = async ({
  sede,
  localDate,
}: {
  sede: string
  localDate: string
}) => {
  const payload = {
    idSede: sede === '' ? null : parseInt(sede),
    fecha: localDate === '' ? null : localDate,
  }

  const response = await api.post('/pelicula/filtrar', payload)
  return response.data
}

export const useSearchLocalDate = () => {
  return useMutation({
    mutationKey: ['filtrar'],
    mutationFn: fetchMoviesByLocalDate,
  })
}
