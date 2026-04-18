import styles from "./Dropdown.module.css";

const UnitsDropdown = ({ label, color }) => {
  let dropdownColor;
  color === "dark"
    ? (dropdownColor = "var(--Neutral-700)")
    : (dropdownColor = "var(--Neutral-600)");

  return (
    <>
      <div aria-role='menu'>
        <div
          className={styles.dropdownTop}
          style={{ backgroundColor: dropdownColor }}
          aria-hidden='true'
        >
          <img
            src='../src/assets/images/icon-units.svg'
            alt='units menu'
          />
          <p>{label}</p>
          <img
            src='../src/assets/images/icon-dropdown.svg'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default UnitsDropdown;
