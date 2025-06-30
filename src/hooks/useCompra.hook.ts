import { useMutation } from '@tanstack/react-query'
import api from '@/api/axios'

const fetchCompra = async (body)=>{
  const response = await api.post('/compra',body)
  return response.data
}

export const useCompra = () =>{
  const mutation = useMutation({
    mutationKey: ['compra'],
    mutationFn: fetchCompra,

  })

  return{
    data:mutation?.data,
    mutate:mutation?.mutate
  }
}
  
