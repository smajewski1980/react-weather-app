import styles from "./UnitsDropdown.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../src/features/weatherSlice";
import {
  toggleUnit,
  toggleTempUnit,
  toggleWindUnit,
  togglePrecipUnit,
} from "../../src/features/unitsSlice";

const UnitsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentUnit = useSelector((state) => state.units.unit);
  const currTempUnit = useSelector((state) => state.units.units.temp);
  const currWindUnit = useSelector((state) => state.units.units.wind);
  const currPrecipUnit = useSelector((state) => state.units.units.precip);
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
              onClick={() => {
                dispatch(toggleUnit());
                dispatch(getWeather());
              }}
            >
              Switch to {currentUnit ? "Metric" : "Imperial"}
            </li>

            <hr />

            <li>
              <span>Temperature</span>
            </li>
            <li
              className={[
                styles.clickable,
                !currTempUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (currTempUnit) {
                  dispatch(toggleTempUnit());
                }
              }}
            >
              Celsius (&deg;C)
            </li>
            <li
              className={[
                styles.clickable,
                currTempUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (!currTempUnit) {
                  dispatch(toggleTempUnit());
                }
              }}
            >
              Farenheit (&deg;F)
            </li>

            <hr className={styles.hr} />
            <li>
              <span>Wind Speed</span>
            </li>
            <li
              className={[
                styles.clickable,
                !currWindUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (currWindUnit) {
                  dispatch(toggleWindUnit());
                }
              }}
            >
              km/h
            </li>
            <li
              className={[
                styles.clickable,
                currWindUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (!currWindUnit) {
                  dispatch(toggleWindUnit());
                }
              }}
            >
              mph
            </li>

            <hr className={styles.hr} />

            <li>
              <span>Precipitation</span>
            </li>
            <li
              className={[
                styles.clickable,
                !currPrecipUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (currPrecipUnit) {
                  dispatch(togglePrecipUnit());
                }
              }}
            >
              Millimeters (mm)
            </li>
            <li
              className={[
                styles.clickable,
                currPrecipUnit && styles.activeLi,
              ].join(" ")}
              onClick={() => {
                if (!currPrecipUnit) {
                  dispatch(togglePrecipUnit());
                }
              }}
            >
              Inches (in)
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default UnitsDropdown;
