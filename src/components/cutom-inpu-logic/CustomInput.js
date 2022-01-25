import React, { useState, useRef, useImperativeHandle } from 'react'

const CustomInput = React.forwardRef((props, ref) => {

    const {validate, ...newProps} = props;

    const fieldRef = useRef();

    const [field, updateField] = useState(props.defaultValue ? props.defaultValue : '');
    const [fieldTouched, updateFieldTouched] = useState(false);
    const [isFieldValid, updateIsFieldValid] = useState(false);

    const inputFieldHandler = event => {
        updateFieldTouched(true);
        updateField(event.target.value);
        console.log(event.target.value, !props.validate(event.target.value));
        updateIsFieldValid(!props.validate(event.target.value));
    }

    const inputFieldBlurHandler = event => {
        updateFieldTouched(true);
    }

    useImperativeHandle(ref, () => {
        return {
            isValid: () => isFieldValid
        }
    });
    
    return <React.Fragment>
        <label htmlFor={props.id} >{props.label}</label>
        <input 
            {...newProps}
            value={field}
            onChange={inputFieldHandler}
            onBlur={inputFieldBlurHandler}  
        />
        { fieldTouched && !isFieldValid && <p>{props.errormsg}</p> }
    </React.Fragment>
});

export default CustomInput
