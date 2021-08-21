import React from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  // Display todays date
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
  let now = new Date();
  let day = now.getDayName();

  return (
    <div className="app__body">
      <h1>{day}</h1>
      <h3>Toronto, CA</h3>
      <WeatherInfo />
    </div>
  );
}
