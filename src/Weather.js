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
              class="form-control"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search" />
          </div>
          <div className="col">
            <input type="submit" value="Current Location" />
          </div>
        </div>
      </form>
      <p>Monday 4:20pm</p>
      <p>Cleveland</p>
      <p>☀️</p>
      <p>65° F</p>
      <p>Feels Like: 58° F</p>
      <p>Sunny</p>
      <div className="row">
        <div className="col-3">
          <p>Wind: 10mph</p>
        </div>
        <div className="col-3">
          <p>Humidity: 45%</p>
        </div>
      </div>
      <div className="row">
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
      <div className="row">
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
      <div className="row">
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
