import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
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
        <div className="col-1">
          <input type="submit" value="Current Location" />
        </div>
      </div>
      <p>Cleveland</p>
      <p>65° F</p>
      <p>Raining</p>
      <div className="row">
        <div className="col-2">
          <p>Wind: 10mph</p>
        </div>
        <div className="col-2">
          <p>Humidity: 45%</p>
        </div>
        <div className="col-2">
          <p>Feels Like: 58° F</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p>MON</p>
        </div>
        <div className="col-1">
          <p>TUES</p>
        </div>
        <div className="col-1">
          <p>WED</p>
        </div>
        <div className="col-1">
          <p>THU</p>
        </div>
        <div className="col-1">
          <p>FRI</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p>Sunny</p>
        </div>
        <div className="col-1">
          <p>Cloudy</p>
        </div>
        <div className="col-1">
          <p>Sunny</p>
        </div>
        <div className="col-1">
          <p>Raining</p>
        </div>
        <div className="col-1">
          <p>Cloudy</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p>55° / 40°</p>
        </div>
        <div className="col-1">
          <p>55° / 40°</p>
        </div>
        <div className="col-1">
          <p>55° / 40°</p>
        </div>
        <div className="col-1">
          <p>55° / 40°</p>
        </div>
        <div className="col-1">
          <p>55° / 40°</p>
        </div>
      </div>
    </div>
  );
}
