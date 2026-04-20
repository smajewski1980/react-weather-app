import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "../features/unitsSlice";

export const store = configureStore({
  reducer: {
    units: unitsReducer,
  },
});
