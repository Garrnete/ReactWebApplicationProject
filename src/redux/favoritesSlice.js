import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (e) {
    // ignore
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: loadFavorites(),
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find((c) => c.name === action.payload.name);
      if (!exists) {
        state.items.push(action.payload);
        saveFavorites(state.items);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((c) => c.name !== action.payload.name);
      saveFavorites(state.items);
    },
    clearFavorites: (state) => {
      state.items = [];
      saveFavorites(state.items);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;