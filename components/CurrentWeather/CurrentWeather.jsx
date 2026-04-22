import { useEffect } from "react";
import CurrentCard from "../CurrentCard/CurrentCard";
import styles from "./CurrentWeather.module.css";
import { useSelector } from "react-redux";

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

  let imgAltText = "";

  // Get current date
  const now = new Date();

  // Format: "Sunday, Jan 1, 1900"
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  function getWeatherIconFromCode(code) {
    if (code === 0) {
      imgAltText = "sunny";
      return "../src/assets/images/icon-sunny.webp";
    } else if (code > 0 && code < 3) {
      imgAltText = "partly cloudy";
      return "../src/assets/images/icon-partly-cloudy.webp";
    } else if (code === 3) {
      imgAltText = "overcast";
      return "../src/assets/images/icon-overcast.webp";
    } else if (code > 44 && code < 49) {
      imgAltText = "fog";
      return "../src/assets/images/icon-fog.webp";
    } else if (code > 50 && code < 56) {
      imgAltText = "drizzle";
      return "../src/assets/images/icon-drizzle.webp";
    } else if (
      (code > 60 && code < 66) ||
      (code > 79 && code < 83) ||
      (code > 94 && code < 100)
    ) {
      imgAltText = "rain";
      return "../src/assets/images/icon-rain.webp";
    } else if (
      (code > 55 && code < 58) ||
      (code > 65 && code < 68) ||
      (code > 70 && code < 78) ||
      (code > 84 && code < 87)
    ) {
      imgAltText = "snow";
      return "../src/assets/images/icon-snow.webp";
    } else return null;
  }

  return (
    <main>
      <div className={styles.currentWeatherWrapper}>
        <div className={styles.placeTimeWrapper}>
          <h2>{currentCity}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.iconTempWrapper}>
          <img
            src={getWeatherIconFromCode(weatherCode)}
            alt={imgAltText}
            title={imgAltText}
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
          value={`${precip} ${currPrecipUnit ? "in" : "cm"}`}
        />
      </div>
    </main>
  );
};

export default CurrentWeather;
