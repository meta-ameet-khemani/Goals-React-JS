import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [name, setName] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Please add task');
            return;
        }
        addTask({name, dateTime, reminder});
        setName('');
        setDateTime('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='Buy groceries' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Date & Time</label>
                <input type='text' placeholder='4 January 08:00 PM' value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            </div>
            <div>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked )} />
            </div>
            <div>
                <input type='submit' value='Add Task' />
            </div>
        </form>
    )
}

export default AddTask
