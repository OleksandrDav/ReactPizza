import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: 0,
   sortBy: {
     name: "популярности",
     sort: "rating",
   },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    }
  },
});

export const { setCategoryId, setSortBy } = filterSlice.actions;

export default filterSlice.reducer;
