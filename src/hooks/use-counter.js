import React, { useState, useEffect } from 'react'

const useCounter = (forward = true) => {
    const [counter, updateCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forward)
                updateCounter(previousState => previousState + 1);
            else
                updateCounter(previousState => previousState - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <React.Fragment>
            {counter}
        </React.Fragment>
    )
}

export default useCounter
