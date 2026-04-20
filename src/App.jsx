import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import "./App.css";
import Error from "../components/Error/Error";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='mainLayout'>
        <div className='innerLayout'>
          <CurrentWeather />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </>
  );
}

export default App;
