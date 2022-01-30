import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }

    render() {
        if (this.state.counter >= 5) {
            throw new Error("Can't handle this much counts .....");
        }
        return <div>
            Buggy Counter: { this.state.counter }
            <br />
            <button onClick={() => this.setState(({ counter }) => ({ counter: counter + 1 }) )}>Add</button>
            <button onClick={() => this.setState(({ counter }) => ({ counter: counter - 1 }) )}>Subtract</button>
        </div>
    }
}

export default Counter;