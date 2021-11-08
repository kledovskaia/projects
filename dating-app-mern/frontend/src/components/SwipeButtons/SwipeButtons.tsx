import { FC } from "react";
import { Direction } from "../DatingCards/DatingCards";
import { SwipeButtonsButton, SwipeButtonsContainer } from "./styles";

type Props = {
  swipe: (dir: Direction) => Promise<void>;
  goBack: () => Promise<void>;
  canSwipe: boolean;
  canGoBack: boolean;
};

export const SwipeButtons: FC<Props> = ({
  swipe,
  goBack,
  canSwipe,
  canGoBack,
}) => {
  return (
    <SwipeButtonsContainer>
      <SwipeButtonsButton
        // @ts-ignore
        style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
        onClick={() => swipe("left")}
      >
        Swipe left!
      </SwipeButtonsButton>
      <SwipeButtonsButton
        // @ts-ignore
        style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
        onClick={() => goBack()}
      >
        Undo swipe!
      </SwipeButtonsButton>
      <SwipeButtonsButton
        // @ts-ignore
        style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
        onClick={() => swipe("right")}
      >
        Swipe right!
      </SwipeButtonsButton>
    </SwipeButtonsContainer>
  );
};
