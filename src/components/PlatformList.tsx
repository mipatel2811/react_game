import { Select, Box, Spinner } from "@chakra-ui/react";
import usePlateform, { PlatformObject } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms, error, loading } = usePlateform();
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Box w="200px">
          <Select
            onChange={(e) => onSelectPlatform(e.target.value)}
            placeholder="Select Platform"
          >
            {platforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </div>
  );
};

export default PlatformList;
