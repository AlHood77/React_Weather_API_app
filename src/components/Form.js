import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: ""
        };
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const city = this.state.city;
        if (!city) {
            return
        }

        this.props.onFormSubmit({
            city: city
        });

        this.setState({
            city: ''
        })
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.city}
                    placeholder="Enter City"
                    onChange={this.handleCityChange}
                />
               
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;