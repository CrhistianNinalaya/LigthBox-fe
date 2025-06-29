'use client'
import { MovieType } from '@/views/home/HomeView'
import { useState } from 'react'
import Image from 'next/image'

interface CarruselProps {
	movies: MovieType[]
}
const Carrusel = ({ movies }: CarruselProps) => {
	const [current, setCurrent] = useState(0)

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? movies.length - 1 : prev - 1))
	}

	const nextSlide = () => {
		setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1))
	}
	return (
		<div className="relative w-4/5 max-w-full mx-auto ">
			<div className="overflow-hidden rounded-lg w-4/5 h-[60vh] flex items-center justify-center">
				<Image src={movies[current].link} alt={`slide-${current}`} fill priority />
			</div>
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 rounded-full p-2 shadow"
				aria-label="Previous"
			>
				&#8592;
			</button>
			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 rounded-full p-2 shadow"
				aria-label="Next"
			>
				&#8594;
			</button>
			<div className="flex justify-center mt-2 absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
				{movies.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						className={`w-3 h-3 mx-1 rounded-full ${
							current === idx ? 'bg-blue-500' : 'bg-gray-300'
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					></button>
				))}
			</div>
		</div>
	)
}

export default Carrusel
