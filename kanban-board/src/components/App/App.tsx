// import { useAppState } from "../../hooks/useAppState";
// import { AddItem } from "../AddItem/AddItem";
// import { Column } from "../Column/Column";
// import { Container } from "./styles";
// import { addList, addTask, updateState } from "../../state/AC";
// import {
//   DragDropContext,
//   DropResult,
//   ResponderProvided,
// } from "react-beautiful-dnd";

// export type HandleAddTask = (
//   listId: TList["id"]
// ) => (content: TTask["content"]) => void;

// type HandleAddList = (title: TList["title"]) => void;

// export const App = () => {
//   const { lists, tasks, listOrder, dispatch } = useAppState();

//   const handleAddList: HandleAddList = (title) => {
//     dispatch?.(addList(title));
//   };

//   const handleAddTask: HandleAddTask = (listId) => (content) => {
//     dispatch?.(
//       addTask({
//         listId,
//         content,
//       })
//     );
//   };

//   type OnDragEnd = (result: DropResult, provided: ResponderProvided) => void;
//   const onDragEnd: OnDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const start = lists[source.droppableId];
//     const finish = lists[destination.droppableId];

//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newColumn: TList = {
//         ...start,
//         taskIds: newTaskIds,
//       };

//       const newState = {
//         lists: {
//           ...lists,
//           [newColumn.id]: newColumn,
//         },
//       };

//       dispatch?.(updateState(newState));
//       return;
//     }

//     // Moving from one list to another
//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds,
//     };

//     const finishTaskIds = Array.from(finish.taskIds);
//     finishTaskIds.splice(destination.index, 0, draggableId);
//     const newFinish: TList = {
//       ...finish,
//       taskIds: finishTaskIds,
//     };

//     const newState = {
//       lists: {
//         ...lists,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish,
//       },
//     };
//     dispatch?.(updateState(newState));
//   };
//   return (
//     <Container>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {Object.values(lists).map((list) => (
//           <Column
//             title={list.title}
//             key={list.id}
//             id={list.id}
//             action={handleAddTask}
//           />
//         ))}
//         <AddItem type="list" action={handleAddList} />
//       </DragDropContext>
//     </Container>
//   );
// };
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle,
  ResponderProvided,
} from "react-beautiful-dnd";
import { reorder } from "../../helpers/arrayUtils";
import { Column } from "../Column/Column";
import { Container } from "./styles";

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

const getItemStyle = (
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
) => ({
  // some basic styles to make the items look a bit nicer
  // userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const grid = 8;
const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

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
      <button
        type="button"
        onClick={() => {
          setState([...state, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setState([...state, getItems(1)]);
        }}
      >
        Add new item
      </button>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            {item.content}
                            <button
                              type="button"
                              onClick={() => {
                                const newState = [...state];
                                newState[ind].splice(index, 1);
                                setState(
                                  newState.filter((group) => group.length)
                                );
                              }}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};
