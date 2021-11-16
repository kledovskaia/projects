import * as types from "./types";
import * as AC from "./AC";
import { List, Task } from "../helpers/constructors";
import { reorder } from "../helpers/arrayUtils";

export type Action = ReturnType<typeof AC[keyof typeof AC]>;

export type AppState = {
  lists: TList[];
  draggedItem: TDragItem | null;
};

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case types.ADD_LIST:
      const newList = new List(action.payload);
      return {
        ...state,
        lists: [...state.lists, newList],
      };
    case types.ADD_TASK: {
      const newTask = new Task(action.payload.content);
      const target = state.lists.findIndex(
        (list) => list.id === action.payload.listId
      );
      if (target === -1) return state;
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, target),
          {
            ...state.lists[target],
            tasks: [...state.lists[target].tasks, newTask],
          },
          ...state.lists.slice(target),
        ],
      };
    }
    default:
      return state;
  }
};
