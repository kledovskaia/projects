import { FC } from "react";
import { Direction } from "../DatingCards/DatingCards";
import { LastDirectionTitle } from "./styles";

type Props = {
  lastDirection?: Direction;
};

export const LastDirection: FC<Props> = ({ lastDirection }) => {
  return (
    <>
      <LastDirectionTitle>
        {lastDirection ? `You swiped ${lastDirection}` : <>&nbsp;</>}
      </LastDirectionTitle>
    </>
  );
};
