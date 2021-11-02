import * as types from './types'
import * as AC from './AC'
import { Dispatch } from 'react'
import { List, Task } from '../helpers/constructors'

type Action = ReturnType<typeof AC[keyof typeof AC]>

export type AppState = {
  lists: TList[]
  getTasksByListId?: (id: TList['id']) => TList['tasks']
  dispatch?: Dispatch<Action>
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case types.SET_TASKS: {
      const targetListIndex = state.lists.findIndex(
        (list) => list.id === action.payload.listId
      )
      if (targetListIndex === -1) return state
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, targetListIndex),
          {
            ...state.lists[targetListIndex],
            tasks: action.payload.tasks,
          },
          ...state.lists.slice(targetListIndex + 1),
        ],
      }
    }
    case types.ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, new List(action.payload)],
      }
    case types.ADD_TASK: {
      const targetListIndex = state.lists.findIndex(
        (list) => list.id === action.payload.listId
      )
      if (targetListIndex === -1) return state
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, targetListIndex),
          {
            ...state.lists[targetListIndex],
            tasks: [
              ...state.lists[targetListIndex].tasks,
              new Task(action.payload.text),
            ],
          },
          ...state.lists.slice(targetListIndex + 1),
        ],
      }
    }
    default:
      return state
  }
}
