import { MovieTheater } from './MovieTheater'

export interface CinemaRoom {
	idSala: number
	cine: MovieTheater
	piso: number
	enumeracion: string
	capacidadSala: number
}
