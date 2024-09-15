import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, name: "Task 1" }];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { createTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
