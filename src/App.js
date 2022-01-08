import { useState } from "react";

import Header from "./components/UI/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {

  const [cartShown, updateCartShow] = useState(false);

  const showCartHandler = () => updateCartShow(true);

  const hideCartHandler = () => updateCartShow(false);

  return <CartContextProvider>
    { cartShown && <Cart onHideCart={hideCartHandler} /> }
    <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
    <Meals />
  </CartContextProvider>
}

export default App;
