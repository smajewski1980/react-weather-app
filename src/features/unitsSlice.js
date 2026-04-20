import { createSlice } from "@reduxjs/toolkit";

// imperial units = true, metric = false
const initialState = {
  units: true,
};

export const unitsSlice = createSlice({
  name: "unitsSlice",
  initialState,
  reducers: {
    toggleUnits: (state) => {
      state.units = !state.units;
    },
  },
});

export const { toggleUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
