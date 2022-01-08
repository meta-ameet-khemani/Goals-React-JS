import Tasks from "./components/Tasks";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      updateTasks(tasks);
    }
    fetchTasks();
  }, [])

  const getTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const getTaskById = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const deleteTask = async (id) => {
    await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE'
      }
    );
    updateTasks(tasks.filter((task) => task.id !== id));
  }

  const [tasks, updateTasks] = useState([]);

  const [showAddTask, updateAddTask] = useState(false);

  const toggleReminder = async (id) => {
    const taskToUpdate = await getTaskById(id);
    const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      },  
    );
    const newTask = await res.json();
    updateTasks(tasks.map((task) => task.id !== id ? task : { ...task, reminder: newTask.reminder } ));
  }

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // updateTasks([...tasks, { id, ...task} ]);

    const res = await fetch(
      'http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      },
    );
    const newTask = await res.json();
    updateTasks([...tasks, newTask ]);
  }

  return (
    <div>
      { tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />
          : <p>No Tasks Available</p>
      }
      {showAddTask && <AddTask addTask={addTask} />}
      <Button text={ showAddTask ? 'Close' : 'Add' } bgColor={ showAddTask ? 'red' : 'green' } onClick={() => updateAddTask(!showAddTask)} />
    </div>
  );
}

export default App;
