import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem(state, action) {
    //    state.items.push(action.payload);
    //    state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
    // },
    plusItem(state, { payload }) {
      const item = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    minusItem(state, { payload }) {
      const item = state.items.find((obj) => {
        return (
          obj.id === payload.id &&
          obj.size === payload.size &&
          obj.type === payload.type
        );
      });
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== payload.id ||
            obj.size !== payload.size ||
            obj.type !== payload.type
        );
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== payload.id ||
          obj.size !== payload.size ||
          obj.type !== payload.type
      );
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { plusItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
