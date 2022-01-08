import { useState } from 'react';
import ErrorModal from './ErrorModal';

// const TaskForm = () => {
//     // Way 1: Where we define different states for items in component
//     // though it will re-render this component every single time any values changes

//     const [title, updateTitle] = useState('');
//     const [amount, updateAmount] = useState('');
//     const [date, updateDate] = useState('');

//     const titleHandler = (event) => updateTitle(event.target.value);
//     const amountHandler = (event) => updateAmount(event.target.value);
//     const dateHandler = (event) => updateDate(event.target.value);

//     return <div>
//         <form>
//             <div>
//                 <label>Title</label>
//                 <input type='text' onChange={titleHandler} />
//             </div>
//             <div>
//                 <label>Amount</label>
//                 <input type='number' min='0' step='1' onChange={amountHandler} />
//             </div>
//             <div>
//                 <label>Date</label>
//                 <input type='date' min='2000-01-01' max='2099-12-31' onChange={dateHandler} />
//             </div>
//             <div>
//                 <button type="submit">Add Task</button>
//             </div>
//         </form>
//     </div>;
// };

// const TaskForm = () => {
//     // Way 2: Maintain a single state and copy other values
//     // Here we are copying remaining values other than the selected
//     // input.

//     // Note: This is not the best way to get previous state values as
//     // react timesout the state changes i.e it doesn't instantly changes
//     // everything rather than it timesout. So if becomes slight delay or
//     // have a tedious form than it may cause unwanted values.

//     const [formValues, updateFormValues] = useState({
//         title: '',
//         amount: '',
//         date: ''
//     });

//     const titleHandler = (event) => updateFormValues({
//         ...formValues,
//         title: event.target.value
//     });
//     const amountHandler = (event) => updateFormValues({
//         ...formValues,
//         amount: event.target.value
//     });
//     const dateHandler = (event) => updateFormValues({
//         ...formValues,
//         date: event.target.value
//     });


//     return <div>
//         <form>
//             <div>
//                 <label>Title</label>
//                 <input type='text' onChange={titleHandler} />
//             </div>
//             <div>
//                 <label>Amount</label>
//                 <input type='number' min='0' step='1' onChange={amountHandler} />
//             </div>
//             <div>
//                 <label>Date</label>
//                 <input type='date' min='2000-01-01' max='2099-12-31' onChange={dateHandler} />
//             </div>
//             <div>
//                 <button type="submit">Add Task</button>
//             </div>
//         </form>
//     </div>;
// };

const TaskForm = ({onAdd, onCancel}) => {
    // Way 2: Maintain a single state and copy previous state values

    const [formValues, updateFormValues] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const [error, updateErrorModal] = useState();

    const titleHandler = (event) => updateFormValues((previousState) => {
        return { ...previousState, title: event.target.value };
    });
    const amountHandler = (event) => updateFormValues((previousState) => {
        return { ...previousState, amount: event.target.value };
    });
    const dateHandler = (event) => updateFormValues((previousState) => {
        return { ...previousState, date: event.target.value };
    });

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (formValues.title.trim().length === 0 || formValues.amount.trim().length === 0) {
            console.log('Title and amount are invalid');
            updateErrorModal({
                title: 'Input Error',
                description: 'Title and amount are invalid'
            });
            return;
        }
        if (+formValues.amount < 1) {
            console.log('Amount is invalid');
            updateErrorModal({
                title: 'Input Error',
                description: 'Amount is invalid'
            });
            return;
        }
        formValues.date = new Date(formValues.date);
        formValues.amount = Number(formValues.amount);
        onAdd({
            ...formValues,
            id: Math.floor(Math.random() * 1000) + 1
        });
        updateFormValues({
            title: '',
            amount: '',
            date: ''
        });
    };

    return <div>
        { error && <ErrorModal error={error} />}
        <form onSubmit={formSubmitHandler}>
            <div>
                <label>Title</label>
                <input 
                    type='text' 
                    onChange={titleHandler}
                    value={formValues.title} 
                />
            </div>
            <div>
                <label>Amount</label>
                <input 
                    type='number' 
                    // min='0' 
                    step='1' 
                    onChange={amountHandler} 
                    value={formValues.amount} 
                />
            </div>
            <div>
                <label>Date</label>
                <input 
                    type='date' 
                    min='2000-01-01' 
                    max='2099-12-31' 
                    onChange={dateHandler}
                    value={formValues.date}  
                />
            </div>
            <div>
                <button type="submit">Add Task</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    </div>;
};

export default TaskForm;