import React, { useReducer, useContext } from "react";
import AuthContext from '../../store/auth-context';

const initialState = {
    email: '',
    password: '',
    isValid: false
}

const isFormValid = (email, password) => email.trim().length > 2 && password.trim().length > 2;

const formReducer = (previousState, action) => {
    if (action.type === 'EMAIL') {
        return { email: action.value, password: previousState.password, isValid: isFormValid(action.value, previousState.password) };
    }
    if (action.type === 'PASSWORD') {
        return { email: previousState.email, password: action.value, isValid: isFormValid(previousState.email, action.value) };
    }
    return { email: '', password: '', isValid: false };
}

const Login = () => {

    const [formState, dispatchFn] = useReducer(formReducer, initialState);
    const ctx = useContext(AuthContext);

    return <React.Fragment>
        Login page
        <form onSubmit={ctx.onLogin}>
            <div>
                <label>Email</label>
                <input
                    type='text'
                    value={formState.email}
                    onChange={(e) => dispatchFn({ type: 'EMAIL', value: e.target.value })}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type='password'
                    value={formState.password}
                    onChange={(e) => dispatchFn({ type: 'PASSWORD', value: e.target.value })}
                />
            </div>
            <button type="submit" disabled={!formState.isValid}>Login</button>
        </form>
    </React.Fragment>
}

export default Login;