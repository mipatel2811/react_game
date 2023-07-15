import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import { GenreObject } from "../hooks/useGenre";
import { PlatformObject } from "../hooks/usePlatform";

interface Props {
  selectedGenre: GenreObject | null;
  selectedPlatform: string | "";
  selectedSorting: string | "";
  searchGame: string | "";
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSorting,
  searchGame,
}: Props) => {
  const { games, error, loading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSorting,
    searchGame,
    [selectedGenre, selectedPlatform, selectedSorting, searchGame]
  );

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={"20px"}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
