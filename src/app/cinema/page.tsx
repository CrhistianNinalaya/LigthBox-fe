'use client'
import IsLoading from '@/components/IsLoading/IsLoading'
import useQueryCinema from '@/hooks/useCinema.hook'
import Image from 'next/image'
import React from 'react'

const AsientosPage = () => {
	const { data, isLoading } = useQueryCinema()

	return isLoading ? (
		<IsLoading />
	) : (
		<div className="flex flex-col items-center py-10 w-full">
			<h1 className="text-3xl font-extrabold mb-8 text-primary-500 drop-shadow">🎬 Sedes</h1>
			<div className="bg-primary-400 shadow-2xl rounded-2xl p-8 border border-primary-500">
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
					{data.map((cine: any) => (
						<li
							className="flex flex-col items-center bg-primary-500 hover:bg-primary-600 transition rounded-xl shadow p-6 "
							key={cine.idCine}
						>
							<Image
								src={'/assets/img/cinema.jpg'}
								alt={cine.sede}
								width={220}
								height={140}
								className="rounded-lg shadow-md object-cover mb-4 "
							/>
							<div className="flex-1 text-center">
								<h2 className="text-2xl font-bold text-secondary-600 mb-2">{cine.sede}</h2>
								<p className="text-text-secondary text-base font-medium mb-1">
									<span className="font-semibold text-accent-600">Dirección:</span>
									{cine.direccion}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AsientosPage
