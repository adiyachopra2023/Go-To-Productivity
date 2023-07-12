import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [query, setQuery] = useState('Jaipur');
  const [weatherIcon, setWeatherIcon] = useState('');

  const handleCityChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=43d85a50fe360d7fae6c251c86323df8&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setCity(data);

        if (data.weather && data.weather.length > 0) {
          const weatherCode = data.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${weatherCode}.png`;
          setWeatherIcon(iconUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="weather-container">
      <h2 className="weather-header">Weather</h2>
      <div>
        <input className="weather-input" type="search" placeholder="Enter City.." onChange={handleCityChange} />
      </div>

      {city && (
        <div className="weather-info">
          <div className="weather-desc">
            {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
          </div>
          <h2 className="weather-location">{query}</h2>
          <div className="weather-description">
            {city.main && (
              <>
                <i className="fa-solid fa-temperature-three-quarters"></i> {city.main.temp}°C
                <p>
                  Feels Like: {city.main.feels_like}°C | Humidity: {city.main.humidity}%
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
