export const updateLists = (listTasks: {
  [key in TList["id"]]: TList["taskIds"];
}) => ({
  type: "UPDATE_LISTS" as const,
  payload: listTasks,
});

export const setTasks = (args: {
  listId: TList["id"];
  taskIds: TList["taskIds"];
}) => ({
  type: "SET_TASKS" as const,
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
