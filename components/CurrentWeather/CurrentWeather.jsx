import CurrentCard from "../CurrentCard/CurrentCard";
import styles from "./CurrentWeather.module.css";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const currPrecipUnit = useSelector((state) => state.units.units.precip);
  const currWindUnit = useSelector((state) => state.units.units.wind);
  const currTempUnit = useSelector((state) => state.units.units.temp);

  // Get current date
  const now = new Date();

  // Format: "Sunday, Jan 1, 1900"
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main>
      <div className={styles.currentWeatherWrapper}>
        <div className={styles.placeTimeWrapper}>
          <h2>Name, Place</h2>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.iconTempWrapper}>
          <img
            src='../src/assets/images/icon-snow.webp'
            alt='snow'
          />
          <p>99&deg;</p>
          <span>{currTempUnit ? " F" : " C"}</span>
        </div>
      </div>
      <div className={styles.currentCardWrapper}>
        <CurrentCard
          title='Feels Like'
          value={`99\u00B0  ${currTempUnit ? "F" : "C"}`}
        />
        <CurrentCard
          title='Humidity'
          value='47%'
        />
        <CurrentCard
          title='Wind'
          value={`99 ${currWindUnit ? "mph" : "km/h"}`}
        />
        <CurrentCard
          title='Precipitation'
          value={`0 ${currPrecipUnit ? "in" : "cm"}`}
        />
      </div>
    </main>
  );
};

export default CurrentWeather;
