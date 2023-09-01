import React, { useState, useRef} from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';



export const fetchWeatherData = async (city) => {
  const apiKey = '687ee84b41f5d9e874cadc9b8b916734';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      // Location found, return data
      return data;
    } else {
      // Location not found, return an object with an error message
      return { error: 'Location not found' };
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return { error: 'An error occurred' };
  }
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef(null);
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleGetWeather = async () => {
    focusInput();
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
    }
  };

  return (
    
    <div className="App">
      <div className='weather'>
        <h1>Weather station</h1>
        <label onClick={focusInput}>
          <input
            ref={inputRef}
            className='place-holder'
            type="text"
            placeholder="Enter city name"
            onChange={handleCityChange}
          />
        </label>

        <button className='button' onClick={handleGetWeather}>
          Get Weather
        </button>
      </div>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
     
    
  );
}

export default App;
