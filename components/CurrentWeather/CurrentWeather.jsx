import CurrentCard from "../CurrentCard/CurrentCard";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  return (
    <main>
      <div className={styles.currentWeatherWrapper}>
        <div className={styles.placeTimeWrapper}>
          <h2>Name, Place</h2>
          <p>Sunday, Jan 1, 1900</p>
        </div>
        <div className={styles.iconTempWrapper}>
          <img
            src='../src/assets/images/icon-snow.webp'
            alt='snow'
          />
          <p>99&deg;</p>
        </div>
      </div>
      <CurrentCard />
      <CurrentCard />
      <CurrentCard />
      <CurrentCard />
    </main>
  );
};

export default CurrentWeather;
