import { Component } from "react";

class ShowParagraph extends Component {
    
    componentWillUnmount() {
        console.log('Unmounting component');
    }
    
    render() {
        return <p>{this.props.text}</p>
    }
}

export default ShowParagraph;