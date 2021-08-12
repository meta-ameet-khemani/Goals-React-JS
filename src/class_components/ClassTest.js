import React from 'react'

class ClassTest extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    showTime() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    render() {
        this.showTime();
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default ClassTest
