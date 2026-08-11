import React, { useState } from "react";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (daily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDaily data={daily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const key = "f37daf9e84tf92dob02174b7ea4039ad";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
