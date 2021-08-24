import React, { Component } from 'react'
import TemperatureInput from './temperature_input';

export default class BoilingVerdict extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verdict: false,
            celsiusTemperature: "",
            fahrenheitTemperature: "",
        }
        this.handleCelsiusInput = this.handleCelsiusInput.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusInput(value) {
        this.setState({
            celsiusTemperature: value,
            fahrenheitTemperature: this.toFahrenheit(value),
            verdict: value >= 100,
        });
    }

    handleFahrenheitChange(value) {
        this.setState({
            celsiusTemperature: this.toCelsius(value),
            fahrenheitTemperature: value,
            verdict: value >= 212,
        });
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    render() {
        const verdict = this.state.verdict === true ? "The water will boil" : "The water will not boil";
        return (
            <div>
                <center>
                    Celsius: <TemperatureInput value={this.state.celsiusTemperature} onChange={this.handleCelsiusInput} />
                    Fahrenheit: <TemperatureInput value={this.state.fahrenheitTemperature} onChange={this.handleFahrenheitChange} />
                    <h3>{verdict}</h3>
                </center>
            </div>
        )
    }
}
