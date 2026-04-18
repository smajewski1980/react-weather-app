import HourlyCard from "../HourlyCard/HourlyCard";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./HourlyForecast.module.css";

const HourlyForecast = () => {
  return (
    <aside className={styles.hourlyAside}>
      <div className={styles.hourlyHeader}>
        <h3>Hourly forecast</h3>
        <Dropdown
          label='weekday'
          color='light'
          gear={false}
        />
      </div>

      <HourlyCard
        time='XX AM'
        temp='47&deg;'
      />
      <HourlyCard
        time='XX AM'
        temp='47&deg;'
      />
      <HourlyCard
        time='XX AM'
        temp='47&deg;'
      />
      <HourlyCard
        time='XX AM'
        temp='47&deg;'
      />
      <HourlyCard
        time='XX AM'
        temp='47&deg;'
      />
      <HourlyCard
        time='X PM'
        temp='47&deg;'
      />
      <HourlyCard
        time='X PM'
        temp='47&deg;'
      />
      <HourlyCard
        time='X PM'
        temp='47&deg;'
      />
    </aside>
  );
};

export default HourlyForecast;
