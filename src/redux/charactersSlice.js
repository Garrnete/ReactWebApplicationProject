import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch characters by house
export const fetchCharactersByHouse = createAsyncThunk(
  "characters/fetchByHouse",
  async (house) => {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    return response.json(); // returns array of characters
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    list: [],       // array of characters
    status: "idle", // idle | loading | succeeded | failed
    error: null,    // error message if fetch fails
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByHouse.pending, (state) => {
        state.status = "loading";
        state.error = null;
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

export default charactersSlice.reducer;
