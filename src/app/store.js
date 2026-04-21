import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "../features/unitsSlice";
import weatherReducer from "../features/weatherSlice";

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    weather: weatherReducer,
  },
});
