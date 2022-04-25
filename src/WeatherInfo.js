import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <p className="dayTime">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="city">{props.data.city}</p>
      <p className="temperature">{Math.round(props.data.temperature)}°F</p>
      <div className="icon text-capitalize">
        <WeatherIcon code={props.data.icon} size={45} />
      </div>
      <p className="description text-capitalize">{props.data.description}</p>

      <div className="row windHumidity">
        <div className="col-3">
          <p>Wind: {Math.round(props.data.wind)} mph</p>
        </div>
        <div className="col-3">
          <p>Humidity: {Math.round(props.data.humidity)}%</p>
        </div>
        <div className="col-3">
          <p className="feelsLike">
            Feels Like: {Math.round(props.data.feelslike)}°F
          </p>
        </div>
      </div>
    </div>
  );
}
