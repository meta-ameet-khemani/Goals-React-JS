import React, { useState, useEffect } from 'react'

import useCounter from '../hooks/use-counter'

const ForwardCounter = () => {

    // const [counter, updateCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateCounter(previousState => previousState + 1);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // return (
    //     <React.Fragment>
    //         {counter}
    //     </React.Fragment>
    // )

    const counter = useCounter();
    return <React.Fragment>{counter}</React.Fragment>
}

export default ForwardCounter
