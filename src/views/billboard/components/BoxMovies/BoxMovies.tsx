'use client'
import IsLoading from '@/components/IsLoading/IsLoading'
import { useFetchMovies } from '@/hooks/useMovies.hook'
import { Movie } from '@/interface/Movie'
import Image from 'next/image'

interface BoxMoviesProps {
	selectedMovieId: number | undefined
}

const BoxMovies: React.FC<BoxMoviesProps> = ({ selectedMovieId }) => {
	const { isLoading, data } = useFetchMovies(selectedMovieId)
	return (
		<div className="container">
			{isLoading ? (
				<IsLoading />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{data?.map((pelicula: Movie) => (
						<div
							key={pelicula.idPelicula}
							className="bg-primary-400 hover:bg-primary-500 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-200 transform hover:scale-105 max-w-[230px] mx-auto gap-4"
						>
							<Image
								width={150}
								height={220}
								src={pelicula?.rutaImagen}
								alt={pelicula?.titulo ?? 'Imagen de la película'}
								className="object-cover h-[220px] w-[150px]"
							/>
							<h3 className="text-lg font-semibold text-accent-900">{pelicula?.titulo}</h3>
							<p className="text-sm text-accent-700">{pelicula?.descripcion}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default BoxMovies
