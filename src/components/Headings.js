import React, { Component } from 'react'
import Moment from 'react-moment';

class Headings extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="Header">
                <h1>Weather Finder</h1>
                <p><Moment format="Do MMMM YYYY"></Moment></p>
                <p>Check out the weather where you are and more...</p>
            </div>
        );
    }
}

export default Headings;