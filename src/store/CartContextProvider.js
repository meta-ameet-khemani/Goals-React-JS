import { useReducer } from "react";

import CartContext from "./cart-context";

const cartInitialState = {
    items: [],
    totalAmount: 0
};

const compare = (a,b) => {
    if ( a.id < b.id ){
        return -1;
    }
    if ( a.id > b.id ){
        return 1;
    }
    return 0;
}

const calculateTotal = cartItems => {
    let totalAmount = 0;
    cartItems.forEach((item) => totalAmount += (item.price * +item.quantity));
    return totalAmount;
};

const cartReducer = (previousState, action) => {
    if (action.type === 'ADD') {
        let updatedItems = [...previousState.items.filter(item => item.id !== action.item.id), action.item];
        updatedItems = updatedItems.filter(item => +item.quantity > 0);
        const updatedTotalAmount = calculateTotal(updatedItems);
        updatedItems.sort(compare);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE') {
        const updatedItems = previousState.items.filter(item => item.id !== action.id);
        const updatedTotalAmount = calculateTotal(updatedItems);
        updatedItems.sort(compare);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return cartInitialState;
};

const CartContextProvider = props => {

    const [cartState, dispatchFn] = useReducer(cartReducer, cartInitialState);

    const addItemToCartHandler = item => {
        dispatchFn({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchFn({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartContextProvider;