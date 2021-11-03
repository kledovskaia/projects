import { useAppState } from "../../hooks/useAppState";
import { AddItem } from "../AddItem/AddItem";
import { Column } from "../Column/Column";
import { Container } from "./styles";
import { addList, addTask, setTasks, updateLists } from "../../state/AC";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { move, reorder } from "../../helpers/arrayUtils";

export type HandleAddTask = (
  listId: TList["id"]
) => (content: TTask["content"]) => void;

type HandleAddList = (title: TList["title"]) => void;

export const App = () => {
  const { lists, dispatch } = useAppState();

  const handleAddList: HandleAddList = (title) => {
    dispatch?.(addList(title));
  };

  const handleAddTask: HandleAddTask = (listId) => (content) => {
    dispatch?.(
      addTask({
        listId,
        content,
      })
    );
  };

  type OnDragEnd = (result: DropResult, provided: ResponderProvided) => void;
  const onDragEnd: OnDragEnd = (result) => {
    if (!result.destination) return;
    if (
      result.destination.droppableId !== result.source.droppableId ||
      result.destination.index === result.source.index
    )
      return;

    if (result.source.droppableId === result.destination.droppableId) {
      dispatch?.(
        setTasks({
          taskIds: reorder(
            lists[result.source.droppableId].taskIds,
            result.source.index,
            result.destination.index
          ),
          listId: result.destination.droppableId,
        })
      );
    } else {
      const source = lists[result.source.droppableId];
      const destination = lists[result.destination.droppableId];
      if (!source || !destination) return;

      const moved: {
        [key in TList["id"]]: TList["taskIds"];
      } = move(
        source.taskIds,
        destination.taskIds,
        result.source,
        result.destination
      );
      dispatch?.(
        updateLists({
          [result.source.droppableId]: moved[result.source.droppableId],
          [result.destination.droppableId]:
            moved[result.destination.droppableId],
        })
      );
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(lists).map((list) => (
          <Column
            title={list.title}
            key={list.id}
            id={list.id}
            action={handleAddTask}
          />
        ))}
        <AddItem type="list" action={handleAddList} />
      </DragDropContext>
    </Container>
  );
};
