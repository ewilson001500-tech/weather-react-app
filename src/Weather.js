import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });

    setReady(true);
  }

  function search() {
    const apiKey = "f37daf9e84tf92dob02174b7ea4039ad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleChanges(event){
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-bar"
                onChange={handleChanges}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="submit-btn" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
