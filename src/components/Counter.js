import React from 'react'

import BackwardCounter from './BackwardCounter'
import ForwardCounter from './ForwardCounter'

const Counter = () => {
    return (
        <React.Fragment>
            <ForwardCounter />
            <BackwardCounter />
        </React.Fragment>
    )
}

export default Counter
