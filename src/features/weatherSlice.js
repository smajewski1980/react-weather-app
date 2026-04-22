import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  weatherInfo: {
    current: {
      temperature_2m: Number(),
      apparent_temperature: Number(),
      relative_humidity_2m: Number(),
      wind_speed_10m: Number(),
      precipitation: Number(),
    },
  },
  isLoading: false,
  error: null,
  currentCity: "",
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (url, thunkAPI) => {
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    return data;
  },
);

function normailizeApiData(state, data) {
  state.weatherInfo["current"] = data.current;
  state.weatherInfo["hourly"] = data.hourly;
  state.weatherInfo["daily"] = data.daily;
  console.log(data.current);
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        // put the now gotten data into the store
        normailizeApiData(state, action.payload);
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentCity } = weatherSlice.actions;
export default weatherSlice.reducer;
