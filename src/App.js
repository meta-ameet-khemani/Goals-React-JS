import { useState } from 'react';

import tempData from './data';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

function App() {
  
  const [expenses, updateExpenses] = useState(tempData);
  const [expenseForm, updateExpenseForm] = useState(false);

  const addExpense = (expense) => {
    // addData(expense);
    updateExpenses((previousState) => {
      return [ expense, ...previousState ];
    });
    updateExpenseForm(false);
  }

  // const filterCriteria = (year) => {
  //   const allExpenses = expenses.slice();
  //   if (year == 'All') {
  //     updateExpenses(allExpenses);
  //   } else {
  //     const filteredExpenses = allExpenses.filter((expense) => expense.date.getFullYear().toString() == year);
  //     updateExpenses(filteredExpenses);
  //   }
  // }

  let headerSection = expenseForm ? <TaskForm onAdd={ addExpense } onCancel={() => updateExpenseForm(false)} /> : <button onClick={() => updateExpenseForm(true)}>Add Expense</button>;
  
  return (
    <div>
      {/* <TaskForm onAdd={ addExpense } /> */}
      {headerSection}
      <Tasks expenses={ expenses } />
    </div>
  );
}

export default App;
