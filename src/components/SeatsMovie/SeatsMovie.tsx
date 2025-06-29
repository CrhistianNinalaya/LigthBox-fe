'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { SedeType } from '@/views/home/HomeView'

const ROWS = 5
const COLUMNS = 6

type Seat = {
	idAsiento: number
	idSala: number
	disponibilidad: boolean
}

interface SeatsMovieProps {
	seats: Seat[]
	setSelectedSeats: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
	selectedSeats: Record<string, boolean>
}

const getSeatLabel = (index: number) => {
	const row = Math.floor(index / COLUMNS)
	const col = index % COLUMNS
	return `${String.fromCharCode(65 + row)}${col + 1}`
}

const Legend: React.FC<{ color: string; label: string }> = ({ color, label }) => (
	<div className="flex items-center gap-2">
		<div className={`w-6 h-6 ${color} border border-gray-400 rounded`} />
		<span>{label}</span>
	</div>
)

export const SeatsMovie: React.FC<SeatsMovieProps> = ({
	seats,
	setSelectedSeats,
	selectedSeats,
}) => {
	const handleSeatClick = (seatIndex: number) => {
		const seat = seats[seatIndex]
		if (!seat?.disponibilidad) return
		setSelectedSeats((prev) => ({
			...prev,
			[seat.idAsiento]: !prev[seat.idAsiento],
		}))
	}

	const handleContinue = () => {
	const selectedLabels = Object.entries(selectedSeats)
		.filter(([_, selected]) => selected)
		.map(([seatId]) => {
			const seatIndex = seats.findIndex(
				(seat) => seat.idAsiento.toString() === seatId
			)
			return getSeatLabel(seatIndex)
		})
		.join(', ')

	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-danger',
		},
		buttonsStyling: true,
	})

	swalWithBootstrapButtons
		.fire({
			title: '¿Estás seguro de comprar estos asientos?',
			text: `Asientos seleccionados: ${selectedLabels || 'ninguno'}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sí, comprar',
			cancelButtonText: 'Cancelar',
			reverseButtons: true,
		})
		.then((result) => {
			if (result.isConfirmed) {
				swalWithBootstrapButtons.fire({
					title: '¡Confirmado!',
					text: 'Tus asientos han sido reservados.',
					icon: 'success',
				})
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				swalWithBootstrapButtons.fire({
					title: 'Cancelado',
					text: 'Tu selección no ha sido enviada.',
					icon: 'error',
				})
			}
		})
}




	return (
		<div className="flex flex-col items-center justify-center text-black w-full my-4">
			<h2 className="text-2xl font-bold my-6">Selecciona tus asientos</h2>
			<div className="bg-gray-300 p-6 rounded shadow-2xl w-full max-w-5xl gap-4 flex flex-col">
				<div className="flex flex-col gap-8 p-8">
					<div className="w-full h-4 bg-gray-400 rounded-lg flex items-center justify-center">
						<span className="text-sm text-white font-semibold">Pantalla</span>
					</div>
					{Array.from({ length: ROWS }).map((_, rowIndex) => (
						<div key={rowIndex} className="flex justify-between w-full">
							{Array.from({ length: COLUMNS }).map((_, colIndex) => {
								const seatIndex = rowIndex * COLUMNS + colIndex
								const seat = seats[seatIndex]
								const seatLabel = getSeatLabel(seatIndex)
								const isAvailable = seat?.disponibilidad
								const isSelected = seat && selectedSeats[seat.idAsiento]
								return (
									<div
										key={seatLabel}
										className={`flex items-center justify-center cursor-pointer border border-gray-400 w-14 h-10 
											${
												!isAvailable
													? 'bg-secondary-500 text-primary-400 cursor-not-allowed'
													: isSelected
													? 'bg-primary-400 hover:bg-primary-500 transition text-secondary-500'
													: 'bg-gray-400'
											}`}
										onClick={() => handleSeatClick(seatIndex)}
									>
										{seatLabel}
									</div>
								)
							})}
						</div>
					))}
				</div>
				<div className="flex gap-6 justify-center my-2">
					<Legend color="bg-primary-400" label="Seleccionado" />
					<Legend color="bg-gray-400" label="Disponible" />
					<Legend color="bg-secondary-500" label="No disponible" />
				</div>
				<div className="flex items-center gap-2 justify-between w-full">
					<div>
						Butacas Seleccionadas:
						{Object.entries(selectedSeats)
							.filter(([_, selected]) => selected)
							.map(([seatId]) => {
								const seatIndex = seats?.findIndex(
									(seat) => seat?.idAsiento?.toString() === seatId
								)
								return (
									<span key={seatId} className="ml-2 font-bold">
										{getSeatLabel(seatIndex)}
									</span>
								)
							})}
					</div>
					<button
						type="button"
						onClick={handleContinue}
						className="ml-auto px-4 py-2 bg-primary-400 rounded hover:bg-primary-500 transition text-secondary-500"
					>
						Continuar
					</button>
				</div>
			</div>
		</div>
	)
}
