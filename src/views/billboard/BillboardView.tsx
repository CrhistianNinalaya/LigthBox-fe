import BoxMovies from './components/BoxMovies/BoxMovies'
import FilterByGender from './components/FilterByGender/FilterByGender'
import SearchBar from './components/SearchBar/SearchBar'

interface BillboardViewProps {
	genres: string[]
}

const BillboardView = ({ genres }: BillboardViewProps) => {
	return (
		<div className="flex flex-col justify-center">
			<SearchBar />

			<div className="flex gap-4">
				<FilterByGender genres={genres} />
				<BoxMovies />
			</div>
		</div>
	)
}
export default BillboardView
