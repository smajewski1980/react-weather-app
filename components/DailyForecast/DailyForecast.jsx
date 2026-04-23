import getWeekdayString from "../../src/utilities/getWeekdayString";
import DailyCard from "../DailyCard/DailyCard";
import styles from "./DailyForecast.module.css";
import { useSelector } from "react-redux";

const DailyForecast = () => {
  const dailyWeatherCodes = useSelector(
    (state) => state.weather.weatherInfo.daily.weather_code,
  );
  const dailyMinTemps = useSelector(
    (state) => state.weather.weatherInfo.daily.temperature_2m_min,
  );
  const dailyMaxTemps = useSelector(
    (state) => state.weather.weatherInfo.daily.temperature_2m_max,
  );

  const day = new Date();
  const weekday = day.getDay();

  return (
    <aside className={styles.dailyAside}>
      <h3>Daily Forecast</h3>
      <div className={styles.dailyForecastCardWrapper}>
        <DailyCard
          day='Today'
          weatherCode={dailyWeatherCodes[0]}
          minTemp={dailyMinTemps[0]}
          maxTemp={dailyMaxTemps[0]}
        />
        <DailyCard
          day='Tomorrow'
          weatherCode={dailyWeatherCodes[1]}
          minTemp={dailyMinTemps[1]}
          maxTemp={dailyMaxTemps[1]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 2)}
          weatherCode={dailyWeatherCodes[2]}
          minTemp={dailyMinTemps[2]}
          maxTemp={dailyMaxTemps[2]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 3)}
          weatherCode={dailyWeatherCodes[3]}
          minTemp={dailyMinTemps[3]}
          maxTemp={dailyMaxTemps[3]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 4)}
          weatherCode={dailyWeatherCodes[4]}
          minTemp={dailyMinTemps[4]}
          maxTemp={dailyMaxTemps[4]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 5)}
          weatherCode={dailyWeatherCodes[5]}
          minTemp={dailyMinTemps[5]}
          maxTemp={dailyMaxTemps[5]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 6)}
          weatherCode={dailyWeatherCodes[6]}
          minTemp={dailyMinTemps[6]}
          maxTemp={dailyMaxTemps[6]}
        />
      </div>
    </aside>
  );
};

export default DailyForecast;
