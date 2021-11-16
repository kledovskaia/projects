type TList = {
  id: string;
  title: string;
  tasks: TTask[];
};
type TTask = {
  id: string;
  content: string;
};

type TColumnDragItem = {
  type: "COLUMN";
  id: string;
  title: string;
};

type TCardDragItem = {
  type: "CARD";
  id: string;
  content: string;
};

type TDragItem = TColumnDragItem | TCardDragItem;
