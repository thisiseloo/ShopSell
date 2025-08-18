import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { uniqueId, size } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.uniqueId === uniqueId && (item.size || "") === (size || "")
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { uniqueId, size } = action.payload;
      state.items = state.items.filter(
        (item) =>
          !(item.uniqueId === uniqueId && (item.size || "") === (size || ""))
      );
    },
    increaseQty: (state, action) => {
      const { uniqueId, size } = action.payload;
      const item = state.items.find(
        (i) => i.uniqueId === uniqueId && (i.size || "") === (size || "")
      );
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const { uniqueId, size } = action.payload;
      const item = state.items.find(
        (i) => i.uniqueId === uniqueId && (i.size || "") === (size || "")
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.items = state.items.filter(
          (i) => !(i.uniqueId === uniqueId && (i.size || "") === (size || ""))
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
