import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface TodoState {
  loading: boolean
  items: Array<{
    id: number
    description: string
    completed: boolean
  }>
}

const initialState: TodoState = {
  loading: false,
  items: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items.push({
        id:
          (state.items
            .map((item) => item.id)
            .sort((a, b) => a - b)
            .pop() || 0) + 1,
        description: action.payload,
        completed: false,
      })
    },
    remove: (state, action: PayloadAction<number>) => {
      const idx = state.items.findIndex((item) => item.id === action.payload)
      if (idx !== -1) {
        state.items.splice(idx, 1)
      }
    },
    complete: (state, action: PayloadAction<number>) => {
      const idx = state.items.findIndex((item) => item.id === action.payload)
      if (idx !== -1) {
        state.items[idx].completed = !state.items[idx].completed
      }
    },
  },
})

export const { add, remove, complete } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.items

export default todoSlice.reducer
