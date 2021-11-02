import { createContext, FC, useReducer } from 'react'
import { AppState, appStateReducer } from './reducer'

const appData: { lists: TList[] } = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
}

export const AppStateContext = createContext<AppState>({} as AppState)

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)
  const { lists } = state

  const getTasksByListId = (id: TList['id']): TList['tasks'] => {
    return lists.find((list) => list.id == id)?.tasks || []
  }

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
  )
}
