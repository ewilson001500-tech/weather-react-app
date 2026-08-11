import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="weather-icon">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="temperature">
            <TemperatureUnit fahrenheit={props.data.temp} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
