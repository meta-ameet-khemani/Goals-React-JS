import React, { useReducer } from "react";

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

const Login = props => {

    const [formState, dispatchFn] = useReducer(formReducer, initialState);

    return <React.Fragment>
        Login page
        <form onSubmit={props.login}>
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