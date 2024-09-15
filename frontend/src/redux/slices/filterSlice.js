import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 1,
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
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortBy, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
