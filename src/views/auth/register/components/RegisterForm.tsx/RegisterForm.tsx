import FlexContainer from '@/components/FlexContainer/FlexContainer'
import InputPassword from '@/components/InputPassword/InputPassword'
import { RegisterFormValues, RegisterViewProps } from '@/interface/Auth'
import { REGISTER_SCHEMA } from '@/schemas/auth.schema'
import { Button, CircularProgress, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'

const initialValues: RegisterFormValues = {
	primerNombre: '',
	segundoNombre: '',
	primerApellido: '',
	segundoApellido: '',
	dni: '',
	celular: '',
	correo: '',
	fechaNacimiento: '',
	usuario: '',
	clave: '',
}

interface RegisterFormProps extends RegisterViewProps {
	tabValue: number
	setTabValue: (value: number) => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ tabValue, setTabValue, handleSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={REGISTER_SCHEMA}
			onSubmit={handleSubmit}
		>
			{({ values, handleChange, errors, touched, isSubmitting, setFieldValue }) => (
				<Form>
					{tabValue === 0 && (
						<FlexContainer className={'flex-col p-5 gap-2'}>
							<Field
								as={TextField}
								label="Primer Nombre"
								name="primerNombre"
								value={values.primerNombre}
								onChange={handleChange}
								error={touched.primerNombre && errors.primerNombre}
								helperText={touched.primerNombre && errors.primerNombre}
								autoComplete="first-name"
							/>
							<Field
								as={TextField}
								label="Segundo Nombre"
								name="segundoNombre"
								value={values.segundoNombre}
								onChange={handleChange}
								error={touched.segundoNombre && errors.segundoNombre}
								helperText={touched.segundoNombre && errors.segundoNombre}
								autoComplete="additional-name"
							/>
							<Field
								as={TextField}
								label="Primer Apellido"
								name="primerApellido"
								value={values.primerApellido}
								onChange={handleChange}
								error={touched.primerApellido && errors.primerApellido}
								helperText={touched.primerApellido && errors.primerApellido}
								autoComplete="last-name"
							/>
							<Field
								as={TextField}
								label="Segundo Apellido"
								name="segundoApellido"
								value={values.segundoApellido}
								onChange={handleChange}
								error={touched.segundoApellido && errors.segundoApellido}
								helperText={touched.segundoApellido && errors.segundoApellido}
								autoComplete="secondary-last-name"
							/>
							<Field
								as={TextField}
								label="DNI"
								name="dni"
								value={values.dni}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									const onlyNumbers = e.target.value.replace(/[^0-9]/g, '').slice(0, 8)
									setFieldValue('dni', onlyNumbers)
								}}
								error={touched.dni && errors.dni}
								helperText={touched.dni && errors.dni}
								autoComplete="national-id"
							/>
							<Button
								variant="contained"
								sx={{ borderRadius: '12px', mt: 2 }}
								onClick={() => {
									setTabValue(1)
								}}
								type="button"
							>
								Siguiente
							</Button>
						</FlexContainer>
					)}
					{tabValue === 1 && (
						<FlexContainer className={'flex-col p-5 gap-2'}>
							<Field
								as={TextField}
								label="Celular"
								name="celular"
								value={values.celular}
								onChange={handleChange}
								error={touched.celular && errors.celular}
								helperText={touched.celular && errors.celular}
								autoComplete="tel"
							/>
							<Field
								as={TextField}
								label="Correo"
								name="correo"
								value={values.correo}
								onChange={handleChange}
								error={touched.correo && errors.correo}
								helperText={touched.correo && errors.correo}
								autoComplete="email"
							/>
							<Field
								as={TextField}
								label="Fecha de Nacimiento"
								name="fechaNacimiento"
								type="date"
								value={values.fechaNacimiento}
								onChange={handleChange}
								error={touched.fechaNacimiento && errors.fechaNacimiento}
								helperText={touched.fechaNacimiento && errors.fechaNacimiento}
								slotProps={{ inputLabel: { shrink: true } }}
								autoComplete="birthdate"
							/>
							<Field
								as={TextField}
								label="Usuario"
								name="usuario"
								value={values.usuario}
								onChange={handleChange}
								error={touched.usuario && errors.usuario}
								helperText={touched.usuario && errors.usuario}
								autoComplete="username"
							/>
							<InputPassword
								value={values.clave}
								handleChange={handleChange}
								error={touched.clave && errors.clave}
							/>
							<Button
								variant="contained"
								sx={{ borderRadius: '12px', mt: 2 }}
								type="submit"
								startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
								disabled={isSubmitting}
							>
								Registrarse
							</Button>
						</FlexContainer>
					)}
				</Form>
			)}
		</Formik>
	)
}
export default RegisterForm
