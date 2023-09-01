/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function WeatherDisplay({ data }) {
  
  
  if (data.error) {
  return (
    <div>
      <h2>CITY NOT FOUND</h2>
    </div>
  );}
  else if(data){
    let url = "https://openweathermap.org/img/wn/icon.png";
    url = url.replace("icon", data.weather[0].icon);
    return(
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>

     <div className='icon'>
     <p>Weather Condition: {data.weather[0].description} </p>
     <img src={url}/>
      </div> 
      
      
      
    </div>
    );
  }
}

export default WeatherDisplay;
