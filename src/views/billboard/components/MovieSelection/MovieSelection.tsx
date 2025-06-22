'use client'
import { useState } from 'react'
import BoxMovies from '../BoxMovies/BoxMovies'
import FilterByGender from '../FilterByGender/FilterByGender'

const MovieSelection = () => {
	const [selectedMovieId, setSelectedMovieId] = useState<number>()
	return (
		<div className="flex gap-4">
			<FilterByGender setSelectedMovieId={setSelectedMovieId} selectedMovieId={selectedMovieId} />
			<BoxMovies selectedMovieId={selectedMovieId} />
		</div>
	)
}
export default MovieSelection
