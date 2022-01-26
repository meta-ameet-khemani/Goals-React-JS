import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = (props) => {
  
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {
          cartItems.map(item => {
            return <CartItem
              key={item.id}
              item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.price * item.quantity, price: item.price }}
            />
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
