'use client'

import { useParams } from 'next/navigation'
import { useFetchFunciones } from '@/hooks/useFuncion.hook'
import { TablaFunciones } from '@/components/Funcion/Funcion'

export default function FuncionesPage() {
  const { id } = useParams()
  const { funciones, loading } = useFetchFunciones(id as string)

  if (loading) return <p className="text-black text-center">Cargando funciones...</p>

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-black">Funciones Disponibles</h1>
      <TablaFunciones funciones={funciones} />
    </div>
  )
}
