import React from "react";
import CurrentCard from "./CurrentCard";

const CurrentWeather = () => {
  return (
    <main>
      <div className='current-weather-wrapper'>
        <div className='place-time-wrapper'>
          <h2>Name, Place</h2>
          <p>Sunday, Jan 1, 1900</p>
        </div>
        <div className='icon-temp-wrapper'>
          <img
            src='../src/assets/images/icon-snow.webp'
            alt='snow'
          />
          <p>99&deg;</p>
        </div>
      </div>
      <CurrentCard />
      <CurrentCard />
      <CurrentCard />
      <CurrentCard />
    </main>
  );
};

export default CurrentWeather;
