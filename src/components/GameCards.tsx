import React from "react";
import { GameObject } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlateformIconsList from "./PlateformIconsList";
import getCroppedImage from "../services/image-url";
import placeholderImage from "../assets/no-image.webp";
import CreditScore from "./CreditScore";
interface Props {
  game: GameObject;
}

const GameCards = ({ game }: Props) => {
  let bgimage =
    game.background_image == null
      ? placeholderImage
      : getCroppedImage(game.background_image);
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={bgimage} />
      <CardBody>
        <Heading as={"h3"} fontSize={"2xl"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlateformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore creditscore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
