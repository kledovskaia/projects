import { FC } from "react";
import { AddItem } from "../AddItem/AddItem";
// import { HandleAddTask } from "../App/App";
import { Card } from "../Card/Card";
import { Container, Title } from "./styles";

type Props = {
  title: string;
  // id: string;
  // action: HandleAddTask;
};

export const Column: FC<Props> = ({
  children,
  title,
  // id,
  // action,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {/* <Card placeholder={placeholder} tasks={tasks} id={id} /> */}
      {/* <AddItem type="task" action={action(id)} /> */}
      {children}
    </Container>
  );
};
