import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchForm";

interface Props {
  OnSearchGame: (search: string) => void;
}
const NavBar = ({ OnSearchGame }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(search) => OnSearchGame(search)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
