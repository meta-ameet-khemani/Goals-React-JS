import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/index';

const CartButton = (props) => {
  
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  
  return (
    <button className={classes.button} onClick={() => dispatch(cartActions.toggleCart())}>
      <span>My Cart</span>
      {cartItems.length > 0 && <span className={classes.badge}>{cartItems.length}</span>}
    </button>
  );
};

export default CartButton;
