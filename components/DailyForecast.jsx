import React from "react";
import DailyCard from "./DailyCard";

const DailyForecast = () => {
  return (
    <aside>
      <h3>DailyForecast</h3>
      <div className='forecast-card-wrapper'>
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
        <DailyCard />
      </div>
    </aside>
  );
};

export default DailyForecast;
