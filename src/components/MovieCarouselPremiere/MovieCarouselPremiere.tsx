'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useFetchMoviePremiere } from '@/hooks/useMovies.hook'
import IsLoading from '@/components/IsLoading/IsLoading'
import { Movie } from '@/interface/Movie'
import Image from 'next/image'
import Link from 'next/link'

// Importa los estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface MovieCarouselProps {
    
}

const MovieCarousel = ({  }: MovieCarouselProps) => {
    const { data: movies, isLoading, isError } = useFetchMoviePremiere()

    if (isLoading) return <IsLoading />

    if (isError || !movies || movies.length === 0) {
        return (
            <div className="text-center text-red-500 py-4">
                No se pudieron cargar las películas.
            </div>
        )
    }

    return (
        <div className="w-full px-6 py-10">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                navigation
                pagination={{ dynamicBullets: true  }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {movies.map((movie: Movie, index: number) => (
                    <SwiperSlide  key={movie.idPelicula ?? `movie-${index}`}>
                        <Link
                            href={`/billboard/${movie.idPelicula}`}
                            className="block bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200  w-[300px] mx-auto"
                        >
                            <Image
                                width={300}
                                height={450}
                                src={movie?.rutaImagen || '/placeholder.jpg'}
                                alt={movie?.titulo ?? 'Película'}
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="p-3 text-center bg-secondary-600">
                                <h3 className="text-base font-semibold text-accent-900 text-black">
                                    {movie?.titulo}
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieCarousel
