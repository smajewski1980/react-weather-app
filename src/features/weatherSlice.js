import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  weatherInfo: {},
  isLoading: false,
  error: null,
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (data, thunkAPI) => {
    console.log(data);
    // get the weather and return it
    return "heres the data";
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action from fullfilled", action);
        // put the now gotten data into the store
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
