import getWeekdayString from "../../src/utilities/getWeekdayString";
import DailyCard from "../DailyCard/DailyCard";
import styles from "./DailyForecast.module.css";

const DailyForecast = () => {
  const day = new Date();
  const weekday = day.getDay();

  return (
    <aside className={styles.dailyAside}>
      <h3>Daily Forecast</h3>
      <div className={styles.dailyForecastCardWrapper}>
        <DailyCard day='Today' />
        <DailyCard day='Tomorrow' />
        <DailyCard day={getWeekdayString(weekday + 2)} />
        <DailyCard day={getWeekdayString(weekday + 3)} />
        <DailyCard day={getWeekdayString(weekday + 4)} />
        <DailyCard day={getWeekdayString(weekday + 5)} />
        <DailyCard day={getWeekdayString(weekday + 6)} />
      </div>
    </aside>
  );
};

export default DailyForecast;
