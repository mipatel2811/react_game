import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreObject } from "./hooks/useGenre";
import PlatformList from "./components/PlatformList";
import { PlatformObject } from "./hooks/usePlatform";
import GameSorting from "./components/GameSorting";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreObject | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");
  const [searchGame, setSearchGame] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar OnSearchGame={(serach) => setSearchGame(serach)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack>
          <PlatformList
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameSorting
            onSelectSorting={(sorting) => setSelectedSorting(sorting)}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedSorting={selectedSorting}
          searchGame={searchGame}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
