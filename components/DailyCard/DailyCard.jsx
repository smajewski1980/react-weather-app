import styles from "./DailyCard.module.css";
import getWeatherIconFromCode from "../../src/utilities/getWeatherIconFromCode";

const DailyCard = ({ day, weatherCode, minTemp, maxTemp }) => {
  return (
    <div className={styles.dailyCard}>
      <p>{day}</p>
      <img
        src={getWeatherIconFromCode(weatherCode)[0]}
        alt='icon'
      />
      <div className={styles.dailyTempWrapper}>
        <p>{Math.round(minTemp)}&deg;</p>
        <p>{Math.round(maxTemp)}&deg;</p>
      </div>
    </div>
  );
};

export default DailyCard;
