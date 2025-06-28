import MuiProvider from './MUI/MuiProvider'
import { TanstackQueryProvider } from './TanstackQuery/TanstackProvider'

const CustomProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<MuiProvider>
			<TanstackQueryProvider>{children}</TanstackQueryProvider>
		</MuiProvider>
	)
}

export default CustomProviders
