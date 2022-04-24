import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter city..."
                autocomplete="off"
                autoFocus="on"
                className="form-control cityInput"
                onChange={handleCityChange}
              />
            </div>
            <div class="col p-0">
              <input type="submit" value="Search" className="btn btn-primary" />
              <input
                type="submit"
                value="Use location"
                className="btn btn-location"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <div className="row forecastDays">
          <div className="col-2">
            <p>MON</p>
          </div>
          <div className="col-2">
            <p>TUES</p>
          </div>
          <div className="col-2">
            <p>WED</p>
          </div>
          <div className="col-2">
            <p>THU</p>
          </div>
          <div className="col-2">
            <p>FRI</p>
          </div>
        </div>
        <div className="row forecastIcons">
          <div className="col-2">
            <p>☀️</p>
          </div>
          <div className="col-2">
            <p>⛅</p>
          </div>
          <div className="col-2">
            <p>🌧️</p>
          </div>
          <div className="col-2">
            <p>⛅</p>
          </div>
          <div className="col-2">
            <p>☁️</p>
          </div>
        </div>
        <div className="row forecastMinMax">
          <div className="col-2">
            <p>55° / 40°</p>
          </div>
          <div className="col-2">
            <p>55° / 40°</p>
          </div>
          <div className="col-2">
            <p>55° / 40°</p>
          </div>
          <div className="col-2">
            <p>55° / 40°</p>
          </div>
          <div className="col-2">
            <p>55° / 40°</p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
