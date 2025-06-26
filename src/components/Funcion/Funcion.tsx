'use client'

import { Funcion } from '@/interface/Funcion'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

interface Props {
  funciones: Funcion[]
}

export const TablaFunciones = ({ funciones }: Props) => {
  const router = useRouter()

  const handleSeleccionar = (idFuncion: number) => {
    router.push(`/asientos/${idFuncion}`)
  }

  const formatearFechaHora = (fecha: string) => {
    return format(new Date(fecha), 'dd/MM/yyyy HH:mm')
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-300">
      <table className="min-w-full bg-white text-center text-black">
        <thead>
          <tr className="bg-zinc-900 text-white">
            <th className="py-3 px-6">Inicio</th>
            <th className="py-3 px-6">Fin</th>
            <th className="py-3 px-6">Cine</th>
            <th className="py-3 px-6">Sala</th>
            <th className="py-3 px-6">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {funciones.length === 0 ? (
            <tr className="bg-white-400">
              <td colSpan={5} className="py-4 px-6 text-black font-semibold">
                No hay funciones disponibles para esta película.
              </td>
            </tr>
          ) : (
            funciones.map((f) => (
              <tr key={f.idFuncion} className="border-t border-gray-200">
                <td className="py-3 px-6">{formatearFechaHora(f.inicioFuncion)}</td>
                <td className="py-3 px-6">{formatearFechaHora(f.finFuncion)}</td>
                <td className="py-3 px-6">{f.sala?.cine?.sede || 'Cine desconocido'}</td>
                <td className="py-3 px-6">{f.sala?.enumeracion || 'N/A'}</td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleSeleccionar(f.idFuncion)}
                    className="bg-secondary-500 hover:bg-accent-700 text-black font-semibold py-2 px-4 rounded"
                  >
                    Seleccionar Asientos
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
