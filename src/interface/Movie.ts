import { CinemaRoom } from './CinemaRoom'
import { Genre } from './Genre'

export interface Movie {
	idPelicula: number
	sala: CinemaRoom
	titulo: string
	descripcion: string
	genero: Genre
	duracion: number
	fechaInicioCartelera: string
	fechaFinCartelera: string
	rutaImagen: string
}
