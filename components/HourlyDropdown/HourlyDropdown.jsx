import styles from "./HourlyDropdown.module.css";
import getWeekdayString from "../../src/utilities/getWeekdayString";

const HourlyDropdown = () => {
  const day = new Date();
  const weekday = day.getDay();

  return (
    <select
      name='hourlyDropdown'
      className={styles.hourlyDropdown}
    >
      <option value={getWeekdayString(weekday)}>
        {getWeekdayString(weekday)}
      </option>
      <option value={getWeekdayString(weekday + 1)}>
        {getWeekdayString(weekday + 1)}
      </option>
      <option value={getWeekdayString(weekday + 2)}>
        {getWeekdayString(weekday + 2)}
      </option>
      <option value={getWeekdayString(weekday + 3)}>
        {getWeekdayString(weekday + 3)}
      </option>
      <option value={getWeekdayString(weekday + 4)}>
        {getWeekdayString(weekday + 4)}
      </option>
      <option value={getWeekdayString(weekday + 5)}>
        {getWeekdayString(weekday + 5)}
      </option>
      <option value={getWeekdayString(weekday + 6)}>
        {getWeekdayString(weekday + 6)}
      </option>
    </select>
  );
};

export default HourlyDropdown;
