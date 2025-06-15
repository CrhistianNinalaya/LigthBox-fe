'use client'
import Image from 'next/image'
import { useState } from 'react'

interface FilterByGenderProps {
	genres: string[] 
}

const FilterByGender = ({genres}: FilterByGenderProps) => {
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<div className="flex gap-8">
			<div className="bg-accent-500 flex flex-col p-6 rounded-xl shadow-lg min-w-[220px]">
				<div className="flex items-center gap-2 mb-4">
					<Image
						src="/assets/svg/faFilter.svg"
						className="invert"
						alt="Filter Icon"
						width={16}
						height={16}
					/>
					<h3 className="text-lg font-bold text-accent-900">Filtrar por género</h3>
				</div>
				<ul className="flex flex-col gap-3">
					{genres?.map((genre) => (
						<li key={genre}>
							<button
								className={`w-full text-left px-4 py-2 rounded-md transition-colors font-medium ${
									selected === genre
										? 'bg-accent-700 text-white'
										: 'hover:bg-accent-600 text-accent-900'
								}`}
								onClick={() => setSelected(genre)}
							>
								{genre}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FilterByGender
