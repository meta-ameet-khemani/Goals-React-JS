import React, { Component } from 'react'

class DifferentWays extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
        };
        // third approach
        // this.changeMessage = this.changeMessage.bind(this);
    }

    // changeMessage() {
    //     console.log(this);
    //     // error: to solve this we have 4 approaches: for line no: 25
    //     this.setState({
    //         message: 'Good Bye',
    //     });
    // }

    // fourth approach
    changeMessage = () => {
        console.log(this);
        this.setState({
            message: 'Good Bye',
        });
    }

    render() {
        return (
            <div>
                <center>
                    {this.state.message}
                    {/* <button onClick={this.changeMessage}>Bye</button>       */}
                    {/* first approach */}
                    {/* <button onClick={() => this.changeMessage()}>Bye</button> */}
                    {/* second approach */}
                    {/* <button onClick={this.changeMessage.bind(this)}>Bye</button> */}
                    {/* third approach */}
                    {/* <button onClick={this.changeMessage}>Bye</button> */}
                    {/* fourth approach */}
                    <button onClick={this.changeMessage}>Bye</button>
                </center>
            </div>
        )
    }
}

export default DifferentWays
