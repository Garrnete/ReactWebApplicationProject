import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    selectedHouse: null,
  },
  reducers: {
    selectHouse: (state, action) => {
      state.selectedHouse = action.payload;
    },
    resetHouse: (state) => {
      state.selectedHouse = null;
    },
  },
});

export const { selectHouse, resetHouse } = houseSlice.actions;
export default houseSlice.reducer;
