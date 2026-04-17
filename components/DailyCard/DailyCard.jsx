import styles from "./DailyCard.module.css";

const DailyCard = () => {
  return (
    <div className={styles.dailyCard}>
      <p>day</p>
      <img
        src='../../src/assets/images/icon-storm.webp'
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
