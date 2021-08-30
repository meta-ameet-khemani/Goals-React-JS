import React, { useState } from 'react';
import { addTodo } from '../dummy_data/data_todo_list';
import { useHistory } from "react-router-dom";

export default function TodoCreatePage() {
    let history = useHistory();
    const [title, updateTitle] = useState('');
    const changeTitle = (event) => {
        updateTitle(event.target.value);
    }
    return (
        <div>
            <center>
                <h2>Add ToDo</h2>
                <form>
                    <label htmlFor='title' />Title
                    <input type='text' required id='title' value={title} onChange={changeTitle} />
                    <br />
                    <button onClick={
                        () => {
                            addTodo({
                                title: title,
                                created_at: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
                            });
                            history.push('/');
                        }
                    }>Add</button>
                </form>
            </center>
        </div>
    )
}
