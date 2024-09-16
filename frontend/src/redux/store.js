import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
      task: taskSlice,
      filter: filterSlice,
      cart: cartSlice,
  },
});