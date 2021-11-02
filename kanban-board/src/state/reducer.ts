import { AppState } from './AppStateProvider'
import * as types from './types'
import * as AC from './AC'

type Action = ReturnType<typeof AC[keyof typeof AC]>

export const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case types.ADD_LIST:
    case types.ADD_TASK:
    default:
      return state
  }
}
