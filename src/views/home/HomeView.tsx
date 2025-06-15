import Carrusel from '@/components/Carrousel/Carrousel'
import FilterByLocationAndDate from '@/components/FilterByLocationAndDate/FilterByLocationAndDate'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type SedeType = {
	id: number
	name: string
}

export type MovieType = {
	link: string | StaticImport
}
export interface HomeProps {
	sedes: SedeType[]
	movies: MovieType[]
}

const HomeView = ({ sedes, movies }: HomeProps) => {
	return (
		<div className="w-full">
			<FilterByLocationAndDate sedes={sedes} />
			<Carrusel movies={movies} />
			<div className={'px-10'}>
				<h4 className={'text-2xl text-black'}>CARTELERA</h4>
			</div>
		</div>
	)
}

export default HomeView
