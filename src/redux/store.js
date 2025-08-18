import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    favorites: store.getState().favorites,
  });
});
