import { createContext, useState } from "react";

const CounterContext = createContext({
    counter: 0,
    increment: () => {},
    decrement: () => {},
    increasBy: (amount) => {},
    decreasBy: (amount) => {},
});

export const CounterContextProvider = props => {
    
    const [counter, updateCounter] = useState(0);

    const incrementHandler = () => updateCounter(previousCounter => previousCounter + 1)
    const decrementHandler = () => updateCounter(previousCounter => previousCounter - 1)
    const incrementByHandler = amount => updateCounter(previousCounter => previousCounter + amount)
    const decrementByHandler = amount => updateCounter(previousCounter => previousCounter - amount)
    
    return <CounterContext.Provider value={{
        counter,
        increment: incrementHandler,
        decrement: decrementHandler,
        increasBy: incrementByHandler,
        decreasBy: decrementByHandler
    }}>
        {props.children}
    </CounterContext.Provider>
}

export default CounterContext;
