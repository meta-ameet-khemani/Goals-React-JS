import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const products = useSelector(state => state.productReducer.products);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title='Test 1'
          price={6}
          description='This is a first product - amazing!'
        /> */}
        {
          products.map(product => {
            return <ProductItem 
              key={product.id} 
              product={product}
            />
          })
        }
      </ul>
    </section>
  );
};

export default Products;
