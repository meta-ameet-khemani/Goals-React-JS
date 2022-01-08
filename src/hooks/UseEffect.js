import { useState, useEffect } from 'react';

const UseEffect = () => {

    const [name, updateName] = useState('');  
    // useEffect(() => {
    //   console.log('useEffect without any dependencies will always run wheneven this component is rendered. (when we change state of any component then that component is re-rendered.)'); 
    // });

    // useEffect(() => {
    //   console.log('useEffect with empty dependencies will run only once in lifetime i.e on starting and not when component is re-rendered.'); 
    // }, []);


    // Note: We shouldn't add following things as dependencies:
    // 1. state updating functions (because they never change)
    // 2. built-in APIs (because they are globally available)
    // 3. variables/functions defined outside of component (as they don't have any impact on current component)
    // useEffect(() => {
    //   console.log('useEffect with state variable dependency, will always run whenever that dependency is updated.'); 
    // }, [ name ]);

    // Suppose there is a case, where we wan't to execute something after some time period
    // For example: search username from database
    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('Searching username');
        }, 500);

        // cleanup function for useEffect hook
        return () => {
            console.log('Clearing previous timeout');
            clearTimeout(timeout);
        };
    }, [ name ]);

    return (
        <div>
            <input type='text' value={name} onChange={
            (e) => {
                console.log('Name changed'); 
                updateName(e.target.value); 
            } 
            }/>
        </div> );
};

export default UseEffect;