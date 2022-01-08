import React from 'react'

import Heading from './Heading'
import Content from './Content'

const Headline = props => {

    console.log('Headline component');

    return (
        <div>
            {/* // not in this way, because through this we are depending on parent's state */}
            {/* { props.show && <Heading />}
            { props.show && <Content />} */}

            <Heading show={props.show} />
            <Content show={props.show} />
        </div>
    )
}

export default React.memo(Headline)
