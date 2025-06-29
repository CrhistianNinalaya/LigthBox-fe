'use client'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import { useAuth } from '@/Providers/AuthProvider/AuthProvider'

const AuthDropdown = () => {
	const { user, logout } = useAuth()
	return (
		<>
			{user ? (
				<li>
					<button
						className="block px-4 py-2 bg-secondary-500 rounded text-primary-400 hover:bg-secondary-600"
						onClick={() => {
							logout()
						}}
					>
						Cerrar Sesión
					</button>
				</li>
			) : (
				<li>
					<Dropdown>
						<li role="menuitem">
							<Link href="/auth/login" className="block px-4 py-2 hover:bg-blue-100 transition">
								Iniciar Sesión
							</Link>
						</li>
						<li role="menuitem">
							<Link href="/auth/register" className="block px-4 py-2 hover:bg-blue-100 transition">
								Registrarse
							</Link>
						</li>
					</Dropdown>
				</li>
			)}
		</>
	)
}

export default AuthDropdown
