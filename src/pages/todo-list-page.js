import React, { useState } from 'react';
import TodoListComponent from '../components/todos/todo-list-component';
import { getTodoData } from '../dummy_data/data_todo_list';

export default function TodoListPage() {
    var TODO_LIST = getTodoData();
    const [todo, updateToDo] = useState(TODO_LIST);
    const [selectedOption, updateOption] = useState('All');
    
    const markComplete = (id) => {
        var todos = todo.map(td => {
            if (td.id === id) {
                td.completed = !td.completed;
                return td;
            }
            return td;
        });
        updateToDo(todos);
        if (selectedOption === 'Active')
            updateToDo(TODO_LIST.filter(todo => todo.completed === false));
    }

    const markActive = (id) => {
        var todos = todo.map(td => {
            if (td.id === id) {
                td.completed = !td.completed;
                return td;
            }
            return td;
        });
        updateToDo(todos);
        if (selectedOption === 'Completed')
            updateToDo(TODO_LIST.filter(todo => todo.completed === true));
    }

    const onChangeValue = (event) => {
        switch (event.target.value) {
            case 'All':
                updateToDo(TODO_LIST);
                updateOption('All');
                break;
            case 'Active':
                updateToDo(TODO_LIST.filter(todo => todo.completed === false));
                updateOption('Active');
                break;
            case 'Completed':
                updateToDo(TODO_LIST.filter(todo => todo.completed === true));
                updateOption('Completed');
                break;
            default:
                break;
        }
    }

    return (
        <section>
          <div onChange={onChangeValue}>
            <input type="radio" value="All" name="category" checked={selectedOption === "All"} onChange={() => {}} /> All
            <input type="radio" value="Active" name="category" checked={selectedOption === "Active"} onChange={() => {}} /> Active
            <input type="radio" value="Completed" name="category" checked={selectedOption === "Completed"} onChange={() => {}} /> Completed
        </div>
          <TodoListComponent todos={todo} markComplete={markComplete} markActive={markActive} />
        </section>
    );
}
