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
  const [state, setState] = useState([
    {
      id: "1",
      tasks: [
        { id: "12", content: "Some Content 1" },
        { id: "22", content: "Some Content 2" },
        { id: "32", content: "Some Content 3" },
        { id: "42", content: "Some Content 4" },
      ],
    },
    {
      id: "2",
      tasks: [
        { id: "52", content: "Some Content 5" },
        { id: "62", content: "Some Content 6" },
        { id: "72", content: "Some Content 7" },
        { id: "82", content: "Some Content 8" },
      ],
    },
    {
      id: "3",
      tasks: [
        { id: "92", content: "Some Content 9" },
        { id: "102", content: "Some Content 10" },
        { id: "112", content: "Some Content 11" },
        { id: "122", content: "Some Content 12" },
      ],
    },
  ]);

  type OnDragEnd = (result: DropResult, provided: ResponderProvided) => void;
  const onDragEndTasks: OnDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd].tasks, source.index, destination.index);
      const newState = [...state];
      newState[sInd].tasks = items;
      setState(newState);
    } else {
      const result = move(
        state[sInd].tasks,
        state[dInd].tasks,
        source,
        destination
      );
      const newState = [...state];
      newState[sInd].tasks = result[sInd];
      newState[dInd].tasks = result[dInd];

      setState(newState);
    }
  };

  const onDragEndLists: OnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.index === destination.index) return;
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEndLists}>
        <Droppable droppableId="lists">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              <DragDropContext onDragEnd={onDragEndTasks}>
                {state.map((list, ind) => (
                  <Draggable key={list.id} draggableId={list.id} index={ind}>
                    {(provided) => (
                      <Column
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Title>Title</Title>
                        <Droppable droppableId={`${ind}`}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {list.tasks.map((task, index) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <CardItem
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {task.content}
                                    </CardItem>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </Card>
                          )}
                        </Droppable>
                      </Column>
                    )}
                  </Draggable>
                ))}
              </DragDropContext>
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
