import styles from "./HourlyDropdown.module.css";

const HourlyDropdown = () => {
  return (
    <select
      name='hourlyDropdown'
      className={styles.hourlyDropdown}
    >
      <option value='sunday'>Sunday</option>
      <option value='monday'>Monday</option>
      <option value='tuesday'>Tuesday</option>
      <option value='wednesday'>Wednesday</option>
      <option value='thursday'>Thursday</option>
      <option value='friday'>Friday</option>
      <option value='saturday'>Saturday</option>
    </select>
  );
};

export default HourlyDropdown;
