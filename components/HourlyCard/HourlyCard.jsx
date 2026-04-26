import styles from "./HourlyCard.module.css";
import getWeatherIconFromCode from "../../src/utilities/getWeatherIconFromCode";

const HourlyCard = ({ time, temp, code, meridiem }) => {
  const icon = getWeatherIconFromCode(code);
  return (
    <div className={styles.hourlyCard}>
      <img
        src={icon[0]}
        alt={icon[1]}
        title={icon[1]}
      />
      <p className={styles.hourlyTime}>
        {time === 0 ? "12" : time.toString()}&nbsp;{meridiem}
      </p>
      <p className={styles.hourlyTemp}>{temp}</p>
    </div>
  );
};

export default HourlyCard;
