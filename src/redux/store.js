import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";
import userReducer from "./userSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState() || {
  cart: { items: [] },
  favorites: { items: [] },
  user: { users: [], currentUser: null },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    favorites: store.getState().favorites,
    user: store.getState().user,
  });
});
