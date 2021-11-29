import { createContext, FC, useReducer } from "react";
import { AppState, appStateReducer } from "./reducer";

const appData: {
  lists: {
    [key in TList["id"]]: TList;
  };
  tasks: {
    [key in TTask["id"]]: TTask;
  };
  listOrder: TList["id"][];
} = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  lists: {
    "list-1": {
      id: "list-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "list-2": {
      id: "list-2",
      title: "In progress",
      taskIds: [],
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      taskIds: [],
    },
  },
  // Facilitate reordering of the lists
  listOrder: ["list-1", "list-2", "list-3"],
};

export const AppStateContext = createContext<AppState>({} as AppState);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { lists, tasks, listOrder } = state;

  const getTasksByListId = (id: TList["id"]) => {
    const listTasks = Object.entries(tasks)
      .filter(([taskId]) => lists[id].taskIds.includes(taskId))
      .map(([_, value]) => value);
    return listTasks;
  };

  return (
    <AppStateContext.Provider
      value={{
        tasks,
        listOrder,
        lists,
        getTasksByListId,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
