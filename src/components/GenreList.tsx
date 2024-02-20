import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  function getCroppedImageUrl(image_background: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
