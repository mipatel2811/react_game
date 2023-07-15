import {
  FaWindows,
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { GamePlateform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: GamePlateform[];
}

const PlateformIconsList = ({ platforms }: Props) => {
  const IconMapping: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
    linux: FaLinux,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={IconMapping[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlateformIconsList;
