import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import {
  getWeather,
  setCurrentCity,
  setCurrLatitude,
  setCurrLongitude,
} from "../../src/features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityData, setCityData] = useState([]);
  const [noCityFound, setNoCityFound] = useState(false);
  const [currentCityId, setCurrentCityId] = useState(-1);

  // boolean, true = Imperial, false = Metric
  // const currentUnit = useSelector((state) => state.units.unit);
  const currTempUnit = useSelector((state) => state.units.units.temp);
  const currWindUnit = useSelector((state) => state.units.units.wind);
  const currPrecipUnit = useSelector((state) => state.units.units.precip);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`,
          );
          const data = await res.json();
          if (data.results) {
            setCityData([...data.results]);
            setNoCityFound(false);
          } else {
            setNoCityFound(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      setCityData([]);
    }
  }, [searchTerm]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedCity;
    if (searchTerm.includes(",")) {
      selectedCity = cityData.find(
        (city) =>
          city.admin1 === searchTerm.split(",")[1].trim() &&
          city.name === searchTerm.split(",")[0],
      );
    } else {
      selectedCity = cityData.find((city) => city.name === searchTerm);
    }

    const { latitude, longitude } = selectedCity;
    dispatch(setCurrLatitude(latitude));
    dispatch(setCurrLongitude(longitude));

    const WEATHER_URL =
      "https://" +
      "api.open-meteo.com/v1/forecast" +
      `?latitude=${latitude}&longitude=${longitude}` +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
      "&hourly=temperature_2m,weather_code" +
      "&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m" +
      "&timezone=auto" +
      "&past_days=0" +
      "&forecast_days=14" +
      `${currWindUnit ? "&wind_speed_unit=mph" : ""}` +
      `${currTempUnit ? "&temperature_unit=fahrenheit" : ""}` +
      `${currPrecipUnit ? "&precipitation_unit=inch" : ""}`;

    dispatch(getWeather(WEATHER_URL));
    dispatch(setCurrentCity(searchTerm));
  };

  return (
    <>
      <h1 className={styles.heroH1}>How's the sky looking today?</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.searchForm}
      >
        <div className={styles.searchInputWrapper}>
          <input
            type='text'
            list='cityList'
            name='searchTerm'
            id='search-term'
            placeholder='Search for a city...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete='off'
          />

          {noCityFound && !searchTerm.includes(",") && <p>No results found.</p>}

          <datalist id='cityList'>
            {cityData &&
              cityData.map(
                (city, idx) =>
                  idx < 5 && (
                    <option
                      key={city.id}
                      value={`${city.name}${city.admin1 ? ", " + city.admin1 : ""}`}
                      data-id={city.id}
                    >
                      {/* {city.admin1} */}
                    </option>
                  ),
              )}
          </datalist>
        </div>
        <button type='submit'>Search</button>
      </form>
    </>
  );
};

export default Hero;
