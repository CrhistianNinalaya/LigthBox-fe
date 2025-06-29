import { Tab, Tabs } from '@mui/material'
import RegisterForm from './components/RegisterForm.tsx/RegisterForm'
import { useState } from 'react'
import { RegisterViewProps } from '@/interface/Auth'

const RegisterView: React.FC<RegisterViewProps> = ({ handleSubmit }) => {
	const [value, setValue] = useState(0)
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}
	return (
		<>
			<Tabs
				value={value}
				variant="fullWidth"
				sx={{
					minHeight: '10px',
					height: '10px',
					'& .MuiTabs-flexContainer': { minHeight: '10px', height: '10px' },
				}}
				onChange={handleChange}
			>
				<Tab sx={{ height: '10px', padding: 0 }} />
				<Tab sx={{ height: '10px', padding: 0 }} />
			</Tabs>
			<RegisterForm tabValue={value} setTabValue={setValue} handleSubmit={handleSubmit} />
		</>
	)
}
export default RegisterView
