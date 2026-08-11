import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-bar"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="submit-btn" />
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
          <div className="weather-icon">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="partly sunny"
            />
          </div>
          <div className="temperature">90</div>
          <div className="unit">°F</div>
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
