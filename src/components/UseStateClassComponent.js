import { Component } from "react";

import ShowParagraph from "./ShowParagraph";

// useState allows functional components to have state, like this.state in class components.
// useEffect allows functional components to have lifecycle methods (such as componentDidMount, 
// componentDidUpdate and componentWillUnmount) in one single API.

// class CounterClass extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 1 };
//     }
    
//     render() {
//       return <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.setState({ 
//           count: this.state.count + 1
//         })}>Increase</button>
//       </div>;
//     }
//   }
  
//   function CounterFunction() {
//     const [count, setCount] = React.useState(1);
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => 
//           setCount(count + 1)}
//         >Increase</button>
//       </div>
//     );
//   }

// class LifecycleClass extends React.Component {
//     componentDidMount() {
//       console.log('Mounted');
//     }
    
//     componentWillUnmount() {
//       console.log('Will unmount');
//     }
    
//     render() {
//       return <div>Lifecycle Class</div>;
//     }
//   }
  
//   function LifecycleFunction() {
//     React.useEffect(() => {
//       console.log('Mounted');
//       return () => {
//         console.log('Will unmount');
//       };
//     }, []); // Empty array means to only run once on mount.
//     return (
//       <div>Lifecycle Function</div>
//     );
//   }

class UseStateClassComponent extends Component {

    constructor() {
        super();
        this.state = {
            showParagraph: false
        };
    }
    
    toggleParagraph() {
        this.setState((previousState) => {
            return {
                showParagraph: !previousState.showParagraph
            };
        });
    }

    render() {
        return <div>
            <h3>Class Based Component</h3>
            <button onClick={this.toggleParagraph.bind(this)} >Toggle Paragraph</button>
            {/* { this.state.showParagraph && <p>Some random paragraph</p> } */}
            { this.state.showParagraph && <ShowParagraph text='Some random paragraph' /> }
        </div>
    }

}

export default UseStateClassComponent;