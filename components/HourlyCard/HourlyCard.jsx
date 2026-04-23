import styles from "./HourlyCard.module.css";
import getWeatherIconFromCode from "../../src/utilities/getWeatherIconFromCode";

const HourlyCard = ({ time, temp, code, meridiem }) => {
  return (
    <div className={styles.hourlyCard}>
      <img
        src={getWeatherIconFromCode(code)[0]}
        alt={getWeatherIconFromCode(code)[1]}
        title={getWeatherIconFromCode(code)[1]}
      />
      <p className={styles.hourlyTime}>
        {time === 0 ? "12" : time.toString()}&nbsp;{meridiem}
      </p>
      <p className={styles.hourlyTemp}>{temp}</p>
    </div>
  );
};

export default HourlyCard;
