import { FC } from "react";
import { Direction } from "../DatingCards/DatingCards";
import { SwipeButtonsButton, SwipeButtonsContainer } from "./styles";

import Replay from "@mui/icons-material/Replay";
import Close from "@mui/icons-material/Close";
import StarRate from "@mui/icons-material/StarRate";
import Favorite from "@mui/icons-material/Favorite";
import FlashOn from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

type Props = {
  approve: () => Promise<void>;
  reject: () => Promise<void>;
  goBack: () => Promise<void>;
  reset: () => Promise<void>;
  favorite: () => Promise<void>;
  report: () => Promise<void>;
  canSwipe: boolean;
  canGoBack: boolean;
};

export const SwipeButtons: FC<Props> = ({
  approve,
  reject,
  goBack,
  canSwipe,
  canGoBack,
  reset,
  favorite,
  report,
}) => {
  return (
    <SwipeButtonsContainer>
      <IconButton onClick={reject}>
        <Close />
      </IconButton>
      <IconButton onClick={approve}>
        <Favorite />
      </IconButton>
      <IconButton onClick={reset}>
        <Replay />
      </IconButton>
      <IconButton onClick={report}>
        <FlashOn />
      </IconButton>
      <IconButton onClick={favorite}>
        <StarRate />
      </IconButton>
      {/* <SwipeButtonsButton
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
      </SwipeButtonsButton> */}
    </SwipeButtonsContainer>
  );
};
