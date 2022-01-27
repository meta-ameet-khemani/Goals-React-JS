import React from 'react';
import ReactDOM from 'react-dom';

import { useRef } from 'react';
import classes from './FormModal.module.css';

const Backdrop = () => {
    return <div id='backdropDiv' className={classes.backdrop} />;
}

const Overlay = props => {

    const emailRef = useRef();
    const passwordRef = useRef();

    return <div id='modal' className={classes.modal}>
        <div className={classes.modal_content}>
            <p>
                <b>Enter Credentials</b>
                <span
                    className={classes.close}
                    onClick={() => props.onClose(false)}
                >
                    &times;
                </span>
            </p>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(emailRef.current.value);
                console.log(passwordRef.current.value);
                
                // it is not recommended to directly change the DOM element
                // for resetting, we should use state
                // ref should be used when we just want to get the values
                emailRef.current.value = '';
                passwordRef.current.value = '';
            }}>
                <div>
                    <label>Email/Username</label>
                    <input type='text' ref={emailRef}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' ref={passwordRef}></input>
                </div>
                <button type='submit'>Login</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    </div>;
}

const FormModal = props => {
    return <>
        {
            ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop')
            )
        }
        {
            ReactDOM.createPortal(
                <Overlay onClose={props.onClose}/>,
                document.getElementById('overlay')
            )
        }
    </>;
};

export default FormModal;
