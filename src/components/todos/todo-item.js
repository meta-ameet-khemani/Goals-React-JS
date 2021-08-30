import React from 'react';
import classes from './todo-item.module.css';
import { useHistory } from "react-router-dom";

export default function TodoItemComponent(props) {
  let history = useHistory();
  return (
    <center>
      <div className={classes.item} style={{backgroundColor: props.completed === true ? 'lightblue' : 'pink'}}>
        <div onClick={ ()  => history.push({
          pathname: '/todo-details/' + props.id,
          state: {
            id: props.id,
            title: props.title,
            completed: props.completed,
            created_at: props.created_at,
            // markComplete: JSON.stringify(aef.toString()),
          }
        })}>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <h3>{props.completed === true ? "Completed" : "Active"}</h3>
            <p>{props.created_at}</p>
          </div>
        </div>
        {
          props.completed === false ? 
          <div className={classes.actions}>
              <button onClick={() => {
                props.markComplete(props.id);
              }}>Mark as Complete</button>
          </div> : 
          <div></div>
        }
        <br />
        {
          props.completed === true ? 
          <div className={classes.actions}>
              <button onClick={() => {
                props.markActive(props.id);
              }}>Mark Active</button>
          </div> : 
          <div></div>
        }
      </div>
    </center>
  );
}
