import HomeView from './HomeView'

const MOCK_LOCATIONS = [
	{ id: 1, name: 'Lima Centro' },
	{ id: 2, name: 'Lima Norte' },
	{ id: 3, name: 'Lima Sur' },
]

const MOVIES = [
	{ link: '/assets/img/banner/banner1.jpeg' },
	{ link: '/assets/img/banner/banner2.jpg' },
	{ link: '/assets/img/banner/banner3.jpg' },
	{ link: '/assets/img/banner/banner4.png' },
]

const HomeController = () => {
	return <HomeView sedes={MOCK_LOCATIONS} movies={MOVIES} />
}
export default HomeController
