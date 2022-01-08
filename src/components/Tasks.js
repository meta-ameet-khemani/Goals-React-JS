import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = (props) => {
    return (
        <div style={{float: 'left'}}>
            {props.title}
            {(props.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={props.onDelete} toggleReminder={props.toggleReminder} />
            )))}
        </div>
    )
}

Tasks.defaultProps = {
    title: 'My Tasks'
}

Tasks.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.array.isRequired, 
}

export default Tasks