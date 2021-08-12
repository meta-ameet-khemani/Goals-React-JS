import Todo from "./functional_components/Todo";
import ClassTodo from "./class_components/ClassTodo";

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <Todo title="Flutter Practice"></Todo>
      <br />
      <Todo title="Project in Flutter"></Todo>
      <br />
      <p>Class Componets with state</p>
      <ClassTodo title="Flutter Practice"></ClassTodo>
    </div>
  );
}

export default App;
