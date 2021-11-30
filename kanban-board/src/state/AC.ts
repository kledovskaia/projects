export const moveList = (args: { draggedId: string; hoverId: string }) => ({
  type: "MOVE_LIST" as const,
  payload: args,
});
export const moveTask = (args: { draggedId: string; hoverId: string }) => ({
  type: "MOVE_TASK" as const,
  payload: args,
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
