import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
      task: taskSlice,
      filter: filterSlice
  },
});


