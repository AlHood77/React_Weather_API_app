import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: "",
            country: ""
        };
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const city = this.state.city;
        const country = this.state.country;
        if (!city)  {
            return
        }

        this.props.onFormSubmit({
            city: city,
            country: country
        });

        this.setState({
            city: '',
            country: ''
        })
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value,
        })
    }

    handleCountryChange(event) {
        this.setState({
            country: event.target.value
        })
    }

    render() {
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.city}
                    placeholder="Enter City"
                    onChange={this.handleCityChange}
                />
                <input
                    type="text"
                    value={this.state.country}
                    placeholder="Enter Country (if required)"
                    onChange={this.handleCountryChange}
                />
               <input className="Form-submit" type="submit" value="Get Weather" />
            </form>
        );
    }
}

export default Form;