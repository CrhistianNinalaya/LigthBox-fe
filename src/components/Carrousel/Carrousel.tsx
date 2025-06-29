'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { MovieType } from '@/views/home/HomeView'
import type { Swiper as SwiperClass } from 'swiper'
interface CarruselProps {
	movies: MovieType[]
}
const Carrusel = ({ movies }: CarruselProps) => {
	const [current, setCurrent] = useState(0)
	const handleSlideChange = (swiper: SwiperClass) => {
		setCurrent(swiper.activeIndex)
	}

	return (
		<div className="relative w-4/5 max-w-full mx-auto">
			<Swiper
				navigation
				modules={[Navigation, Autoplay]}
				onSlideChange={handleSlideChange}
				autoplay={{ delay: 3750, disableOnInteraction: false }}
				initialSlide={current}
				loop
				className="overflow-hidden rounded-lg w-full h-[40vh] flex items-center justify-center"
			>
				{movies.map((movie, idx) => (
					<SwiperSlide key={idx}>
						<Image src={movie.link} alt={`slide-${idx}`} fill priority />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Carrusel
