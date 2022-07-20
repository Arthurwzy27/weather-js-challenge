import "./styles.css";

let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let api = "API_KEY HERE"; // e.g 974658676285082805

function cityWeather(city) {
  // fetch data for the selected city
  fetch(`${url}${city}&units=metric&appid=${api}`)
    .then((weather) => weather.json())
    .then((data) => console.log(data) && displayWeather(data));
}

function displayWeather(data) {
  const { name } = data;
  const { description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  console.log(
    `Today in ${name}, the weather will be ${description} with a temperature of ${temp}°C. Humidty: ${humidity}% & wind speed of ${speed}kph.`
  );
  return { name, description, temp, humidity, speed };
}

cityWeather("barcelona");
