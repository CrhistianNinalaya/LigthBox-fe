import FlexContainer from '@/components/FlexContainer/FlexContainer'
import { Card } from '@mui/material'
import Image from 'next/image'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
	const NAVBAR_HEIGHT = 107 // Height of the Navbar
	const FOOTER_HEIGHT = 252 // Height of the Footer
	return (
		<FlexContainer
			className={' justify-center items-center  p-4 '}
			style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px - ${FOOTER_HEIGHT}px)` }}
		>
			<Card sx={{ boxShadow: 3 }} className={'w-full max-w-sm px-4 sm:px-0 h-fit'}>
				<FlexContainer className={'h-fit items-center justify-center sm:px-4'}>
					<Image src="/assets/svg/logo.svg" alt="LightBox Logo" width={175} height={175} />
				</FlexContainer>
				{children}
			</Card>
		</FlexContainer>
	)
}
export default LayoutAuth
