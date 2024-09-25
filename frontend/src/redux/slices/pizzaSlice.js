import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({ categoryId, sortBy, searchValue, pageCount = 1, limit = 4 }) => {
    const params = {
      page: pageCount,
      limit: limit,
      sortBy: sortBy.sort,
    };

    if (categoryId !== 0) {
      params.category = categoryId;
    }
    if (searchValue) {
      params.search = searchValue;
    }

    const { data } = await axios.get(
      "https://66e1d39ac831c8811b5676b4.mockapi.io/items",
      {
        params: params,
      }
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "idle", // for handling loading states
  error: null, // for handling errors
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.items = [];
      });
  },
});

export const selectPizza = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
