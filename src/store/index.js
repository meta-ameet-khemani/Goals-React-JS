import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0, 
        show: true
    },
    reducers: {
        increment(state) {
            state.counter++
        },
        increase(state, action) {
            state.counter += action.payload
        },
        decrement(state) {
            state.counter--
        },
        decrease(state, action) {
            state.counter -= action.payload
        },
        toggle(state) {
            state.show = !state.show
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
});

const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        authReducer: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
