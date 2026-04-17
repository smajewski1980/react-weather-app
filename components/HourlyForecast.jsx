import React from "react";
import HourlyCard from "./HourlyCard";

const HourlyForecast = () => {
  return (
    <aside>
      <div className='hourly-header'>
        <h3>Hourly forecast</h3>
        <div className='day-dropdown'>
          <div className='day-closed'>
            <p>Tuesday</p>
            <img
              src='../src/assets/images/icon-dropdown.svg'
              alt=''
            />
          </div>
        </div>
      </div>

      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
    </aside>
  );
};

export default HourlyForecast;
