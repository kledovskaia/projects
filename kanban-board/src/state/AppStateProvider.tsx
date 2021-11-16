import { createContext, Dispatch, FC, useReducer } from "react";
import { Action, AppState, appStateReducer } from "./reducer";

const initialState: AppState = {
  draggedItem: null,
  lists: [],
};
export const AppStateContext = createContext<AppStateContextProps>(
  initialState as AppStateContextProps
);

type AppStateContextProps = AppState & {
  getTasksByListId: (id: TList["id"]) => TTask[];
  dispatch: Dispatch<Action>;
};

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  const { lists, draggedItem } = state;

  const getTasksByListId = (id: TList["id"]) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{
        draggedItem,
        lists,
        getTasksByListId,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
