import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import "./App.css";
import Error from "../components/Error/Error";
import { useSelector } from "react-redux";

function App() {
  const appIsShowing = useSelector((state) => state.weather.appIsShowing);
  const isLoading = useSelector((state) => state.weather.isLoading);

  return (
    <>
      <Header />
      <Hero />
      {isLoading && (
        <p className='loading'>
          Loading<span className='animation loading1'>.</span>
          <span className='animation loading2'>.</span>
          <span className='animation loading3'>.</span>
        </p>
      )}
      {appIsShowing && (
        <div className='mainLayout'>
          <div className='innerLayout'>
            <CurrentWeather />
            <DailyForecast />
          </div>
          <HourlyForecast />
        </div>
      )}
    </>
  );
}

export default App;
