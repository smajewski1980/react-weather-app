import styles from "./HourlyCard.module.css";

const HourlyCard = ({ time, temp }) => {
  return (
    <div className={styles.hourlyCard}>
      <img
        src='../../src/assets/images/icon-rain.webp'
        alt='weather icon'
      />
      <p className={styles.hourlyTime}>{time}</p>
      <p className={styles.hourlyTemp}>{temp}</p>
    </div>
  );
};

export default HourlyCard;
