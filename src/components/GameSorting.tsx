import { Box, Select } from "@chakra-ui/react";

interface Props {
  onSelectSorting: (sort: string) => void;
}
const GameSorting = ({ onSelectSorting }: Props) => {
  return (
    <div>
      <Box w="200px">
        <Select
          placeholder="Sort By"
          onChange={(e) => onSelectSorting(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="released">Released</option>
          <option value="added">Date Added</option>
          <option value="added">Average Rating</option>
        </Select>
      </Box>
    </div>
  );
};

export default GameSorting;
