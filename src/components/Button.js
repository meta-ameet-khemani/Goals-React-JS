import React from 'react'

const Button = props => {
    
    console.log('Button Component');

    return (
        // <button
        //     type={props.type || 'button'}
        //     onClick={props.onClick}
        //     disabled={props.disabled || false}
        // >
        <button {...props}>
            {/* {props.children} */}
            {props.label}
        </button>

        // <button
        //     type={props.type || 'button'}
        //     className={`${classes.button} ${props.className}`}
        //     onClick={props.onClick}
        //     disabled={props.disabled}
        // >
        //     {props.children}
        // </button>
    )
}

export default React.memo(Button)
