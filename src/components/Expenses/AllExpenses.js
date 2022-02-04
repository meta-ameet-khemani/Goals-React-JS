import React from "react";

import classes from "./AllExpenses.module.css";
import Expense from "./Expense";

const DUMMY_EXPENSES = [
  {
    id: "m1",
    name: "Hoody",
    description: "Apparel",
    price: 220,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m2",
    name: "Shoes",
    description: "Apparel",
    price: 160,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m5",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m6",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m7",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    date: '1 Jan',
    year: '2022'
  },
  {
    id: "m8",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    date: '1 Jan',
    year: '2022'
  },
];

const AllExpenses = () => {
  const expensesList = DUMMY_EXPENSES.map((expense) => {
    
    // const expensePrice = `${expense.price.toFixed(2)}`;

    return <Expense key={expense.id} expense={expense} />;
    // return <MealItem 
    //     key={meal.id} 
    //     meal={meal} 
    // />;
    // return (
    //   <li className={classes.expense} key={expense.id}>
    //     <div>
    //       <h3> {expense.name} </h3>
    //       <div className={classes.description}> {expense.description} </div>
    //     </div>
    //     <div>
    //       <div className={classes.price}> {expense.date} </div>
    //       <div className={classes.price}> {expense.year} </div>
    //     </div>
    //     <div className={classes.price}> {expensePrice} </div>
    //   </li>
    // );
  });

  return (
    <section className={classes.expenses}>
      <div className={classes.card}>
        <ul>{expensesList}</ul>
      </div>
    </section>
  );
};

export default AllExpenses;
