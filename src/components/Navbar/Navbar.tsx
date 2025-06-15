import Image from 'next/image'
import Dropdown from '../Dropdown/Dropdown'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className={'flex bg-primary-500 px-10'}>
			<ul className="flex justify-between p-4 w-full items-center">
				<li>
					<Link href="/" className="flex items-center">
						<Image
							alt="logo"
							src={'/assets/svg/logo.svg'}
							className="invert"
							width={75}
							height={75}
							priority
						/>
					</Link>
				</li>
				<li>
					<Link href="/">Inicio</Link>
				</li>
				<li>
					<Link href="/billboard">Cartelera</Link>
				</li>
				<li>
					<Link href="/cinema">Cines</Link>
				</li>
				<li>
					<Link href="/candy-store">Dulcería</Link>
				</li>
				<li>
					<Dropdown>
						<li role="menuitem">
							<Link href="#" className="block px-4 py-2 hover:bg-blue-100 transition">
								Iniciar Sesión
							</Link>
						</li>
						<li role="menuitem">
							<Link href="#" className="block px-4 py-2 hover:bg-blue-100 transition">
								Registrarse
							</Link>
						</li>
					</Dropdown>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
