import { useRef, useContext, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm = props => {

    const inputRef = useRef();
    const ctx = useContext(CartContext);
    const [validQuantity, updateValidQuantity] = useState(true);

    const submitHandler = e => {
        e.preventDefault();
        const quantityStr = inputRef.current.value;
        const quantity = +quantityStr;
        if (quantityStr.trim().length === 0 || quantity < 1 || quantity > 5) {
            updateValidQuantity(false);
            return;
        } else {
            ctx.addItem({
                ...props.meal,
                quantity
            });
        }
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={inputRef}
            label='Amount' 
            input={{
                id: 'amount_' + props.meal.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} 
        />
        <button>+ Add</button>
        { !validQuantity && <p>Please enter a valid quantity (1-5).</p> }
    </form>
};

export default MealItemForm;