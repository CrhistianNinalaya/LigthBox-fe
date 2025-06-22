import { useQuery } from '@tanstack/react-query'
import api from '@/api/axios'

const useQueryGenres = () => {
	return useQuery({
		queryKey: ['genres'],
		queryFn: async () => {
			const response = await api.get('/genero/lista')
			return response.data
		},
		staleTime: 1000 * 60 * 5,
	})
}

export const useGenres = () => {
	const { data, isLoading, isError } = useQueryGenres()
	return {
		data,
		isLoading,
		isError,
	}
}
