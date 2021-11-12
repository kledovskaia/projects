import React, { useState, useMemo, useRef, RefObject } from "react";
import TinderCard from "react-tinder-card";
import { LastDirection } from "../LastDirection/LastDirection";
import { SwipeButtons } from "../SwipeButtons/SwipeButtons";
import {
  DatingCardsContainer,
  DatingCardsInnerContainer,
  DatingCardsPerson,
  DatingCardsPersonName,
} from "./styles";

const db = [
  {
    name: "Random Guy",
    imgUrl:
      "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
  },
  {
    name: "Another Guy",
    imgUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Random Girl",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Another Girl",
    imgUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

export type Direction = "left" | "right" | "up" | "down";

type ChildRef = {
  swipe(dir?: Direction): Promise<void>;
  restoreCard(): Promise<void>;
};

export const DatingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState<Direction>();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo<RefObject<ChildRef>[]>(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (
    direction: Direction,
    nameToDelete: string,
    index: number
  ) => {
    if (direction === "up" || direction === "down") return;
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current?.restoreCard();
  };

  const swipe = async (dir: Direction) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current?.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  const approve = async () => {
    await swipe("left");
  };
  const reject = async () => {
    await swipe("right");
  };
  const favorite = async () => {};
  const report = async () => {};

  return (
    <DatingCardsContainer>
      <DatingCardsInnerContainer>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="datingCard"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            preventSwipe={["up", "down"]}
          >
            <DatingCardsPerson
              style={{ backgroundImage: "url(" + character.imgUrl + ")" }}
            >
              <DatingCardsPersonName>{character.name}</DatingCardsPersonName>
            </DatingCardsPerson>
          </TinderCard>
        ))}
      </DatingCardsInnerContainer>
      <SwipeButtons
        goBack={goBack}
        canGoBack={canGoBack}
        canSwipe={canSwipe}
        approve={approve}
        reject={reject}
        favorite={favorite}
        report={report}
      />
      <LastDirection lastDirection={lastDirection} />
    </DatingCardsContainer>
  );
};
