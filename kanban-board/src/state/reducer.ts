import * as types from "./types";
import * as AC from "./AC";
import { Dispatch } from "react";
import { List, Task } from "../helpers/constructors";

type Action = ReturnType<typeof AC[keyof typeof AC]>;

export type AppState = {
  lists: {
    [key in TList["id"]]: TList;
  };
  getTasksByListId?: (id: TList["id"]) => TList["tasks"];
  dispatch?: Dispatch<Action>;
};

export const appStateReducer = (state: AppState, action: Action): AppState => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case types.UPDATE_LISTS:
      const lists = { ...state.lists };
      Object.entries(action.payload).forEach(([key, value]) => {
        lists[key] = {
          ...lists[key],
          ...value,
        };
      });
      return {
        ...state,
        lists,
      };
    case types.SET_TASKS: {
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            tasks: action.payload.tasks,
          },
        },
      };
    }
    case types.ADD_LIST:
      const newList = new List(action.payload);
      return {
        ...state,
        lists: {
          ...state.lists,
          [newList.id]: newList,
        },
      };
    case types.ADD_TASK: {
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listId]: {
            ...state.lists[action.payload.listId],
            tasks: [
              ...state.lists[action.payload.listId].tasks,
              new Task(action.payload.text),
            ],
          },
        },
      };
    }
    default:
      return state;
  }
};
