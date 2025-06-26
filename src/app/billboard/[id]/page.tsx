'use client'

import { use } from 'react'
import { useFetchMovieById } from '@/hooks/useMovies.hook'
import MovieDetails from '@/views/detail/components/MovieDetail/MovieDetail'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

const Page = ({ params }: PageProps) => {
  const { id } = use(params) 
  const movieId = parseInt(id)

  if (isNaN(movieId)) return notFound()

  const { data: movie, isLoading, isError } = useFetchMovieById(movieId)

  if (isLoading) return <div className="text-center mt-10">Cargando...</div>
  if (isError || !movie) return notFound()

  return <MovieDetails movie={movie} />
}

export default Page
