'use client'
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'

const RegisterTabs = () => {
	const [value, setValue] = useState(0)
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}
	return (
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
	)
}
export default RegisterTabs