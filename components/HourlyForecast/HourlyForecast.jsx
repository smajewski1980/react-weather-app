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
  // today plus the offset
  currentDateTime.setDate(currentDateTime.getDate() + dayOffset);
  // finese the string format to match the api data
  const splitDateTime = currentDateTime.toISOString().split(":");
  splitDateTime[1] = "00";
  const formattedDateTime = splitDateTime.slice(0, 2).join(":");
  // the array index for the current hour
  const currentTimeIdx = hourlyTimesArray.indexOf(formattedDateTime);

  // get the current hour
  const currentHour = currentDateTime.getHours();

  return (
    <aside className={styles.hourlyAside}>
      <div className={styles.hourlyHeader}>
        <h3>Hourly forecast</h3>
        <HourlyDropdown />
      </div>

      <HourlyCard
        time={currentHour % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx]}
        meridiem={currentHour < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 1) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 1])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 1]}
        meridiem={(currentHour + 1) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 2) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 2])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 2]}
        meridiem={(currentHour + 2) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 3) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 3])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 3]}
        meridiem={(currentHour + 3) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 4) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 4])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 4]}
        meridiem={(currentHour + 4) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 5) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 5])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 5]}
        meridiem={(currentHour + 5) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 6) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 6])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 6]}
        meridiem={(currentHour + 6) % 24 < 12 ? "am" : "pm"}
      />
      <HourlyCard
        time={(currentHour + 7) % 12}
        temp={`${Math.floor(hourlyTempsArray[currentTimeIdx + 7])}\u00B0`}
        code={weatherCodesArray[currentTimeIdx + 7]}
        meridiem={(currentHour + 7) % 24 < 12 ? "am" : "pm"}
      />
    </aside>
  );
};

export default HourlyForecast;
