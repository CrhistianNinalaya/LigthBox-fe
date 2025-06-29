'use client'

import { useEffect, useState } from 'react'
import { Funcion } from '@/interface/Funcion'

export const useFetchFunciones = (idPelicula: string) => {
  const [funciones, setFunciones] = useState<Funcion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFunciones = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/funcion?pelicula=${idPelicula}`)
        const data = await res.json()
        setFunciones(data)
      } catch (error) {
        console.error('Error al obtener funciones', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFunciones()
  }, [idPelicula])

  return { funciones, loading }
}
