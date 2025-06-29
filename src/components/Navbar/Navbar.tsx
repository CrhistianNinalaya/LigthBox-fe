import Image from 'next/image'
import Link from 'next/link'
import AuthDropdown from '../AuthDropdown/AuthDropdown'

const Navbar = () => {
	return (
		<nav className="flex bg-primary-500 px-10">
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
				<AuthDropdown />
			</ul>
		</nav>
	)
}

export default Navbar
