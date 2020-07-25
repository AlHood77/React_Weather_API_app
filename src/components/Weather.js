import React, { Component } from 'react';
import Moment from 'react-moment';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {         
         };
    }
 
    render() {
        if (!this.props.weather) return null

        return (
            
        <div className="Weather-wrapper">
            {(typeof this.props.weather.main != "undefined") ? (
                <div className="Weather">
                    <h1>{this.props.weather.name}, {this.props.weather.sys.country}</h1>
                        <h2>{Math.round(this.props.weather.main.temp)}°C</h2>
                        
                    <div className="Weather-temp">
                        <p>Low: {Math.round(this.props.weather.main.temp_min)}°C</p>
                        <p>High: {Math.round(this.props.weather.main.temp_max)}°C</p>
                    </div>
                        
                        <p>{this.props.weather.weather[0].main}</p>
                        
                    <div className="Weather-sun">
                        <p>Sunrise: <Moment
                            unix
                            format="HH:mm">{this.props.weather.sys.sunrise + this.props.weather.timezone}</Moment></p>
                         <p>Sunset: <Moment
                            format="HH:mm"
                            unix>{this.props.weather.sys.sunset + this.props.weather.timezone}</Moment></p>
                    </div>
     
                </div>
            ) : ('')}
            
        </div>       
    );
}
} 

export default Weather;