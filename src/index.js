import "./styles.css";

function cityWeather(city) {
  fetch(`${process.env.API_URL}${city}&units=metric&appid=${process.env.aapi}`)
    .then((weather) => weather.json())
    .then((data) => displayWeather(data));
}

function displayWeather(data) {}

cityWeather("Barcelona");
