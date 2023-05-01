// import useData from "../hooks/useData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  // const {data} = useData<Genre>('/genres') not best practice as components should not know about endpoints
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  if (error) return null;

  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Skeleton height="32px" key={skeleton} paddingY="5px" />
          ))}

        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => console.log(onSelectGenre(genre))}
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                <Text fontSize="md">{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
