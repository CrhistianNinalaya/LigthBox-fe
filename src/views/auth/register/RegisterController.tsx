'use client'
import RegisterView from './RegisterView'
import { useRegisterMutation } from '@/hooks/useRegister.hook'
import { RegisterFormSubmit } from '@/interface/Auth'
import { useAuth } from '@/Providers/AuthProvider/AuthProvider'
import { useRouter } from 'next/navigation'

const RegisterController = () => {
	const { mutate } = useRegisterMutation()
	const router = useRouter()
	const { saveUserData } = useAuth()

	const handleSubmit: RegisterFormSubmit = (values, { setSubmitting }) => {
		mutate(values, {
			onSuccess: (response) => {
				saveUserData(response?.data)
				router.push('/')
			},
			onSettled: () => {
				setSubmitting(false)
			},
		})
	}
	return <RegisterView handleSubmit={handleSubmit} />
}

export default RegisterController
