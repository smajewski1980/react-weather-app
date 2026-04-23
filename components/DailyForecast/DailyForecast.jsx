import getWeekdayString from "../../src/utilities/getWeekdayString";
import DailyCard from "../DailyCard/DailyCard";
import styles from "./DailyForecast.module.css";
import { useSelector } from "react-redux";

const DailyForecast = () => {
  const dailyWeatherCodes = useSelector(
    (state) => state.weather.weatherInfo.daily.weather_code,
  );

  console.log(dailyWeatherCodes);

  const day = new Date();
  const weekday = day.getDay();

  return (
    <aside className={styles.dailyAside}>
      <h3>Daily Forecast</h3>
      <div className={styles.dailyForecastCardWrapper}>
        <DailyCard
          day='Today'
          weatherCode={dailyWeatherCodes[0]}
        />
        <DailyCard
          day='Tomorrow'
          weatherCode={dailyWeatherCodes[1]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 2)}
          weatherCode={dailyWeatherCodes[2]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 3)}
          weatherCode={dailyWeatherCodes[3]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 4)}
          weatherCode={dailyWeatherCodes[4]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 5)}
          weatherCode={dailyWeatherCodes[5]}
        />
        <DailyCard
          day={getWeekdayString(weekday + 6)}
          weatherCode={dailyWeatherCodes[6]}
        />
      </div>
    </aside>
  );
};

export default DailyForecast;
