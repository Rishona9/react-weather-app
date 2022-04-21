import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      icon: response.data.weather[0].icon,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter city..."
                autocomplete="off"
                className="form-control cityInput"
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
        <p className="dayTime">
          <FormattedDate date={weatherData.date} />
        </p>
        <p className="city">{weatherData.city}</p>
        <p className="temperature">{Math.round(weatherData.temperature)}°F</p>
        <p className="icon text-capitalize">
          <img src={weatherData.icon} alt={weatherData.description} />
        </p>
        <p className="description text-capitalize">{weatherData.description}</p>

        <div className="row windHumidity">
          <div className="col-3">
            <p>Wind: {Math.round(weatherData.wind)} mph</p>
          </div>
          <div className="col-3">
            <p>Humidity: {Math.round(weatherData.humidity)}%</p>
          </div>
          <div className="col-3">
            <p className="feelsLike">
              Feels Like: {Math.round(weatherData.feelslike)}°F
            </p>
          </div>
        </div>
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
    const apiKey = "48686a1e4c31e9211ef528b4ba4fd1bc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
