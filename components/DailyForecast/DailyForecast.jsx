import DailyCard from "../DailyCard/DailyCard";
import styles from "./DailyForecast.module.css";

const DailyForecast = () => {
  return (
    <aside className={styles.dailyAside}>
      <h3>Daily Forecast</h3>
      <div className={styles.dailyForecastCardWrapper}>
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
      </div>
    </aside>
  );
};

export default DailyForecast;
