import HourlyCard from "../HourlyCard/HourlyCard";
import HourlyDropdown from "../HourlyDropdown/HourlyDropdown";
import styles from "./HourlyForecast.module.css";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const hourlyTimesArray = useSelector(
    (state) => state.weather.weatherInfo.hourly.time,
  );
  const hourlyTempsArray = useSelector(
    (state) => state.weather.weatherInfo.hourly.temperature_2m,
  );
  const weatherCodesArray = useSelector(
    (state) => state.weather.weatherInfo.hourly.weather_code,
  );
  // the hourly dropdown starts with today, this offset
  // is for getting hourly forecasts for other days
  const dayOffset = useSelector((state) => state.weather.hourlyAdvance);
  // today
  const currentDateTime = new Date();

  // get the current hour and index for data arrays
  const currentHour = currentDateTime.getHours();
  const currentTimeIdx = dayOffset
    ? (currentHour % 24) * (dayOffset + 1)
    : currentHour % 24;

  return (
    <aside className={styles.hourlyAside}>
      <div className={styles.hourlyHeader}>
        <h3>Hourly forecast</h3>
        <HourlyDropdown />
      </div>

      {Array.from({ length: 8 }, (_, index) => (
        <HourlyCard
          key={index}
          time={(currentHour + index) % 12}
          temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + index])}\u00B0`}
          code={weatherCodesArray[currentTimeIdx + index]}
          meridiem={(currentHour + index) % 24 < 12 ? "am" : "pm"}
        />
      ))}
    </aside>
  );
};

export default HourlyForecast;
