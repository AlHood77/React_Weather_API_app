import React, { Component } from 'react';
import Headings from '../components/Headings';
import Form from '../components/Form';
import Weather from '../components/Weather';

class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherData: [],
            selectedCity: "",
            selectedCountry: "",
            temp: ''           
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    fetchData() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCity},${this.state.selectedCountry}&units=metric&APPID=10e1bea03aeb3faa259cbdf78db00ec8`)
            .then(res => res.json())
            .then(result => this.setState({ weatherData: result}))            
    }


    // componentDidMount() {
    //     if (this.state.selectedCity !== this.selectedCity) {
    //         this.fetchData();    
    //     }
               
    // }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedCity !== prevState.selectedCity) {
            this.fetchData(this.state.selectedCity);  
        }
        
    }


    handleFormSubmit({city, country}) {
        this.setState({selectedCity: city, selectedCountry: country})
    }

    render() {
        return (
            <div className={
                (typeof this.state.weatherData.main != "undefined")
                    ? ((this.state.weatherData.main.temp > 12)
                        ? 'WeatherContainer-warm'
                        : 'WeatherContainer-cold')
            : 'WeatherContainer'} >
                
                <Headings />
                <Form onFormSubmit={this.handleFormSubmit} />
                <Weather
                    weather={this.state.weatherData}
                    
                />
            </div>  
        );
    }
}

export default WeatherContainer;