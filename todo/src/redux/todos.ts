import { v4 } from "uuid"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  todos: [] as TTodo[],
  todoOnEdit: null as null | TTodo | { [key in string]: string },
}

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TTodo["content"]>) => {
      state.todos.push(createTodoObject(action.payload))
    },
    remove: (state, action: PayloadAction<TTodo["id"]>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      if (index === -1) return
      state.todos.splice(index, 1)
    },
    toggleDone: (state, action: PayloadAction<TTodo["id"]>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      if (index === -1) return
      state.todos.splice(index, 1, {
        ...state.todos[index],
        done: !state.todos[index].done,
      })
    },
    changeContent: (
      state,
      action: PayloadAction<{
        targetId: TTodo["id"]
        newContent: TTodo["content"]
      }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.targetId
      )
      if (index === -1) return
      state.todos[index].content = action.payload.newContent
    },
    setTodoOnEdit: (
      state,
      action: PayloadAction<typeof initialState["todoOnEdit"]>
    ) => {
      if (!action.payload) {
        state.todoOnEdit = null
        return
      } else if (action.payload && "id" in action.payload) {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload?.id
        )
        if (index === -1) return
        state.todoOnEdit = state.todos[index]
      } else {
        state.todoOnEdit = {}
        return
      }
    },
  },
})

const createTodoObject = (content: TTodo["content"]): TTodo => ({
  id: v4(),
  content,
  timestamp: Date.now(),
  done: false,
})

export const todosActions = todosSlice.actions
export default todosSlice.reducer
