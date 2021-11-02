export const addTask = ({
  listId,
  text,
}: {
  listId: TList['id']
  text: TTask['text']
}) => ({
  type: 'ADD_TASK' as const,
  payload: {
    listId,
    text,
  },
})
export const addList = (title: TList['title']) => ({
  type: 'ADD_LIST' as const,
  payload: title,
})
