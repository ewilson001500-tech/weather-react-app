import React from "react";

export default function ForecastDaily(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  
  function icon() {
    let icon = props.data.condition.icon_url;
    return icon;
  }

  function max() {
    let max = Math.round(props.data.temperature.maximum);
    return max;
  }

  function min() {
    let min = Math.round(props.data.temperature.minimum);
    return min;
  }

  return (
    <div>
      <h5>{day()}</h5>
      <img src={icon()} alt="props.data.condition.description" />
      <p>
        <strong>{max()}°</strong> {min()}°
      </p>
    </div>
  );
}
