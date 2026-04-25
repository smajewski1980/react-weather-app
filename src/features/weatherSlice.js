import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  weatherInfo: {
    current: {},
  },
  isLoading: false,
  error: null,
  currentCity: "",
  appIsShowing: false,
  hourlyAdvance: 0,
  currLatitude: "",
  currLongitude: "",
  currURL: "",
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (url, { getState }) => {
    console.log(url);
    const state = getState();
    if (!url) url = state.weather.currURL;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
);

function normailizeApiData(state, data) {
  state.weatherInfo["current"] = data.current;
  state.weatherInfo["hourly"] = data.hourly;
  state.weatherInfo["daily"] = data.daily;
  state.appIsShowing = true;
  console.log(data.hourly);
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setHourlyAdvance: (state, action) => {
      state.hourlyAdvance = action.payload;
    },
    setCurrLatitude: (state, action) => {
      state.currLatitude = action.payload;
    },
    setCurrLongitude: (state, action) => {
      state.currLongitude = action.payload;
    },
    setCurrURL: (state, action) => {
      state.currURL = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
        state.appIsShowing = false;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        // put the now gotten data into the store
        normailizeApiData(state, action.payload);
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.appIsShowing = false;
        state.error = action.error.message;
        console.log("from builder - rejected", action.error.message);
      });
  },
});

export const {
  setCurrentCity,
  setHourlyAdvance,
  setCurrLatitude,
  setCurrLongitude,
  setCurrURL,
} = weatherSlice.actions;
export default weatherSlice.reducer;
