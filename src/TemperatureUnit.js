import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="TemperatureUnit">
        {Math.round(props.fahrenheit)}
        <div className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </div>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;

    return (
      <span className="TemperatureUnit">
        {Math.round(celsius)}
        <div className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </div>
      </span>
    );
  }
}
