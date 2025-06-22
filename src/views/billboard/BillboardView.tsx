import MovieSelection from './components/MovieSelection/MovieSelection'
import SearchBar from './components/SearchBar/SearchBar'

const BillboardView = () => {
	return (
		<div className="flex flex-col justify-center">
			<SearchBar />

			<MovieSelection />
		</div>
	)
}
export default BillboardView
