import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sortBy: {
    name: "popularity",
    sort: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.sortBy = action.payload.sortBy;
      state.pageCount = Number(action.payload.pageCount);
    },
  },
});

export const selectFilters = (state) => state.filter;
export const selectCategoryId = (state) => state.filter.categoryId;
export const selectSortBy = (state) => state.filter.sortBy;

export const { setCategoryId, setSortBy, setPageCount, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
