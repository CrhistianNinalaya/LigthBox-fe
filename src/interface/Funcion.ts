import { Movie } from "./Movie"
import { Sala } from "./Sala"

export interface Funcion {
	idFuncion: number
    sala: Sala
    pelicula: Movie
    precio: number
    inicioFuncion: string 
	finFuncion: string 
}