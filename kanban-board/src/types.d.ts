type TList = {
  id: string;
  title: string;
  taskIds: TTask["id"][];
};
type TTask = {
  id: string;
  content: string;
};
