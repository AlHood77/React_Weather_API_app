import React, { Component } from 'react';
import Headings from '../components/Headings';
import Form from '../components/Form';
import Weather from '../components/Weather';


class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherData: [],
            selectedCity: ""     
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCity}&APPID=10e1bea03aeb3faa259cbdf78db00ec8`)
            .then(res => res.json())
            .then(result => this.setState({ weatherData: result.main }))            
    }

    handleFormSubmit({city}) {
        this.setState({selectedCity: city})
    }

    render() {
        return (
            <div>
                <Headings />
                <Form onFormSubmit={this.handleFormSubmit} />
                <Weather weather={this.state.weatherData} />
            </div>  
        );
    }
}

export default WeatherContainer;