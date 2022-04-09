import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function updateWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124f39a2ff23ede6ec7ae29df4cc507f&units=imperial`;
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
        <input type="submit" value="Use my Location" />
      </form>
      {temperature !== null ? (
        <Weather
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      ) : (
        ``
      )}
    </div>
  );
}
