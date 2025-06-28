import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";

const getMovieByTitle = (title: string) =>{
    return useQuery({
        queryKey: ['title', title],
        queryFn: async () => {
            const response = await api.get(`/pelicula/search?titulo=${title}`);
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
}

export const useSearchBar = (title: string) => {
    const { data, isLoading, isError } = getMovieByTitle(title);
    return {
        data,
        isLoading,
        isError,
    };
};