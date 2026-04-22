import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getWeather } from "../../src/features/weatherSlice";
import { useDispatch } from "react-redux";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityData, setCityData] = useState([]);
  const [noCityFound, setNoCityFound] = useState(false);

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
  const WEATHER_URL = `url blah blah ${searchTerm}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(WEATHER_URL));
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

          {noCityFound && <p>No results found.</p>}

          <datalist id='cityList'>
            {cityData &&
              cityData.map(
                (city, idx) =>
                  idx < 5 && (
                    <option
                      key={idx}
                      value={city.name}
                    >
                      {city.admin1}
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
