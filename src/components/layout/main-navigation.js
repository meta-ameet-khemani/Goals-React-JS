import React from 'react';
import { Link } from 'react-router-dom';
import classes from './main-navigation.module.css';

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Todo App</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Todo List</Link>
                    </li>
                    <li>
                        <Link to="/todo-create">Create Todo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
