'use client'
import { useState } from 'react'
import BoxMovies from '../BoxMovies/BoxMovies'
import FilterByGender from '../FilterByGender/FilterByGender'
import SearchBar from '../SearchBar/SearchBar'

const MovieSelection = () => {
	const [selectedMovieId, setSelectedMovieId] = useState<number>()
	const [selectedTitle, setSelectedTitle] = useState('')

	const wrappedSetSelectedTitle: React.Dispatch<React.SetStateAction<string>> = (value) => {
		setSelectedMovieId(undefined) 
		setSelectedTitle(value)
	}

	const wrappedSetSelectedMovieId: React.Dispatch<React.SetStateAction<number | undefined>> = (value) => {
		setSelectedTitle('') 
		setSelectedMovieId(value)
	}

	return (
		<div>
			<div>
				<SearchBar
					selectedTitle={selectedTitle}
					setSelectedTitle={wrappedSetSelectedTitle}
				/>
			</div>

			<div className="flex gap-4">
				<FilterByGender
					setSelectedMovieId={wrappedSetSelectedMovieId}
					selectedMovieId={selectedMovieId}
				/>

				<BoxMovies
					selectedMovieId={selectedMovieId}
					selectedTitle={selectedTitle}
				/>
			</div>
		</div>
	)
}

export default MovieSelection
