export const setDragItem = (item: TDragItem) => ({
  type: "SET_DRAG_ITEM" as const,
  payload: item,
});

export const addTask = (args: {
  listId: TList["id"];
  content: TTask["content"];
}) => ({
  type: "ADD_TASK" as const,
  payload: args,
});
export const addList = (title: TList["title"]) => ({
  type: "ADD_LIST" as const,
  payload: title,
});
