import { Fragment } from 'react'
import useInput from './use-input';

const isEmpty = value => value ? value.trim() === '' : true;
const isNotEmail = value => value ? !value.includes('@') : true;

const Form = () => {

    // const [name, updateName] = useState('');
    // const [isNameTouched, updateIsNameTouched] = useState(false);
    // const [isNameValid, updateIsNameValid] = useState(false);

    // const nameHandler = event => {
    //     updateIsNameTouched(true);
    //     updateName(event.target.value);
    //     updateIsNameValid(!isEmpty(event.target.value));

    //     updateIsFormValid(!isEmpty(event.target.value));
    // }

    // const nameBlurHandler = event => {
    //     updateIsNameTouched(true);
    //     updateName(event.target.value);
    //     updateIsNameValid(!isEmpty(event.target.value));

    //     updateIsFormValid(!isEmpty(event.target.value));
    // }

    const {
        field: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameHasError,
        fieldChangeHandler: nameChangeHandler,
        fieldBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isEmpty);

    const {
        field: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        fieldChangeHandler: emailChangeHandler,
        fieldBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isNotEmail);

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            console.log('Form is invalid');
            return;
        }
        console.log('Submitting form values');
        console.log(enteredName, enteredEmail);
        resetName();
        resetEmail();
    }

    return (
        <Fragment>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                    />
                    { nameHasError && <p>Please enter correct name</p> }
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='text'
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                    { emailHasError && <p>Please enter correct email</p> }
                </div>
                <button type='submit' disabled={!formIsValid} >Register</button>
            </form>
        </Fragment>
    )
}

export default Form
