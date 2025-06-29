'use client'
import Carrusel from '@/components/Carrousel/Carrousel'
import FilterByLocationAndDate from '@/components/FilterByLocationAndDate/FilterByLocationAndDate'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel'
import MovieCarouselPremiere from '@/components/MovieCarouselPremiere/MovieCarouselPremiere'

export type SedeType = {
  id: number
  name: string
}

export type MovieType = {
  link: string
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
        <h4 className="  font-extrabold text-[60px] leading-[1.0666] font-montserrat text-[#D6D7DA] ">Cartelera</h4>
        <MovieCarousel />
      </div>
      <div className={'px-10'}>
        <h4 className="  font-extrabold text-[60px] leading-[1.0666] font-montserrat text-[#D6D7DA] ">Estrenos</h4>
        <MovieCarouselPremiere />
      </div>
    </div>
  )
}

export default HomeView
