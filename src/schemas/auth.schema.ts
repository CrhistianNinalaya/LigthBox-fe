import * as yup from 'yup'

export const LOGIN_SCHEMA = yup.object().shape({
	correo: yup
		.string()
		.email('Debe ser un email válido')
		.required('Email es un campo requerido')
		.max(30, 'Email no puede tener más de 30 caracteres'),
	clave: yup
		.string()
		.required('Password es un campo requerido')
		.min(8, 'Password debe tener al menos 8 caracteres')
		.max(20, 'Password no puede tener más de 20 caracteres'),
})

export const REGISTER_SCHEMA = yup.object().shape({
	primerNombre: yup
		.string()
		.required('Primer nombre es un campo requerido')
		.max(20, 'Primer nombre no puede tener más de 20 caracteres'),
	segundoNombre: yup.string().max(20, 'Segundo nombre no puede tener más de 20 caracteres'),
	primerApellido: yup
		.string()
		.required('Primer apellido es un campo requerido')
		.max(20, 'Primer apellido no puede tener más de 20 caracteres'),
	segundoApellido: yup.string().max(20, 'Segundo apellido no puede tener más de 20 caracteres'),
	dni: yup
		.string()
		.required('DNI es un campo requerido')
		.length(8, 'DNI debe tener 8 caracteres')
		.max(8, 'DNI debe tener 8 caracteres'),
	celular: yup
		.string()
		.required('Celular es un campo requerido')
		.length(9, 'Celular debe tener 9 caracteres')
		.max(9, 'Celular debe tener 9 caracteres'),
	correo: yup
		.string()
		.email('Debe ser un email válido')
		.required('Email es un campo requerido')
		.max(30, 'Email no puede tener más de 30 caracteres'),
	fechaNacimiento: yup.date().required('Fecha de nacimiento es un campo requerido'),
	usuario: yup
		.string()
		.required('Usuario es un campo requerido')
		.max(20, 'Usuario no puede tener más de 20 caracteres'),
	clave: yup
		.string()
		.required('Clave es un campo requerido')
		.min(8, 'Clave debe tener al menos 8 caracteres')
		.max(20, 'Clave no puede tener más de 20 caracteres'),
})
