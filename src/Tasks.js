import { useState } from 'react'

import Chart from './Chart';

const Tasks = (props) => {

    const [filterYear, updateFilterYear] = useState('All');

    const filteredExpenses = filterYear == 'All' ? props.expenses : props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return <div>
        <div>
            <Chart expenses={ filteredExpenses } />
        </div>
        <div>
            {/* <select value={filterYear} onChange={(e) => {updateFilterYear(e.target.value); console.log(filterYear);}}> */}
            <select value={filterYear} onChange={(e) => {updateFilterYear(e.target.value);}}>
                <option value='All'>All</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
        {
            filteredExpenses.map((expense) => {
                return <div key={expense.id}>
                    <p>{expense.title}</p>
                    <p>{expense.amount}</p>
                    <p>{expense.date.toString()}</p>
                    <hr />
                </div>
            })
        }
    </div>
};

export default Tasks;