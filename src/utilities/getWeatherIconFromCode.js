export default function getWeatherIconFromCode(code) {
  if (code === 0) {
    return ["../src/assets/images/icon-sunny.webp", "sunny"];
  } else if (code > 0 && code < 3) {
    return ["../src/assets/images/icon-partly-cloudy.webp", "partly cloudy"];
  } else if (code === 3) {
    return ["../src/assets/images/icon-overcast.webp", "overcast"];
  } else if (code > 44 && code < 49) {
    return ["../src/assets/images/icon-fog.webp", "fog"];
  } else if (code > 50 && code < 56) {
    return ["../src/assets/images/icon-drizzle.webp", "drizzle"];
  } else if (
    (code > 60 && code < 66) ||
    (code > 79 && code < 83) ||
    (code > 94 && code < 100)
  ) {
    return ["../src/assets/images/icon-rain.webp", "rain"];
  } else if (
    (code > 55 && code < 58) ||
    (code > 65 && code < 68) ||
    (code > 70 && code < 78) ||
    (code > 84 && code < 87)
  ) {
    return ["../src/assets/images/icon-snow.webp", "snow"];
  } else return null;
}
