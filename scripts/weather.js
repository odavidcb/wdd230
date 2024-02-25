const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=East%20London,za&APPID=617907d6c031fe35f21cee9e2845fc38";

const temperature = document.querySelector("#current-temp");
const humidity = document.querySelector("#current-humidity");
const wind = document.querySelector("#current-wind");
const icon = document.querySelector("#weather-icon");
const figcap = document.querySelector("#weather-desc");

async function getWeather() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const weather = await response.json();
      // console.log(weather);
      displayWeather(weather);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";
  icon.src =
    "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  icon.alt = data.weather[0].description;
  figcap.innerHTML = titleCase(data.weather[0].description);
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

getWeather();