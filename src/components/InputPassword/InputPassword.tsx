import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { Field } from 'formik'
import { useState } from 'react'

interface InputPasswordProps {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	error?: string | false
}

const InputPassword = ({ value, handleChange, error }: InputPasswordProps) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<Field
			as={TextField}
			label={'Password'}
			name={'clave'}
			type={showPassword ? 'text' : 'password'}
			value={value}
			onChange={handleChange}
			error={error}
			helperText={error}
			autoComplete="current-password"
			slotProps={{
				input: {
					endAdornment: (
						<Button
							onClick={() => setShowPassword((prev) => !prev)}
							onMouseDown={(e) => e.preventDefault()}
							size="small"
							tabIndex={-1}
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</Button>
					),
				},
			}}
		/>
	)
}

export default InputPassword
