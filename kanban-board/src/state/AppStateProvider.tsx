import { createContext, FC, useReducer } from "react";
import { AppState, appStateReducer } from "./reducer";

const appData: {
  lists: {
    [key in TList["id"]]: TList;
  };
} = {
  lists: {
    0: {
      id: "0",
      title: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    1: {
      id: "1",
      title: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    2: {
      id: "2",
      title: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  },
};

export const AppStateContext = createContext<AppState>({} as AppState);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: TList["id"]): TList["tasks"] => {
    return lists[id]?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{
        lists,
        getTasksByListId,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
