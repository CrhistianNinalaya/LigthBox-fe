import api from '@/api/axios'
import { useQuery } from '@tanstack/react-query'

const useQueryCinema = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['cinemas'],
		queryFn: async () => {
			const response = await api.get('/sede/lista')
			return response.data
		},
		staleTime: 1000 * 60 * 5,
	})

	return { data, isLoading, isError }
}

export default useQueryCinema
