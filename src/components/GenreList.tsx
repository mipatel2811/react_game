import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";
import useGenre, { GenreObject } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: GenreObject) => void;
  selectedGenre: GenreObject | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, error, loading } = useGenre();

  return (
    <div>
      {loading && <Spinner />}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={
                  genre.id === selectedGenre?.id ? "bolder" : "normal"
                }
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
