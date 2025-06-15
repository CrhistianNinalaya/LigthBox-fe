'use client'
import { SearchBarYupSchema } from '@/schemas/searchBar.schema'
import { Formik, FormikHelpers } from 'formik'

const initialValues = {
	search: '',
}

const SearchBar = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SearchBarYupSchema}
			onSubmit={(
				values: { search: string },
				{ setSubmitting }: FormikHelpers<{ search: string }>
			) => {
				setSubmitting(false)
			}}
		>
			{({ handleSubmit, handleChange, values, isSubmitting }) => (
				<form onSubmit={handleSubmit} className="flex items-center justify-center mb-4">
					<div className="w-full flex">
						<input
							type="text"
							name="search"
							value={values.search}
							onChange={handleChange}
							placeholder={'Buscar por título'}
							className="border border-gray-300 rounded-lg p-2 w-64 bg-white text-black"
						/>
						<button
							type="submit"
							disabled={isSubmitting}
							className={`${
								isSubmitting ? 'bg-gray-600' : 'bg-secondary-500 hover:bg-secondary-600'
							} ml-2 text-black rounded-lg px-4 py-2 `}
						>
							Search
						</button>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default SearchBar
