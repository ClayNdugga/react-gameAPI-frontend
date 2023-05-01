// import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();
    // const {data} = useData<Genre>('/genres') not best practice as components should not know about endpoints

  return (
    <>
    {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </>
  );
};

export default GenreList;
