import { UserType } from './User.type'

export type LoginFormValues = {
	correo: string
	clave: string
}
export interface LoginViewProps {
	handleSubmit: (
		values: LoginFormValues,
		{
			setSubmitting,
		}: {
			setSubmitting: (isSubmitting: boolean) => void
		}
	) => void
}

export type RegisterFormSubmit = (
	values: UserType,
	formikHelpers: { setSubmitting: (isSubmitting: boolean) => void }
) => void

export interface RegisterViewProps {
	handleSubmit: RegisterFormSubmit
}
