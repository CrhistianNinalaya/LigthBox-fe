'use client'
import IsLoading from '@/components/IsLoading/IsLoading'
import { useMoviesQuery } from '@/hooks/useMovies.hook'
import { Movie } from '@/interface/Movie'
import Image from 'next/image'
import Link from 'next/link'

interface BoxMoviesProps {
	selectedMovieId: number | undefined
}

const BoxMovies: React.FC<BoxMoviesProps> = ({ selectedMovieId }) => {
	const { isLoading, data } = useMoviesQuery(selectedMovieId)

	return (
		<div className="container">
			{isLoading ? (
				<IsLoading />
			) : data && Array.isArray(data) && data.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{data?.map((pelicula: Movie) => (
						<Link
							key={pelicula.idPelicula}
							href={`/billboard/${pelicula.idPelicula}`}
							className="bg-primary-400 hover:bg-primary-500 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-200 transform hover:scale-105 max-w-[230px] mx-auto gap-4 cursor-pointer"
						>
							<Image
								width={190}
								height={250}
								src={pelicula?.rutaImagen}
								alt={pelicula?.titulo ?? 'Imagen de la película'}
								className="w-full h-auto rounded-lg mb-2 object-cover aspect-[2/3] max-h-[300px] max-w-[200px] mx-auto"
							/>
							<h3 className="text-lg font-semibold text-accent-900 text-center">
								{pelicula?.titulo}
							</h3>
						</Link>
					))}
				</div>
			) : (
				<div className='flex justify-center'>No hay películas disponibles en este momento.</div>
			)}
		</div>
	)
}

export default BoxMovies
