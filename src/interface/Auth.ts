export type LoginFormValues = {
	correo: string
	clave: string
}
export interface LoginViewProps {
	handleSubmit: (
		values: LoginFormValues,
		helpers: { setSubmitting: (isSubmitting: boolean) => void }
	) => Promise<void>
}

export type RegisterFormSubmit = (
	values: RegisterFormValues,
	formikHelpers: { setSubmitting: (isSubmitting: boolean) => void }
) => void

export interface RegisterViewProps {
	handleSubmit: RegisterFormSubmit
}
export type RegisterFormValues = {
	primerNombre: string
	segundoNombre: string
	primerApellido: string
	segundoApellido: string
	dni: string
	celular: string
	correo: string
	fechaNacimiento: string
	usuario: string
	clave: string
}
