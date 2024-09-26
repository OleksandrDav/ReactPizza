import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFullPizza = createAsyncThunk(
  "pizza/fetchFullPizzaStatus",
  async (id) => {
   
    const { data } = await axios.get(
      "https://66e1d39ac831c8811b5676b4.mockapi.io/items/" + id
    );

    return data;
  }
);

const initialState = {
  pizza: {},
  status: "idle", // for handling loading states
  error: null, // for handling errors
};

export const fullPizzaSlice = createSlice({
  name: "fullPizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullPizza.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.pizza = {};
      })
      .addCase(fetchFullPizza.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pizza = action.payload;
      })
      .addCase(fetchFullPizza.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.pizza = {};
      });
  },
});

export const selectFullPizza = (state) => state.fullPizza;

export const {} = fullPizzaSlice.actions;

export default fullPizzaSlice.reducer;
