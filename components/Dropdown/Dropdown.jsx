import styles from "./Dropdown.module.css";

const UnitsDropdown = ({ label, color, gear }) => {
  let dropdownColor;
  color === "dark"
    ? (dropdownColor = "var(--Neutral-700)")
    : (dropdownColor = "var(--Neutral-600)");

  let padding;
  color === "dark" ? (padding = "0.35rem 0.65rem") : (padding = "0.5rem 1rem");

  return (
    <>
      <div aria-role='menu'>
        <div
          className={styles.dropdownTop}
          style={{ backgroundColor: dropdownColor, padding: padding }}
          aria-hidden='true'
        >
          {gear && (
            <img
              src='../src/assets/images/icon-units.svg'
              alt='units menu'
            />
          )}

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
