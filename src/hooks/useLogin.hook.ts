import api from '@/api/axios'
import { useMutation } from '@tanstack/react-query'

const fetchLogin = async ({ correo, clave }: { correo: string; clave: string }) => {
	const response = await api.post('/auth/login', { correo, clave })
	return response.data
}

export const useLoginMutation = () => {
	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: fetchLogin,
		onSuccess: (data) => {
			localStorage.setItem('user', JSON.stringify(data))
		},
	})

	return {
		data: mutation?.data,
		isError: mutation?.isError,
		error: mutation?.error,
		mutate: mutation?.mutate,
		mutateAsync: mutation?.mutateAsync,
	}
}
