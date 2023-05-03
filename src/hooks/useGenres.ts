import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

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
    staleTime: ms('24h'), //24 hours
    initialData: genres
  });

export default useGenres;
