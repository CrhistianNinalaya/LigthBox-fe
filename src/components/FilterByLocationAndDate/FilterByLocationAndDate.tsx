'use client'
import { SedeType } from '@/views/home/HomeView'
import { Formik, Form } from 'formik'
import { useSearchLocalDate } from '@/hooks/useSearchLocalDate.hook'
import {
  Button,
  CircularProgress,
  TextField,
  MenuItem,
  Typography,
  Box,
  Paper,
} from '@mui/material'

interface FilterProps {
  sedes: SedeType[]
}

const FilterByLocationAndDate = ({ sedes }: FilterProps) => {
  const { mutateAsync, isError, error, isPending } = useSearchLocalDate()

  return (
    <Formik
      initialValues={{ sede: '', fecha: '' }}
      onSubmit={async (values) => {
        try {
          const peliculas = await mutateAsync({
            sede: values.sede,
            localDate: values.fecha,
          })
          console.log('🎬 Películas filtradas:', peliculas)
        } catch (err) {
          console.error('❌ Error al filtrar películas:', err)
        }
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <Paper
			elevation={3}
			sx={{
				p: 2,
				pl: { xs: 2, md: 24 }, 
				display: 'flex',
				gap: 2,
				alignItems: 'center',
				flexWrap: 'wrap',
				flexDirection: { xs: 'column', sm: 'row' }, 
			}}
			>
            <TextField
              select
              name="sede"
              label="Sede"
              value={values.sede}
              onChange={handleChange}
              size="small"
              sx={{ minWidth: 180 }}
            >
              <MenuItem value="">Seleccione una sede</MenuItem>
              {sedes.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              type="date"
              name="fecha"
              label="Fecha"
              value={values.fecha}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              size="small"
              sx={{ minWidth: 150 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isPending}
              size="medium"
              sx={{ height: 40 }}
            >
              {isPending ? <CircularProgress size={20} color="inherit" /> : 'Buscar'}
            </Button>
          </Paper>

          {isError && (
            <Typography color="error" mt={1} ml={4}>
              Error: {(error as Error).message}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default FilterByLocationAndDate
