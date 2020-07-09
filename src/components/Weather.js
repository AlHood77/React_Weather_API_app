import React from 'react';

const Weather = ({ weather }) => {
    if(!weather) return null

    return (
        <div>
            <h1>{weather.temp}</h1>
        </div>
    );
} 

export default Weather;