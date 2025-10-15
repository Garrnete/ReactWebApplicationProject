import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharactersByHouse = createAsyncThunk(
  "characters/fetchByHouse",
  async (house) => {
    const res = await axios.get(
      `https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`
    );
    return res.data;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCharacters: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByHouse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharactersByHouse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCharactersByHouse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;