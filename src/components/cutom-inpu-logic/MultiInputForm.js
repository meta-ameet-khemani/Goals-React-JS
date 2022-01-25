import React, { useState, useRef } from 'react'
import CustomInput from './CustomInput';

const isEmpty = value => value ? value.trim() === '' : true;
const isEmail = value => value ? !isEmpty(value) && value.includes('@') : false;

const MultiInputForm = () => {
    console.log();

    const nameRef = useRef();

    const [isFormValid, updateIsFormValid] = useState(false);

    const formSubmitHandler = event => {
        event.preventDefault();
        updateIsFormValid(nameRef.current.isValid);
        console.log(nameRef.current.isValid);
        // console.log('Form valid:', isFormValid);
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
                        ref={nameRef}
                        type='text'
                        validate={isEmpty}
                        errormsg='Name must not be empty' 
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
