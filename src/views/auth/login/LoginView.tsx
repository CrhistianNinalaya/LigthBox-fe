import { LoginViewProps } from '@/interface/Auth'
import LoginForm from './components/LoginForm/LoginForm'


const LoginView: React.FC<LoginViewProps> = ({ handleSubmit }) => {
	return <LoginForm handleSubmit={handleSubmit} />
}

export default LoginView
