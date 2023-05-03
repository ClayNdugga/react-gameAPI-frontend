import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

// import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

  const apiClient = new APIClient<Genre>("/genres");



// const useGenres = () => ({data:genres, isLoading: false, error:null})
// const useGenres = () => useData<Genre>('/genres')

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // initialData: { count: genres.length, results: genres },
  });

export default useGenres;
