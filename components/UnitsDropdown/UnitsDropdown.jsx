import styles from "./UnitsDropdown.module.css";

const UnitsDropdown = () => {
  return (
    <>
      <div
        aria-role='menu'
        className={styles.unitsDropdownWrapper}
      >
        <div
          className={styles.unitsDropdownTop}
          aria-hidden='true'
        >
          <img
            src='../src/assets/images/icon-units.svg'
            alt='units menu'
          />
          <p>Units</p>
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
