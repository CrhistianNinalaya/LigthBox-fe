import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:8080/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})
api.interceptors.response.use(
	(response) => {
		const authHeader = response.headers['authorization']
		if (authHeader && authHeader.startsWith('Bearer ')) {
			const token = authHeader.replace('Bearer ', '')
			sessionStorage.setItem('authToken', token)
		}

		return response
	},
	(error) => Promise.reject(error)
)

api.interceptors.request.use((config) => {
	const token = sessionStorage.getItem('authToken')
	if (token && config.url?.includes('/compra')) {
		config.headers['Authorization'] = `Bearer ${token}`
	}
	return config
})

export default api
