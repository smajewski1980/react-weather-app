import styles from "./CurrentCard.module.css";

const CurrentCard = ({ title, value }) => {
  return (
    <div className={styles.currentCard}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default CurrentCard;
