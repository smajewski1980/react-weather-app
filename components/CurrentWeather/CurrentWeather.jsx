import { useEffect } from "react";
import CurrentCard from "../CurrentCard/CurrentCard";
import styles from "./CurrentWeather.module.css";
import { useSelector } from "react-redux";
import getWeatherIconFromCode from "../../src/utilities/getWeatherIconFromCode";

const CurrentWeather = () => {
  const currPrecipUnit = useSelector((state) => state.units.units.precip);
  const currWindUnit = useSelector((state) => state.units.units.wind);
  const currTempUnit = useSelector((state) => state.units.units.temp);

  const currentWeatherData = useSelector((state) => state.weather.weatherInfo);
  const currentTemp = useSelector(
    (state) => state.weather.weatherInfo.current.temperature_2m,
  );
  const currentCity = useSelector((state) => state.weather.currentCity);
  const weatherCode = useSelector(
    (state) => state.weather.weatherInfo.current.weather_code,
  );
  const feelsLike = useSelector(
    (state) => state.weather.weatherInfo.current.apparent_temperature,
  );
  const humidity = useSelector(
    (state) => state.weather.weatherInfo.current.relative_humidity_2m,
  );
  const wind = useSelector(
    (state) => state.weather.weatherInfo.current.wind_speed_10m,
  );
  const precip = useSelector(
    (state) => state.weather.weatherInfo.current.precipitation,
  );

  // Get current date
  const now = new Date();

  // Format: "Sunday, Jan 1, 1900"
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const icon = getWeatherIconFromCode(weatherCode);

  return (
    <main>
      <div className={styles.currentWeatherWrapper}>
        <div className={styles.placeTimeWrapper}>
          <h2>{currentCity}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.iconTempWrapper}>
          <img
            src={icon[0]}
            alt={icon[1]}
            title={icon[1]}
          />
          <p>{Math.floor(currentTemp)}&deg;</p>
          <span>{currTempUnit ? " F" : " C"}</span>
        </div>
      </div>
      <div className={styles.currentCardWrapper}>
        <CurrentCard
          title='Feels Like'
          value={`${Math.round(feelsLike)}\u00B0  ${currTempUnit ? "F" : "C"}`}
        />
        <CurrentCard
          title='Humidity'
          value={`${humidity} %`}
        />
        <CurrentCard
          title='Wind'
          value={`${Math.round(wind)} ${currWindUnit ? "mph" : "km/h"}`}
        />
        <CurrentCard
          title='Precipitation'
          value={`${precip.toFixed(1)} ${currPrecipUnit ? "in" : "mm"}`}
        />
      </div>
    </main>
  );
};

export default CurrentWeather;
