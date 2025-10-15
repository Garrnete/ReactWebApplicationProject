import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./houseSlice";
import charactersReducer from "./charactersSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    house: houseReducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
});