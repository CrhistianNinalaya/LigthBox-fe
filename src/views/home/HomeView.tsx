'use client'
import Carrusel from '@/components/Carrousel/Carrousel'
import FilterByLocationAndDate from '@/components/FilterByLocationAndDate/FilterByLocationAndDate'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel'

export type SedeType = {
  id: number
  name: string
}

export type MovieType = {
  movieId: number
  titulo: string
  imagenUrl: string
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
      <br />
      <div className={'px-10'}>
        <h4 className="text-3xl font-bold text-center text-gray-800 tracking-wide mb-6">CARTELERA</h4>
        <MovieCarousel />
      </div>
    </div>
  )
}

export default HomeView
