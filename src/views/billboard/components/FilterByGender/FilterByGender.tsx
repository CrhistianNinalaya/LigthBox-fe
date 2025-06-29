'use client'
import IsLoading from '@/components/IsLoading/IsLoading'
import { useGenres } from '@/hooks/useGenres.hook'
import { Genre } from '@/interface/Genre'
import Image from 'next/image'
interface FilterByGenderProps {
	selectedMovieId: number | undefined
	setSelectedMovieId: React.Dispatch<React.SetStateAction<number | undefined>>
}

const FilterByGender: React.FC<FilterByGenderProps> = ({ selectedMovieId, setSelectedMovieId }) => {
	const { data, isLoading } = useGenres()
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
				{isLoading ? (
					<IsLoading />
				) : (
					<ul className="flex flex-col gap-3">
						{data?.genero.map((genre: Genre) => (
							<li key={genre?.idGeneroPelicula}>
								<button
									type="button"
									className={`w-full text-left px-4 py-2 rounded-md font-medium cursor-pointer transition-colors hover:bg-accent-700 ${
										selectedMovieId === genre?.idGeneroPelicula ? 'bg-accent-700' : ''
									}`}
									onClick={() => setSelectedMovieId(genre?.idGeneroPelicula)}
								>
									{genre?.nombre}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default FilterByGender
