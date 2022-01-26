import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const products = [
    {
        id: 1,
        title: 'Test 1',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        id: 2,
        title: 'Test 2',
        price: 16,
        description: 'This is a second product - amazing!'
    },
    {
        id: 3,
        title: 'Test 3',
        price: 60,
        description: 'This is a third product - amazing!'
    }
];

const updateCart = (cartItems, newItem) => {
    let cartItemArray = [...current(cartItems)];
    const index = cartItemArray.findIndex(item => item.id === newItem.id);
    if (index > -1) {
        let {id, title, price, description, quantity} = cartItemArray[index];
        quantity++;
        cartItemArray[index] = {id, title, price, description, quantity};
        return cartItemArray;
    } else {
        const itemToAdd = {...newItem, quantity: 1};
        cartItemArray.push(itemToAdd);
        return cartItemArray;
    }
}

const removeProduct = (cartItems, id) => {
    let cartItemArray = [...current(cartItems)];
    return cartItemArray.filter(item => item.id !== id);
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        products
    },
    reducers: {}
});

const initialState = {
    cartItems: [], 
    showCart: false
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        // adding this with slight changes (that might be commented in ProductItem file for showing asynchronous code working)
        replaceCart(state, action) {
            state.cartItems = action.payload;
        },
        addProduct(state, action) {
            const product = products.find(product => product.id === action.payload);
            if (product) {
                state.cartItems = updateCart(state.cartItems, product);
            }
        },
        updateQuantity(state, action) {
            let cartItemArray = [...current(state.cartItems)];
            const index = cartItemArray.findIndex(item => item.id === action.payload.id);
            let {id, title, price, description, quantity} = cartItemArray[index];
            if (action.payload.update === 'add') {
                quantity++;
            } else {
                quantity--;
                if (quantity < 1) {
                    state.cartItems = removeProduct(state.cartItems, id);
                    return;
                }
            }
            cartItemArray[index] = {id, title, price, description, quantity};
            state.cartItems = cartItemArray;
        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

const store = configureStore({
    reducer: {
        productReducer: productsSlice.reducer,
        cartReducer: cartSlice.reducer
    }
});

export const productActions = productsSlice.actions;
export const cartActions = cartSlice.actions;

export default store;