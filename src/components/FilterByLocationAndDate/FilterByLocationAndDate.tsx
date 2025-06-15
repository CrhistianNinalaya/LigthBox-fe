'use client'
import { SedeType } from '@/views/home/HomeView'
import { Formik, Form, Field } from 'formik'

interface FilterProps {
	sedes: SedeType[]
}

const FilterByLocationAndDate = ({ sedes }: FilterProps) => {
	return (
		<Formik
			initialValues={{ sede: '', fecha: '' }}
			onSubmit={(values) => {
				console.log(values)
			}}
		>
			{() => (
				<Form>
					<div className="flex bg-primary-400 p-4 shadow-md gap-4 items-center">
						<div className="flex flex-col">
							<label htmlFor="sede" className="text-sm font-semibold mb-2">
								Sede
							</label>
							<Field
								as="select"
								id="sede"
								name="sede"
								className="w-full border text-black bg-white border-gray-300 rounded-md px-3 py-2"
							>
								<option value="">Seleccione una sede</option>
								{sedes.map((s) => (
									<option key={s.id} value={s.id}>
										{s.name}
									</option>
								))}
							</Field>
						</div>
						<div className="flex flex-col">
							<label htmlFor="fecha" className="text-sm font-semibold mb-2">
								Fecha
							</label>
							<Field
								type="date"
								id="fecha"
								name="fecha"
								className="w-full border text-black bg-white border-gray-300 rounded-md px-3 py-2"
							/>
						</div>
						<div className="flex">
							<button
								type="submit"
								className="bg-accent-500 text-white px-6 py-2 mt-6 rounded-md shadow hover:bg-primary-700 transition"
							>
								Buscar
							</button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default FilterByLocationAndDate
