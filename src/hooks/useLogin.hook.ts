import api from '@/api/axios'
import { useMutation } from '@tanstack/react-query'

const fetchLogin = async ({ correo, clave }: { correo: string; clave: string }) => {
	return await api.post('/auth/login', { correo, clave })
}

export const useLoginMutation = () => {
	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: fetchLogin,
		onSuccess: (response) => {
			const token = response.headers['authorization']?.replace('Bearer ', '')
			if (token) {
				sessionStorage.setItem('authToken', token)
			}
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
