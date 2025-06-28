'use client'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#102E50', // valor de --primary-500
		},
		secondary: {
			main: '#F5C45E', // valor de --secondary-500
		},
		background: {
			default: '#ffffff', // valor de --background
			paper: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'Arial, Helvetica, sans-serif',
	},
}

const theme = createTheme(themeOptions)

export default theme
