import './App.css';
import Person from './components/person';

function App() {
  const persons = [
    {
      "id": 1,
      "name": "first",
      "age": 21,
      "skill": "Java"
    },
    {
      "id": 2,
      "name": "second",
      "age": 24,
      "skill": "Angular"
    },
    {
      "id": 3,
      "name": "third",
      "age": 25,
      "skill": "Flutter"
    },
  ];
  return (
    <div>
      <center>
        {
          // shouldn't use index (which is provided from map function be used as key because it may affect performance if there needs some changes to the list like sorting or adding new element at start or at end of list)
          persons.map(person => <Person key={person.id} person={person} />)
        }
      </center>
    </div>
  );
}

export default App;
