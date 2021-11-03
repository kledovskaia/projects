import { AppState } from "./reducer";

export const updateState = (state: {
  [key in keyof AppState]?: AppState[key];
}) => ({
  type: "UPDATE_STATE" as const,
  payload: state,
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
