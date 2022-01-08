import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItem = props => {
    
    const mealPrice = `$${props.meal.price.toFixed(2)}`;
    
    return <li className={classes.meal}>
        <div>
            <h3> {props.meal.name} </h3>
            <div className={classes.description}> {props.meal.description} </div>
            <div className={classes.price}> {mealPrice} </div>
        </div>
        <div>
            <MealItemForm meal={props.meal} />
        </div>
    </li>
};

export default MealItem;