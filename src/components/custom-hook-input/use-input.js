import { useState } from 'react'

const useInput = (validateField) => {

    const [field, updateField] = useState('');
    const [isTouched, updateIsTouched] = useState(false);
    const [isValid, updateIsValid] = useState(false);
    
    const hasError = !isValid && isTouched;

    const fieldChangeHandler = event => {
        updateIsTouched(true);
        updateField(event.target.value);
        updateIsValid(!validateField(event.target.value));
    }

    const fieldBlurHandler = event => {
        updateIsTouched(true);
        updateField(event.target.value);
        updateIsValid(!validateField(event.target.value));
    }

    const reset = () => {
        updateField('');
        updateIsTouched(false);
    }

    return {
        field,
        isValid,
        hasError,
        fieldChangeHandler,
        fieldBlurHandler,
        reset
    }
}

export default useInput
