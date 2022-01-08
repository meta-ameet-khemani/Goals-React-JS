// import React, { useState, useEffect, useReducer } from 'react';
import React, { useReducer } from 'react';

// If we use useState hook, it will not affect instantly, as their values will be re-rendered in next cycle
// const UseReducer = () => {
//     const [email, updateEmail] = useState('');
//     const [isEmailValid, updateEmailValid] = useState(false);
//     const [password, updatePassword] = useState('');
//     const [isPasswordValid, updatePasswordValid] = useState(false);
//     const [isFormValid, updateFormValid] = useState(false);

//     const emailHandler = (e) => {
//         updateEmail(e.target.value); 
//         // updateEmailValid(e.target.value.includes('@'));
//         updateEmailValid(previousState => e.target.value.includes('@'));
//         console.log(isEmailValid, e.target.value, e.target.value.includes('@'));
//         // updateFormValid(isEmailValid && isPasswordValid);
//     }

//     const passwordHandler = (e) => {
//         updatePassword(e.target.value); 
//         updatePasswordValid(e.target.value.length < 5);
//         // updateFormValid(isEmailValid && isPasswordValid);
//     }

//     return <React.Fragment>
//         <form>
//             <div>
//                 <label>Email </label>
//                 <input type='text' value={email} onChange={emailHandler} />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type='text' value={password} onChange={passwordHandler} />
//             </div>
//             <button type='button' disabled={isFormValid} >Login </button>
//         </form>
//     </React.Fragment>;
// };


// If we use different states, then it will run for every single change for all 3 states
// const UseReducer = () => {
    
//     const [email, updateEmail] = useState('');
//     // const [isEmailValid, updateEmailValid] = useState(false);
//     const [password, updatePassword] = useState('');
//     // const [isPasswordValid, updatePasswordValid] = useState(false);
//     const [isFormValid, updateFormValid] = useState(false);

//     useEffect(() => {
//         updateFormValid(email.includes('@') && password.length > 2);
//         console.log(email, email.includes('@'), password, password.length > 2, 'isFormValid', isFormValid);
//         // console.log('isFormValid', isFormValid);
//     }, [ email, password, isFormValid ]);

//     return <React.Fragment>
//         <form>
//             <div>
//                 <label>Email </label>
//                 <input type='text' value={email} onChange={ (e) => updateEmail(e.target.value) } />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type='text' value={password} onChange={ (e) => updatePassword(e.target.value) } />
//             </div>
//             <button type='button' disabled={!isFormValid} >Login </button>
//         </form>
//     </React.Fragment>;
// };


// if we want to use only useState, we can combine them all
// const UseReducer = () => {
    
//     const [form, updateForm] = useState({
//         email: '',
//         password: '',
//         isFormValid: false
//     });

//     return <React.Fragment>
//         <form>
//             <div>
//                 <label>Email</label>
//                 <input 
//                     type='text' 
//                     value={form.email} 
//                     onChange={(e) => {
//                         updateForm({ ...form, email: e.target.value });
//                     }}
//                     onBlur={
//                         () => updateForm({ ...form, isFormValid: form.email.includes('@') && form.password.length > 2 })
//                     }
//                 />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input 
//                     type='text' 
//                     value={form.password} 
//                     onChange={ (e) => {
//                         updateForm({ ...form, password: e.target.value, isFormValid: form.email.includes('@') && e.target.value.length > 2 });
//                     }}
//                 />
//             </div>
//             <button type='button' disabled={!form.isFormValid} >Login </button>
//         </form>
//     </React.Fragment>;
// };


// here comes the use of useReducer hook, as it is used to manage states which are complex or interlinked
// like we have in our current situation

// const initialState = {
//     value: '',
//     isValid: false
// };

// const emailReducer = (previousState, action) => {
//     if (action.type === 'INPUT_EMAIL') {
//         return { value: action.value, isValid: action.value.includes('@') };
//     }
//     // though it is optional, but as we are calling dispatch function again on blur event
//     // so we need to pass values from previous state, otherwise it will be set as blank
//     if (action.type === 'BLUR_EMAIL') {
//         return { value: previousState.value, isValid: previousState.value.includes('@') };
//     }
//     return { value: '', isValid: false };
// }

const initialState = {
    email: '',
    password: '',
    isValid: false
};

const formReducer = (previousState, action) => {
    console.log(previousState);
    if (action.type === 'EMAIL') {
        return { email: action.value, password: previousState.password, isValid: action.value.includes('@') && previousState.password.length > 2 };
    }
    if (action.type === 'PASSWORD') {
        return { email: previousState.email, password: action.value, isValid: previousState.email.includes('@') && action.value.length > 2 };
    }
    return { email: '', password: '', isValid: false };
}

const UseReducer = () => {
    
    console.log('asdf');
    // const [emailState, dispatchFn] = useReducer(emailReducer, initialState);
    const [formState, dispatchFn] = useReducer(formReducer, initialState);

    return <React.Fragment>
        <form>
            <div>
                <label>Email</label>
                {/* <input 
                    type='text' 
                    value={emailState.value} 
                    onChange={(e) => dispatchFn({ type: 'INPUT_EMAIL', value: e.target.value })}
                    // onBlur={(e) => dispatchFn({ type: 'BLUR_EMAIL', value: e.target.value })}
                /> */}
                <input 
                    type='text' 
                    value={formState.email} 
                    onChange={(e) => dispatchFn({ type: 'EMAIL', value: e.target.value })}
                    // onBlur={(e) => dispatchFn({ type: 'BLUR_EMAIL', value: e.target.value })}
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type='text' 
                    value={formState.password} 
                    // onChange={ (e) => updateForm({ ...form, password: e.target.value, isFormValid: form.email.includes('@') && e.target.value.length > 2 })}
                    onChange={(e) => dispatchFn({ type: 'PASSWORD', value: e.target.value })}
                />
            </div>
            {/* <button type='button' disabled={!form.isFormValid} >Login </button> */}
            <button type='button' disabled={!formState.isValid} >Login </button>
        </form>
    </React.Fragment>;
};

export default UseReducer;