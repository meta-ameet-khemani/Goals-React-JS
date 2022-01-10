import { Component } from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false,
            errorMsg: ''
        };
    }

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            errorMsg: error
        });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong : {this.state.errorMsg.toString()}</p>
        }
        return <div>
            {this.props.children}
        </div>
    }

}

export default ErrorBoundary;