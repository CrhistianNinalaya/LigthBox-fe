'use client'

import { Movie } from '@/interface/Movie'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface Props {
  movie: Movie
}

const formatearFecha = (fecha: string) => {
  return format(new Date(fecha), "dd 'de' MMMM 'de' yyyy", { locale: es })
}

const MovieDetails = ({ movie }: Props) => {
  const router = useRouter()
  const pathname = usePathname()


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg border border-gray-300 bg-white shadow-md flex flex-col md:flex-row gap-6">
      <Image
        src={movie.rutaImagen}
        alt={movie.titulo}
        width={300}
        height={400}
        className="w-full md:w-1/3 rounded object-cover"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">{movie.titulo}</h2>
          <p className="text-gray-700 mb-4">{movie.descripcion}</p>
          <p className="text-gray-600">
            <b>Fechas disponibles:</b> <br />
            {formatearFecha(movie.fechaInicioCartelera)} - {formatearFecha(movie.fechaFinCartelera)}
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <button
            className="bg-secondary-500 hover:bg-accent-700 text-black font-bold py-2 px-6 rounded"
            onClick={() => router.push(`${pathname}/movie-functions`)}
          >
            COMPRAR
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
            onClick={() => router.back()}
          >
            VOLVER
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
