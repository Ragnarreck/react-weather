import React from "react";
import windIcon from "../static/img/wind.jpg";
import temperatureIcon from '../static/img/temperature.png';
import styles from '../static/styles/City.css';

const City = ({ info }) => {
  const { wind, main, weather, name } = info;
  return (
    <div className="city">
      <h2>{name}</h2>
      <div className="picture">
        <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="Weather icon" />
      </div>
      <div className="windContainer">
        <div className="windIcon">
          <img width={50} height={50} src={windIcon} alt="wind" />
        </div>
        <div className="windSpeed">{wind.speed} m/s</div>
      </div>
      <div className="temperatureContainer">
        <div className="temperatureIcon">
          <img width={50} height={50} src={temperatureIcon} alt="temperature" />
        </div>
        <div className="temperature">{main.temp}&#176;С</div>
      </div>
      <div className="humidityContainer">
        Humidity: {main.humidity} %
      </div>
    </div>
  );
};

export default City;