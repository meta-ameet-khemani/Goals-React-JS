import React from 'react'

const Heading = props => {

    console.log('Heading component');

    return (
        <div>
            <h3>{ props.show ? 'Some heading' : '' }</h3>
        </div>
    )
}

export default Heading
