import React from 'react'

const Content = props => {

    console.log('Content component');

    return (
        <div>
            <p>{ props.show ? 'Some paragraph' : '' }</p>
        </div>
    )
}

export default Content
