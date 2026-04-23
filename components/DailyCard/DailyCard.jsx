import styles from "./DailyCard.module.css";
import getWeatherIconFromCode from "../../src/utilities/getWeatherIconFromCode";

const DailyCard = ({ day, weatherCode }) => {
  return (
    <div className={styles.dailyCard}>
      <p>{day}</p>
      <img
        src={getWeatherIconFromCode(weatherCode)[0]}
        alt='icon'
      />
      <div className={styles.dailyTempWrapper}>
        <p>12&deg;</p>
        <p>47&deg;</p>
      </div>
    </div>
  );
};

export default DailyCard;
