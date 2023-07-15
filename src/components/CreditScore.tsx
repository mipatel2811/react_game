import { Badge } from "@chakra-ui/react";

interface Props {
  creditscore: number;
}
const CreditScore = ({ creditscore }: Props) => {
  let color = creditscore > 75 ? "green" : creditscore > 50 ? "yellow" : "red";
  return (
    <Badge paddingX="5px" borderRadius="4px" colorScheme={color}>
      {creditscore}
    </Badge>
  );
};

export default CreditScore;
