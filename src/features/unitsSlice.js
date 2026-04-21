import { createSlice } from "@reduxjs/toolkit";

// imperial units = true, metric = false
const initialState = {
  unit: true,
  units: {
    temp: true,
    wind: true,
    precip: true,
  },
};

const manuallyChanged = (state) => {
  if (state.units.temp && state.units.wind && state.units.precip) {
    state.unit = true;
  } else if (!state.units.temp && !state.units.wind && !state.units.precip) {
    state.unit = false;
  }
};

export const unitsSlice = createSlice({
  name: "unitsSlice",
  initialState,
  reducers: {
    toggleUnit: (state) => {
      state.unit = !state.unit;

      for (let type in state.units) {
        if (state.unit) {
          state.units[type] = true;
        } else {
          state.units[type] = false;
        }
      }
    },
    toggleTempUnit: (state) => {
      state.units.temp = !state.units.temp;
      manuallyChanged(state);
    },
    toggleWindUnit: (state) => {
      state.units.wind = !state.units.wind;
      manuallyChanged(state);
    },
    togglePrecipUnit: (state) => {
      state.units.precip = !state.units.precip;
      manuallyChanged(state);
    },
  },
});

export const { toggleUnit, toggleTempUnit, toggleWindUnit, togglePrecipUnit } =
  unitsSlice.actions;
export default unitsSlice.reducer;
