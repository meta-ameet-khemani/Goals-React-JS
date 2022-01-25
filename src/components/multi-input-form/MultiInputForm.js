import React, { useState } from 'react'
import CustomInput from './CustomInput';

const isEmpty = value => value ? value.trim() === '' : true;
const isEmail = value => value ? !isEmpty(value) && value.includes('@') : false;

const MultiInputForm = () => {

    const [name, updateName] = useState('');
    const [nameTouched, updateNameTouched] = useState(false);
    const [isNameValid, updateIsNameValid] = useState(false);
    
    const [email, updateEmail] = useState('');
    const [emailTouched, updateEmailTouched] = useState(false);
    const [isEmailValid, updateIsEmailValid] = useState(false);
    
    const [isFormValid, updateIsFormValid] = useState(false);

    const inputNameHandler = event => {
        updateNameTouched(true);
        updateName(event.target.value);
        updateIsNameValid(!isEmpty(event.target.value));
        // updateIsFormValid(!isEmpty(event.target.value));
        updateIsFormValid(!isEmpty(event.target.value) && isEmailValid);
    }

    const inputNameBlurHandler = event => {
        updateNameTouched(true);
        // updateIsFormValid(!isEmpty(event.target.value));
        updateIsFormValid(!isEmpty(event.target.value) && isEmailValid);
    }

    const inputEmailHandler = event => {
        updateEmailTouched(true);
        updateEmail(event.target.value);
        updateIsEmailValid(!isEmail(event.target.value));
        updateIsFormValid(!isEmail(event.target.value) && isNameValid);
    }

    const inputEmailBlurHandler = event => {
        updateEmailTouched(true);
        updateIsFormValid(!isEmail(event.target.value) && isNameValid);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        updateNameTouched(true);
        updateEmailTouched(true);
        console.log('Form valid:', isFormValid);
        if (!isFormValid) {
            console.log('returning from form');
            return;
        }
        console.log('Saving data');
    }

    return (
        <React.Fragment>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <CustomInput
                        label='Name'
                        id='name'
                        type='text'
                        value={name}
                        onChange={inputNameHandler}
                        onBlur={inputNameBlurHandler}
                        touched={nameTouched ? 1 : 0}
                        valid={isNameValid ? 1 : 0}
                        errormsg='Name must not be empty' 
                    />
                </div>
                <div>
                    <CustomInput
                        label='Email'
                        id='email'
                        type='text'
                        value={email}
                        onChange={inputEmailHandler}
                        onBlur={inputEmailBlurHandler}
                        touched={emailTouched ? 1 : 0}
                        valid={isEmailValid ? 1 : 0}
                        errormsg='Please enter correct email' 
                    />
                </div>
                <div>
                    <button type='submit' disabled={!isFormValid} >Register</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default MultiInputForm

/* <div>
    <label>Name</label>
    <input 
        type='text' 
        value={name} 
        onChange={inputNameHandler}
        onBlur={inputNameBlurHandler} 
    />
</div> */
