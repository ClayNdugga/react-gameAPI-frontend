import useData from "./useData";
import { Platform } from "./useGames";


const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); //? optional chaining incase of null, then params is also null

export default usePlatforms;
