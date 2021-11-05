import * as types from "./types";
import * as AC from "./AC";
import { Dispatch } from "react";
import { List, Task } from "../helpers/constructors";
import { moveItem } from "../helpers/arrayUtils";

type Action = ReturnType<typeof AC[keyof typeof AC]>;

export type AppState = {
  lists: TList[];
  getTasksByListId?: (id: TList["id"]) => TTask[];
  dispatch?: Dispatch<Action>;
};

export const appStateReducer = (state: AppState, action: Action): AppState => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case types.MOVE_LIST:
      const { draggedId, hoverId } = action.payload;
      const dragIndex = state.lists.findIndex((list) => list.id === draggedId);
      const hoverIndex = state.lists.findIndex((list) => list.id === hoverId);
      if (dragIndex === -1 || hoverIndex === -1) return state;
      return {
        ...state,
        lists: moveItem([...state.lists], dragIndex, hoverIndex),
      };

    case types.ADD_LIST:
      const newList = new List(action.payload);
      return {
        ...state,
        // lists: {
        //   ...state.lists,
        //   [newList.id]: newList,
        // },
      };
    case types.ADD_TASK: {
      const newTask = new Task(action.payload.content);
      return {
        ...state,
        // lists: {
        //   ...state.lists,
        //   [action.payload.listId]: {
        //     ...state.lists[action.payload.listId],
        //     taskIds: [
        //       ...state.lists[action.payload.listId].taskIds,
        //       newTask.id,
        //     ],
        //   },
        // },
      };
    }
    default:
      return state;
  }
};
