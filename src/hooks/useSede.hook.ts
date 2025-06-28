// useSede.hook.ts
import { useQuery } from '@tanstack/react-query'
import api from '@/api/axios'

const getSedesList = async () => {
	const response = await api.get('/sede/lista')
	return response.data
}

export const useSede = () => {
	return useQuery({
		queryKey: ['sedes'],
		queryFn: getSedesList,
		staleTime: 1000 * 60 * 5,
	})
}
