import React from 'react'

const ShowPrimitive = props => {
    
    console.log('ShowPrimitive component');

    return (
        <div>{ props.num }</div>
    )
}

export default React.memo(ShowPrimitive)
