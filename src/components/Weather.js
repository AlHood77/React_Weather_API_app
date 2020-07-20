import React from 'react';
import Moment from 'react-moment';





const Weather = ({ weather }) => {

    
    
    if (!weather) return null
    return (
        
        <div className="Weather">
            {(typeof weather.main != "undefined") ? (
                <div>
                    <h1>{weather.name}, {weather.sys.country}</h1>
                    <h2>{Math.round(weather.main.temp)}°C</h2>
                    <div className="Weather-temp">
                        <p>Low: {Math.round(weather.main.temp_min)}°C</p>
                        <p>High: {Math.round(weather.main.temp_max)}°C</p>
                    </div>
                    <p>{weather.weather[0].main}</p> 
                    <div className="Weather-sun">
                        <p>Sunrise: <Moment format="HH:mm" unix>{weather.sys.sunrise}</Moment></p> 
                        <p>Sunset: <Moment format="HH:mm" unix>{weather.sys.sunset}</Moment></p> 
                    </div>
                     
                    
                </div>
            ) : ('')}
         
        </div> 
        
       
    );
} 

export default Weather;