import React from 'react';

import classes from './Expense.module.css';

const Expense = props => {
  
  const expensePrice = `${props.expense.price.toFixed(2)}`;

  return (
    <li className={classes.expense}>
      <div>
        <h3> {props.expense.name} </h3>
        <div className={classes.description}> {props.expense.description} </div>
      </div>
      <div>
        <div className={classes.price}> {props.expense.date} </div>
        <div className={classes.price}> {props.expense.year} </div>
      </div>
      <div className={classes.price}> {expensePrice} </div>
    </li>
  );
};

export default Expense;
