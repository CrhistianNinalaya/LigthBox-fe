import { AuthProvider } from './AuthProvider/AuthProvider'
import MuiProvider from './MUI/MuiProvider'
import { TanstackQueryProvider } from './TanstackQuery/TanstackProvider'

const CustomProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<MuiProvider>
				<TanstackQueryProvider>{children}</TanstackQueryProvider>
			</MuiProvider>
		</AuthProvider>
	)
}

export default CustomProviders
