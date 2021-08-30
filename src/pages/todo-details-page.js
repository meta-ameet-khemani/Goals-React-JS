import React from 'react';
import { useHistory } from "react-router-dom";
import classes from './todo-details-page.module.css';

export default function TodoDetailsPage() {
    const history = useHistory();
    return (
        <div>
            <div className={classes.content}>
                <h3>{history.location.state['title']}</h3>
                <h3>{history.location.state['completed'] === true ? "Completed" : "Active"}</h3>
                <p>{history.location.state['created_at']}</p>
                {/* {
                    history.location.state['completed'] === false ? 
                    <div>
                        <button onClick={aae}>Mark as Complete</button>
                    </div> : 
                    <div></div>
                } */}
                <button onClick={() => history.push('/')}>Cancel</button>
            </div>
        </div>
    )
}
