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
  const currLatitude = useSelector((state) => state.weather.currLatitude);
  const currLongitude = useSelector((state) => state.weather.currLongitude);
  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const buildWeatherURL = (additionalParams = "") => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${currLatitude}&longitude=${currLongitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m&timezone=auto&past_days=0&forecast_days=14${additionalParams}`;
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${!currentUnit ? "&wind_speed_unit=mph" : ""}${!currentUnit ? "&temperature_unit=fahrenheit" : ""}${!currentUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
                }
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${currWindUnit ? "&wind_speed_unit=mph" : ""}${!currTempUnit ? "&temperature_unit=fahrenheit" : ""}${currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${currWindUnit ? "&wind_speed_unit=mph" : ""}${!currTempUnit ? "&temperature_unit=fahrenheit" : ""}${currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
                }
              }}
            >
              Fahrenheit (&deg;F)
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${!currWindUnit ? "&wind_speed_unit=mph" : ""}${currTempUnit ? "&temperature_unit=fahrenheit" : ""}${currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${!currWindUnit ? "&wind_speed_unit=mph" : ""}${currTempUnit ? "&temperature_unit=fahrenheit" : ""}${currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${currWindUnit ? "&wind_speed_unit=mph" : ""}${currTempUnit ? "&temperature_unit=fahrenheit" : ""}${!currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
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
                if (currLatitude && currLongitude) {
                  const updated_URL = buildWeatherURL(
                    `${currWindUnit ? "&wind_speed_unit=mph" : ""}${currTempUnit ? "&temperature_unit=fahrenheit" : ""}${currPrecipUnit ? "&precipitation_unit=inch" : ""}`,
                  );
                  dispatch(getWeather(updated_URL));
                  setIsOpen(false);
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
