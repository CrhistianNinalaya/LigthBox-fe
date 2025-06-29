import * as yup from 'yup'

export const SearchBarYupSchema = yup.object({
	search: yup.string().required('Search es requerido').default(''),
})
