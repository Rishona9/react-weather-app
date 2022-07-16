import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    // Get the timezone offset in milliseconds from the UTC (in milliseconds)
    const timezoneOffset =
      new Date(response.data.dt * 1000).getTimezoneOffset() * 60 * 1000;

    // Find current UTC time in epoch (in milliseconds)
    const currentUTCTime = response.data.dt * 1000 + timezoneOffset;

    // Now, get the time in the searched city by adding the
    // timezone offset (in milliseconds) to the currentUTCTime
    const searchedCityTime = new Date(
      currentUTCTime + response.data.timezone * 1000
    );
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "48686a1e4c31e9211ef528b4ba4fd1bc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row searchBar">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter city..."
                autoComplete="off"
                autoFocus="on"
                className="form-control cityInput"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1 p-0">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
