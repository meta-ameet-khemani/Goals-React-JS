import logo from './logo.svg';
import './App.css';
import Greet from '../src/components/functional_stateless_components/greet';
import Welcome from './components/class_statefull_components/welcome';

function App() {
  return (
    <div className="App">
      {/* <p>Hello !!! Welcome to React Tutorial</p> */}
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
