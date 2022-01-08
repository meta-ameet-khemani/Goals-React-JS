import React, { useRef, useImperativeHandle } from "react";

const CustomInput = React.forwardRef((props, ref) => {
    
    const emailRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus: () => console.log('Focusing on')
        }
    });
    
    return <div>
        <label>{props.label}</label>
        <input 
            type={props.type} 
            ref={emailRef}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    </div>
});

export default CustomInput;