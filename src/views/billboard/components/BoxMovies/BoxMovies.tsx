const BoxMovies = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
			{Array.from({ length: 12 }).map((_, index) => (
				<div
					key={index}
					className="bg-primary-400 hover:bg-primary-500 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-200 transform hover:scale-105"
				>
					<div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
					<h3 className="text-lg font-semibold text-accent-900 mb-2">Movie Title {index + 1}</h3>
					<p className="text-sm text-accent-700">Description of the movie goes here.</p>
				</div>
			))}
		</div>
	)
}

export default BoxMovies
