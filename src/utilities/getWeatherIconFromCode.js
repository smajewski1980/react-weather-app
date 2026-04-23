export default function getWeatherIconFromCode(code) {
  let imgAltText = "";
  if (code === 0) {
    imgAltText = "sunny";
    return ["../src/assets/images/icon-sunny.webp", imgAltText];
  } else if (code > 0 && code < 3) {
    imgAltText = "partly cloudy";
    return ["../src/assets/images/icon-partly-cloudy.webp", imgAltText];
  } else if (code === 3) {
    imgAltText = "overcast";
    return ["../src/assets/images/icon-overcast.webp", imgAltText];
  } else if (code > 44 && code < 49) {
    imgAltText = "fog";
    return ["../src/assets/images/icon-fog.webp", imgAltText];
  } else if (code > 50 && code < 56) {
    imgAltText = "drizzle";
    return ["../src/assets/images/icon-drizzle.webp", imgAltText];
  } else if (
    (code > 60 && code < 66) ||
    (code > 79 && code < 83) ||
    (code > 94 && code < 100)
  ) {
    imgAltText = "rain";
    return ["../src/assets/images/icon-rain.webp", imgAltText];
  } else if (
    (code > 55 && code < 58) ||
    (code > 65 && code < 68) ||
    (code > 70 && code < 78) ||
    (code > 84 && code < 87)
  ) {
    imgAltText = "snow";
    return ["../src/assets/images/icon-snow.webp", imgAltText];
  } else return null;
}
