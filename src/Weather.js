import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <p className="dayTime">Monday 4:20pm</p>
      <p className="city">Cleveland</p>
      <p className="temperature">65°F</p>
      <p className="icon">☀️</p>
      <p className="description">Sunny</p>

      <div className="row windHumidity">
        <div className="col-3">
          <p>Wind: 10mph</p>
        </div>
        <div className="col-3">
          <p>Humidity: 45%</p>
        </div>
        <div className="col-3">
          <p className="feelsLike">Feels Like: 58°F</p>
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
}
