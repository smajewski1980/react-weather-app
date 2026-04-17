import CurrentWeather from "../components/CurrentWeather";
import DailyForecast from "../components/DailyForecast";
import Header from "../components/header";
import Hero from "../components/Hero";
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
