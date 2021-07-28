import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <Todo title="Task 1"></Todo>
      <br />
      <Todo title="Task 2"></Todo>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
