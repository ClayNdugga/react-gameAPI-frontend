import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000,
    // initalData: {count: platforms.length, results: platforms}
  });

export default usePlatforms;
