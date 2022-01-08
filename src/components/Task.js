import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, toggleReminder}) => {
    return (
        <div style={{ backgroundColor: task.reminder ? 'Green' : 'Brown' }} onDoubleClick={() => toggleReminder(task.id)}>
            <h5>
                {task.name}
                <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }}></FaTimes>
            </h5>
            <p>{task.dateTime}</p>
        </div>
    )
}

export default Task
