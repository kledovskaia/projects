import { configureStore } from "@reduxjs/toolkit"
import todos from "./todos"

export const store = configureStore({
  reducer: {
    todos,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
