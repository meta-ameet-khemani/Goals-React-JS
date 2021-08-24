import React, { Component } from 'react'

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     temperature: ""
        // }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.onChange(event.target.value);
        // this.setState({
        //     temperature: event.target.value
        // });
    }

    render() {
        return (
            <div>
                <input type="number" value={this.props.value} onChange={this.handleInputChange} />                
            </div>
        )
    }
}
