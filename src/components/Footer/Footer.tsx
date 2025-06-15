import Image from 'next/image'

const socialLinks = [
	{
		href: 'https://instagram.com',
		src: '/assets/svg/instagram.svg',
		alt: 'Instagram',
	},
	{
		href: 'https://twitter.com',
		src: '/assets/svg/twitter.svg',
		alt: 'Twitter',
	},
	{
		href: 'https://youtube.com',
		src: '/assets/svg/youtube.svg',
		alt: 'YouTube',
	},
]

const Footer = () => (
	<footer className="flex flex-col bg-footer-600 pt-5 px-5">
		<div className="flex flex-col md:flex-row justify-around px-5 items-center">
			<div className="">
				<ul className="list-none">
					<li className="mb-4">
						<Image
							src={'/assets/svg/logo.svg'}
							className="invert"
							alt="logo"
							width={75}
							height={75}
						/>
					</li>
					<li className="mb-2 text-gray-400">
						Contacto: <small className="text-gray-100">(319) 555-0115</small>
					</li>
					<li className="mb-2 text-gray-400">Calle Perú 1234</li>
				</ul>
			</div>
			<div className="">
				<ul className="list-none">
					<li className="mb-4 text-gray-100">¿Quienes somos?</li>
					<li className="mb-2 text-gray-400">
						<a
							href="https://github.com/CrhistianNinalaya"
							className="flex items-center gap-2 hover:text-white transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Crhistian Daniel Ninalaya Saenz
							<Image
								src="/assets/svg/github.svg"
								alt="GitHub"
								width={20}
								height={20}
								className="invert"
							/>
						</a>
					</li>
					<li className="mb-2 text-gray-400">
						<a
							href="https://github.com/NaomiYumbato"
							className="flex items-center gap-2 hover:text-white transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Naomi Kiara Yumbato Lopez
							<Image
								src="/assets/svg/github.svg"
								alt="GitHub"
								width={20}
								height={20}
								className="invert"
							/>
						</a>
					</li>
					<li className="mb-2 text-gray-400">
						<a
							href="https://github.com/AngelNJ11"
							className="flex items-center gap-2 hover:text-white transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Angel Leonel Navarro Jimenez
							<Image
								src="/assets/svg/github.svg"
								alt="GitHub"
								width={20}
								height={20}
								className="invert"
							/>
						</a>
					</li>
				</ul>
			</div>
			<div className="">
				<ul className="list-none flex flex-col items-center">
					<li className="mb-4 text-gray-100">Libro de reclamaciones</li>
					<Image
						alt="Libro de reclamaciones"
						src={'/assets/svg/book-reclaimers.svg'}
						className="cursor-pointer hover:scale-110 transition-transform"
						width={50}
						height={50}
					/>
				</ul>
			</div>
		</div>
		<hr className="border-gray-700 my-2" />
		<div className="flex flex-col md:flex-row justify-between items-center p-4">
			<p className="mb-2 md:mb-0 text-sm">
				© {new Date().getFullYear()} LightBox. Todos los derechos reservados.
			</p>
			<div className="flex gap-4">
				{socialLinks.map(({ src, alt }) => (
					<Image key={alt} src={src} alt={alt} width={28} height={28} />
				))}
			</div>
		</div>
	</footer>
)

export default Footer
