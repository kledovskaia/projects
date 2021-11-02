import * as types from './types'

export const addTask = ({
  listId,
  text,
}: {
  listId: List['id']
  text: Task['text']
}) => ({
  type: types.ADD_TASK,
  payload: {
    listId,
    text,
  },
})
export const addList = (title: List['title']) => ({
  type: types.ADD_LIST,
  payload: title,
})
