import { Box, SxProps, Theme } from '@mui/material'

export type FlexContainerProps = {
	sx?: SxProps<Theme>
	className?: string
	children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const FlexContainer = ({ sx, className, children, ...props }: FlexContainerProps) => {
	return (
		<Box sx={{ display: 'flex', ...sx }} className={className} {...props}>
			{children}
		</Box>
	)
}

export default FlexContainer
