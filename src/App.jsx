import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HourlyForecast from "../components/HourlyForecast";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </>
  );
}

export default App;
