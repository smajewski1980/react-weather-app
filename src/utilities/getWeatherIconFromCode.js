import iconSunny from "../assets/images/icon-sunny.webp";
import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import iconOvercast from "../assets/images/icon-overcast.webp";
import iconFog from "../assets/images/icon-fog.webp";
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import iconRain from "../assets/images/icon-rain.webp";
import iconSnow from "../assets/images/icon-snow.webp";

export default function getWeatherIconFromCode(code) {
  if (code === 0) {
    return [iconSunny, "sunny"];
  } else if (code > 0 && code < 3) {
    return [iconPartlyCloudy, "partly cloudy"];
  } else if (code === 3) {
    return [iconOvercast, "overcast"];
  } else if (code > 44 && code < 49) {
    return [iconFog, "fog"];
  } else if (code > 50 && code < 56) {
    return [iconDrizzle, "drizzle"];
  } else if (
    (code > 60 && code < 66) ||
    (code > 79 && code < 83) ||
    (code > 94 && code < 100)
  ) {
    return [iconRain, "rain"];
  } else if (
    (code > 55 && code < 58) ||
    (code > 65 && code < 68) ||
    (code > 70 && code < 78) ||
    (code > 84 && code < 87)
  ) {
    return [iconSnow, "snow"];
  } else return null;
}
