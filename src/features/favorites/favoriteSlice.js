import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // favorit məhsulların arrayi
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;
export const selectFavorites = (state) => state.favorites.items;

export default favoriteSlice.reducer;