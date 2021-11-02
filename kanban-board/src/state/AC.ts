export const setTasks = (args: { listId: TList['id']; tasks: TTask[] }) => ({
  type: 'SET_TASKS' as const,
  payload: args,
})

export const addTask = (args: {
  listId: TList['id']
  text: TTask['text']
}) => ({
  type: 'ADD_TASK' as const,
  payload: args,
})
export const addList = (title: TList['title']) => ({
  type: 'ADD_LIST' as const,
  payload: title,
})
