import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { reorder } from "../../helpers/arrayUtils";
import { Card, CardItem, Column, Container, Title } from "./styles";

// fake data generator
const getItems = (count: number, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

/**
 * Moves an item from one list to another list.
 */
const move = <
  T,
  V extends {
    index: number;
    droppableId: string;
  }
>(
  source: T[],
  destination: T[],
  droppableSource: V,
  droppableDestination: V
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {
    [droppableSource.droppableId]: sourceClone,
    [droppableDestination.droppableId]: destClone,
  };

  return result;
};

export const App = () => {
  const [state, setState] = useState([getItems(10), getItems(5, 10)]);

  type OnDragEnd = (result: DropResult, provided: ResponderProvided) => void;
  const onDragEnd: OnDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  };

  return (
    <div>
      <Container>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <Column>
                  <Title>Title</Title>
                  <Card ref={provided.innerRef} {...provided.droppableProps}>
                    {el.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <CardItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </CardItem>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Card>
                </Column>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </Container>
    </div>
  );
};
