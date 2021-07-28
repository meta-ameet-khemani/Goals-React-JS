import './App.css';
import MyHeading from './components/functional/heading';
import MySelect from './components/functional/myselect';
import ClassHeading from './components/class/class_heading';
import ClassMySelect from './components/class/class_myselect';

function App() {
  return (
    <div>
      <MyHeading />
      <MySelect />
      <ClassHeading />
      <ClassMySelect />
    </div>
  );
}

export default App;
