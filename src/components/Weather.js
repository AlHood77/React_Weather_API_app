import React from 'react';

const Weather = ({ weather }) => {
    if(!weather) return null

    return (

        <div>
            {(typeof weather.main != "undefined") ? (
            <div>
                    <h1>{weather.name}, {weather.sys.country} </h1>
                    <h2>{Math.round(weather.main.temp)}°C</h2>
                    <h2>{weather.weather[0].main}</h2>
            
            </div>
            ) : ('')}
        </div>
        
    );
} 

export default Weather;