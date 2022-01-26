import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store';

const ProductItem = (props) => {

  const dispatch = useDispatch();

  const { id, title, price, description } = props.product;

  // const addCartHandler = id => dispatch(cartActions.addProduct(productActions.getProductById(id)));
  // const addCartHandler = id => console.log(productActions.getProductById(id));
  const addCartHandler = id => dispatch(cartActions.addProduct(id));

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
