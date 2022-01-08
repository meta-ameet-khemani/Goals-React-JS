import React, { useState, useMemo } from 'react'
import ShowList from './ShowList';
import ShowPrimitive from './ShowPrimitive';

const UseMemo = () => {
    
    console.log('UseMemo component');
    
    const [state, updateState] = useState(false);

    const listItems = useMemo(() => {
        return [1,2,3,4,5];
    }, []);

    return (
        <div>
            <ShowPrimitive num={100} />
            <ShowList listItems={listItems} />
            <button type='button' onClick={() => updateState(previousState => !previousState)}>Reevaluate</button>
        </div>
    )
}

export default UseMemo
