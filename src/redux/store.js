import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";
import { loadState, saveState } from "./localStorage";

// Əvvəlki state-i oxu
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  preloadedState: persistedState, // localStorage-dan gələn state
});

// Store hər dəyişəndə localStorage-a yaz
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    favorites: store.getState().favorites,
  });
});
