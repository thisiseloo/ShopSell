import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { uniqueId, id, name, price, image, quantity, size? }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.uniqueId === newItem.uniqueId &&
          (item.size || "") === (newItem.size || "")
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(
        (item) =>
          !(
            item.uniqueId === itemToRemove.uniqueId &&
            (item.size || "") === (itemToRemove.size || "")
          )
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) =>
          i.uniqueId === action.payload.uniqueId &&
          (i.size || "") === (action.payload.size || "")
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) =>
          i.uniqueId === action.payload.uniqueId &&
          (i.size || "") === (action.payload.size || "")
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Əgər say 1-dirsə və azaltmaq istəyirsə, səbətdən sil
          state.items = state.items.filter(
            (i) =>
              !(
                i.uniqueId === item.uniqueId &&
                (i.size || "") === (item.size || "")
              )
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

// Selectorlar:
export const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
