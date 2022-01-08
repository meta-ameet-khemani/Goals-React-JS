import React, { useMemo } from 'react'

const ShowList = props => {
    
    // this will always re-render because array are object in js and no 2 objects are same, 
    // as they have different references, so we have to use useMemo() hook to store the data

    console.log('ShowList component');

    // const sortedItems = props.listItems.sort((a, b) => a - b);
    const sortedItems = useMemo(() => {
        return props.listItems.sort((a, b) => a - b);
    }, [props.listItems]);
    
    return (
        <div>
            <ul>
                {
                    sortedItems.map((item, index) => <li key={index} >{item}</li>)
                }
            </ul>
        </div>
    )
}

export default React.memo(ShowList)
