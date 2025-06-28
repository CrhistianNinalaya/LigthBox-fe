import api from '@/api/axios'
import { useQuery } from '@tanstack/react-query'

const getSeatsUrl = (eventId: string) => {
	return `http://localhost:8080/api/asientos?funcion=${eventId}`
}

const fetchSeats = async (eventId: string) => {
	const response = await api.get(getSeatsUrl(eventId))
	return response.data
}

export const useSeatsQuery = (eventId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['seats', eventId],
		queryFn: () => fetchSeats(eventId),
		staleTime: 1000 * 60 * 5,
	})

	return { data, isLoading, isError }
}
