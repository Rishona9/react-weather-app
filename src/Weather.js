import react, { useState } from "react";

export default function Weather(props) {
  return (
    <ul className="ShowWeather">
      <li>Temperature: {Math.round(props.temperature)}°F</li>
      <li>Description: {props.description} </li>
      <li>Humidity: {props.humidity}% </li>
      <li>Wind: {Math.round(props.wind)}mph </li>
      <li>
        <img
          alt=""
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        />
      </li>
    </ul>
  );
}
