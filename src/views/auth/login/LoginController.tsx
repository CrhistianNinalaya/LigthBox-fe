'use client'
import LoginView from './LoginView'
import { useLoginMutation } from '@/hooks/useLogin.hook'
import { LoginFormValues } from '@/interface/Auth'
import { useRouter } from 'next/navigation'

const LoginRegister = () => {
	const { mutate } = useLoginMutation()
	const router = useRouter()

	const handleSubmit = async (
		values: LoginFormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		mutate(values, {
			onSuccess: () => {
				router.push('/')
			},
			onSettled: () => {
				setSubmitting(false)
			},
		})
	}
	return <LoginView handleSubmit={handleSubmit} />
}

export default LoginRegister
