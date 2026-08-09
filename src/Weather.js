import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>Houston</h1>
      <ul>
        <li>Sunday 3:08</li>
        <li>Partly sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="partly sunny"
          />
          90°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
