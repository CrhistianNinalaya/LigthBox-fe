'use client'
import HomeView from './HomeView'
import { useSede } from '@/hooks/useSede.hook'


const MOVIES = [
	{ link: '/assets/img/banner/banner1.jpeg' },
	{ link: '/assets/img/banner/banner2.jpg' },
	{ link: '/assets/img/banner/banner3.png' },
]

const HomeController = () => {
	const { data: sedes, isLoading } = useSede()

  if (isLoading) return <p className="text-center mt-10">Cargando sedes...</p>
  if (!sedes) return <p className="text-center mt-10 text-red-600">Error cargando sedes</p>

  return <HomeView sedes={sedes} movies={MOVIES} />
}
export default HomeController
