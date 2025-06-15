'use client'
import { ReactNode, useState } from 'react'

interface DropdownProps {
	children: ReactNode
}

const Dropdown = ({ children }: DropdownProps) => {
	const [open, setOpen] = useState(false)

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button
				className={'px-4 py-2 bg-secondary-500 text-black rounded hover:bg-secondary-600 transition'}
				aria-haspopup="true"
				aria-expanded={open}
			>
				Socio
			</button>
			{open && (
				<ul
					className={'absolute right-0 w-40 text-black bg-white border rounded shadow-lg z-10'}
					role="menu"
				>
					{children}
				</ul>
			)}
		</div>
	)
}

export default Dropdown
