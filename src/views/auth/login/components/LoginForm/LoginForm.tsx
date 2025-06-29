'use client'
import FlexContainer from '@/components/FlexContainer/FlexContainer'
import InputPassword from '@/components/InputPassword/InputPassword'
import { LoginFormValues, LoginViewProps } from '@/interface/Auth'
import { LOGIN_SCHEMA } from '@/schemas/auth.schema'
import { Button, CircularProgress, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'

export const loginFormInitialValues: LoginFormValues = {
	correo: '',
	clave: '',
}

const LoginForm: React.FC<LoginViewProps> = ({ handleSubmit }) => {
	return (
		<Formik
			initialValues={loginFormInitialValues}
			validationSchema={LOGIN_SCHEMA}
			onSubmit={handleSubmit}
		>
			{({ values, handleChange, errors, touched, isSubmitting }) => (
				<Form>
					<FlexContainer className={'flex-col p-5 gap-4'}>
						<Field
							as={TextField}
							label={'Email'}
							name={'correo'}
							value={values?.correo}
							onChange={handleChange}
							error={touched?.correo && !!errors?.correo}
							helperText={touched?.correo && errors?.correo}
							autoComplete="current-email"
						/>
						<InputPassword
							value={values?.clave}
							handleChange={handleChange}
							error={touched?.clave && errors?.clave}
						/>
						<Button
							variant="contained"
							sx={{ borderRadius: '12px', mt: 2 }}
							type="submit"
							startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
							disabled={isSubmitting}
						>
							Iniciar sesión
						</Button>
					</FlexContainer>
				</Form>
			)}
		</Formik>
	)
}

export default LoginForm
