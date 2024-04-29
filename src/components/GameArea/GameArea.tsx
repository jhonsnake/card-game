import Hand from "../Hand/Hand";
import { PlayArea, HandArea } from "./GameArea.styled";
import Body from "../Body/Body";

const GameArea = () => {
  return (
    <div>
      <PlayArea>
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </PlayArea>
      <HandArea>
        <Hand />
      </HandArea>
    </div>
  );
};

export default GameArea;
