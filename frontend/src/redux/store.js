import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
      task: taskSlice,
      filter: filterSlice,
      cart: cartSlice,
      pizza: pizzaSlice,
  },
});