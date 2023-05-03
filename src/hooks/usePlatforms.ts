import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../services/api-client";
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); //? optional chaining incase of null, then params is also null

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
    // initalData: platforms
  });
  

export default usePlatforms;
