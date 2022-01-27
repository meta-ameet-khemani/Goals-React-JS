import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const cart = useSelector(state => state.cartReducer);

  useEffect(() => {
    // this is not the perfect solution as we need to first delete all records and then create all again
    const fetchTasks = async () => {
      const res = await fetch(
        'http://localhost:5000/cartItems/1',
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(cart.cartItems)
        },
      );
      const data = await res.json();
      console.log(data);
    }
    // fetchTasks();
  }, [cart]);

  return (
    <Layout>
      {cart.showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
