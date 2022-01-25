import React from 'react'

const CustomInput = props => {
    return <React.Fragment>
        <label htmlFor={props.id} >{props.label}</label>
        <input {...props} />
        { props.touched === 1 && props.valid !== 1 && <p>{props.errormsg}</p> }
    </React.Fragment>
}

export default CustomInput
