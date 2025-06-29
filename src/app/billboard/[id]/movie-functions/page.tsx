'use client'
import { TablaFunciones } from '@/components/Funcion/Funcion'
import IsLoading from '@/components/IsLoading/IsLoading'
import { useFetchFunciones } from '@/hooks/useFuncion.hook'
import { usePathname } from 'next/navigation'

const FuncionesPageList = () => {
	const route = usePathname()
	const idPelicula = route.split('/')[2]

	const { funciones, loading } = useFetchFunciones(idPelicula as string)

	return (
		<>
			{loading ? (
				<IsLoading />
			) : (
				<div className="max-w-7xl mx-auto p-6 space-y-6">
					<h1 className="text-3xl font-bold text-center text-black">Funciones Disponibles</h1>
					<TablaFunciones funciones={funciones} />
				</div>
			)}
		</>
	)
}

export default FuncionesPageList
