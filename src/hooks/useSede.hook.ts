// useSede.hook.ts
import { useQuery } from '@tanstack/react-query'
import api from '@/api/axios'

const getSedesList = async () => {
	const response = await api.get('/sede/lista')
	const rawSedes = response.data

	return rawSedes.map((sede: any) => ({
		id: sede.idCine,
		name: sede.sede,
	}))
}

export const useSede = () => {
	return useQuery({
		queryKey: ['sedes'],
		queryFn: getSedesList,
		staleTime: 1000 * 60 * 5,
	})
}
