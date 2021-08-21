import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherData.css";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const baseImgUrl = "http://openweathermap.org/img/wn/";

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=532be5b90393df1056cb85f1d768a93d"
      )
      .then((res) => {
        setWeatherData(res.data);
      });
  }, []);

  // Convert Kelvin to Celsius
  function convertToCelsius(k) {
    return Math.round(k - 273.15);
  }

  // Capitalize function
  function capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  console.log(weatherData);
  if (weatherData) {
    return (
      <div className="weatherData">
        <div className="weather__info">
          <span className="weather__main">{weatherData.weather[0].main}</span>
          <div className="weather__header">
            <img
              src={`${baseImgUrl}${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].main}
            />
            <span>{convertToCelsius(weatherData.main.temp)}&deg;C</span>
          </div>
          <div className="weather__desc">
            <p>
              Feels like {convertToCelsius(weatherData.main.feels_like)}&deg;C.{" "}
              {capitalize(weatherData.weather[0].description)}.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading Weather...</div>;
  }
}

export default WeatherInfo;
