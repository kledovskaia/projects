import { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useAppState } from "../../hooks/useAppState";
import { Container, Item } from "./styles";

type Props = {
  id: TList["id"];
  tasks: any[];
  placeholder: any;
};

export const Card: FC<Props> = ({ id, tasks, placeholder }) => {
  const { getTasksByListId } = useAppState();
  // const tasks = getTasksByListId?.(id);

  return (
    <>
      {tasks.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Item>{item.content}</Item>
              {placeholder}
            </div>
          )}
        </Draggable>
      ))}
    </>
    // <Droppable droppableId={id}>
    //   {(provided) => (
    //     <Container {...provided.droppableProps} ref={provided.innerRef}>
    //       {tasks?.map((task, index) => (
    //         <Draggable key={task.id} draggableId={task.id} index={index}>
    //           {(provided) => (
    //             <Item
    //               ref={provided.innerRef}
    //               {...provided.draggableProps}
    //               {...provided.dragHandleProps}
    //             >
    //               {task.content}
    //             </Item>
    //           )}
    //         </Draggable>
    //       ))}

    //       {provided.placeholder}
    //     </Container>
    //   )}
    // </Droppable>
  );
};
