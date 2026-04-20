import styles from "./UnitsDropdown.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleUnits } from "../../src/features/unitsSlice";

const UnitsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [units, setUnits] = useState("Imperial");

  const currentUnits = useSelector((state) => state.units.units);
  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => (prev = !prev));
  };

  return (
    <>
      <div className={styles.customSelect}>
        <button
          id='selectBtn'
          className={styles.button}
          onClick={handleOpenMenu}
        >
          <img
            src='../../src/assets/images/icon-units.svg'
            alt=''
          />
          <span>Units</span>
          <img
            src='../../src/assets/images/icon-dropdown.svg'
            alt=''
          />
        </button>

        {isOpen && (
          <ul className={styles.selectUL}>
            <li
              className={styles.clickable}
              onClick={() => dispatch(toggleUnits())}
            >
              Switch to {currentUnits ? "Metric" : "Imperial"}
            </li>
            {/* <li className={styles.clickable}>
              Switch to {units == "Imperial" ? "Imperial" : "Metric"}
            </li> */}
            <hr />
            <li>
              <span>Temperature</span>
            </li>
            <li className={styles.clickable}>Celsius (&deg;C)</li>
            <li className={[styles.clickable, styles.activeLi].join(" ")}>
              Farenheit (&deg;F)
            </li>
            <hr className={styles.hr} />
            <li>
              <span>Wind Speed</span>
            </li>
            <li className={styles.clickable}>km/h</li>
            <li className={[styles.clickable, styles.activeLi].join(" ")}>
              mph
            </li>
            <hr className={styles.hr} />
            <li>
              <span>Precipitation</span>
            </li>
            <li className={styles.clickable}>Millimeters (mm)</li>
            <li className={[styles.clickable, styles.activeLi].join(" ")}>
              Inches (in)
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default UnitsDropdown;
