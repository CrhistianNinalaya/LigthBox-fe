import api from '@/api/axios'
import { useMutation } from '@tanstack/react-query'

const AxiosRegister = async (values: any) => {
	const response = await api.post('/auth/registrar', values)
	return response.data
}

export const useRegisterMutation = () => {
	const mutation = useMutation({
		mutationKey: ['register'],
		mutationFn: AxiosRegister,
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
