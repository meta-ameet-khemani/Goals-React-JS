import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
// import CartItem from './CartItem';

const Cart = props => {
    
    const ctx = useContext(CartContext);

    const addButtonHandler = id => {
        let cartItem = ctx.items.filter(item => item.id === id);
        cartItem[0].quantity = +cartItem[0].quantity + 1;
        const cartItemToSend = {
            ...cartItem[0],
            quantity: cartItem[0].quantity
        };
        ctx.addItem(cartItemToSend);
    }

    const subtractButtonHandler = id => {
        let cartItem = ctx.items.filter(item => item.id === id);
        cartItem[0].quantity = +cartItem[0].quantity - 1;
        const cartItemToSend = {
            ...cartItem[0],
            quantity: cartItem[0].quantity
        };
        ctx.addItem(cartItemToSend);
    }

    const hasItems = ctx.items.length > 0;

    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                ctx.items.map((item) => {
                    return <div key={item.id}>
                        <li>Name: {item.name}</li>
                        <li>Quantity: {item.quantity}</li>
                        <li>Price: {item.price}</li>
                        <li>Total: {item.quantity * item.price}</li>
                        <button onClick={() => addButtonHandler(item.id)} >+</button>
                        <button onClick={() => subtractButtonHandler(item.id)} >-</button>
                        <br></br>
                        <button onClick={() => ctx.removeItem(item.id)} >Remove</button>
                    </div>
                })
                // ctx.items.map((item) => (
                //     <CartItem 
                //         key={item.id}
                //         name={item.name}
                //         amount={item.price}

                //     />
                // ))
            }
        </ul>
    );
    
    return <Modal onClose={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            {ctx.totalAmount.toFixed(2)}
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            { hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;