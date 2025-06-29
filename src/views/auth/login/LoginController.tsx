'use client'
import LoginView from './LoginView'
import { useLoginMutation } from '@/hooks/useLogin.hook'
import { LoginFormValues } from '@/interface/Auth'
import { useAuth } from '@/Providers/AuthProvider/AuthProvider'
import { useRouter } from 'next/navigation'

const LoginController = () => {
	const { mutate } = useLoginMutation()
	const router = useRouter()
	const { saveUserData } = useAuth()

	const handleSubmit = (
		values: LoginFormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		mutate(values, {
			onSuccess: (response) => {
				saveUserData(response)
				router.push('/')
			},
			onSettled: () => {
				setSubmitting(false)
			},
		})
	}
	return <LoginView handleSubmit={handleSubmit} />
}

export default LoginController
