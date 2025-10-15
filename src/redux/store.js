import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import houseReducer from "./houseSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    house: houseReducer,
    favorites: favoritesReducer,
  },
});
