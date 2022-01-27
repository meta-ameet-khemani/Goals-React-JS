// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store';

const ProductItem = (props) => {

  const dispatch = useDispatch();

  const { id, title, price, description } = props.product;
  // const cart = useSelector(state => state.cartReducer);

  const addCartHandler = id => {

    // let cartItems = cart.cartItems.slice();

    // const cartItemExists = cartItems.find(item => item.id === id);
    // if (cartItemExists) {
    //   const updatedItem = {...cartItemExists};
    //   updatedItem.quantity++;
    //   const index = cartItems.findIndex(item => item.id === updatedItem.id);
    //   cartItems[index] = updatedItem;
    // } else {
    //   const updatedItem = {id, title, price, description, quantity: 1};
    //   cartItems.push(updatedItem);
    // }
    // dispatch(cartActions.replaceCart(cartItems));

    // commenting this line to show the one way (though it may not be the finest solution) to run asynchronous code
    dispatch(cartActions.addProduct(id));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addCartHandler(id)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
