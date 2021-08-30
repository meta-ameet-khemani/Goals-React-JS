import React from 'react';
import TodoItemComponent from './todo-item';
import classes from './todo-item.module.css';

export default function TodoListComponent(props) {
    const markComplete = (id) => {
      props.markComplete(id);
    }
    const markActive = (id) => {
      props.markActive(id);
    }
    return (
      <center>
        <ul style={{width: '20%'}} className={classes.list}>
          {props.todos.map((todo) => (
            <TodoItemComponent
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              created_at={todo.created_at}
              markComplete={markComplete}
              markActive={markActive}
            />
          ))}
        </ul>
      </center>
    );
}
