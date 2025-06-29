import { Funcion } from '@/interface/Funcion'
import api from '@/api/axios'
import { useQuery } from '@tanstack/react-query'

const fetchFunciones = async (idPelicula: string) => {
	const response = await api.get(`funcion?pelicula=${idPelicula}`)
	return response.data
}

export const useFetchFunciones = (idPelicula: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['funciones', idPelicula],
		queryFn: () => fetchFunciones(idPelicula),
		staleTime: 1000 * 60 * 5,
	})

	return {
		funciones: (data as Funcion[]) || [],
		loading: isLoading,
		error: isError,
	}
}
