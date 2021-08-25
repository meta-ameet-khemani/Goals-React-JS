import React, { useState } from 'react'

export default function HooksDemo() {
    const [counter, setCounter] = useState(0);
    // useState hooks gets value as an object whereas in class component it is not mandatory 
    const [name, setName] = useState({firstName: "", lastName: ""});
    const [items, addItem] = useState([]);

    const resetCounter = () => {
        setCounter(0);
    }

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const incrementCounterFive = () => {
        // for (var i = 0; i < 5; i++)
        //     incrementCounter();
        setCounter(previousCounter => previousCounter + 5);
    }

    return (
        <div>
            <center>
                <h2>
                    Hooks Demo
                    Counter : {counter}
                    <button onClick={resetCounter}>Reset</button>
                    <button onClick={incrementCounter}>Increment</button>
                    <button onClick={decrementCounter}>Decrement</button>
                    <button onClick={incrementCounterFive}>Increment 5</button>
                </h2>
                <br />
                <br />
                <br />
                <input type="text" value={name.firstName} onChange={event => setName({ ...name, firstName: event.target.value })} />
                <br />
                <input type="text" value={name.lastName} onChange={event => setName({ ...name, lastName: event.target.value })} />
                <br />
                First Name : <h2> {name.firstName} </h2> Last Name : <h2> {name.lastName} </h2>
                <br />
                {JSON.stringify(name)}
                <br />
                <br />
                <br />
                <button onClick={() => addItem([ ...items, {id: items.length, item: (Math.floor(Math.random() * 10) + 1) } ])}>Add Item</button>
                {/* <br />
                {JSON.stringify(items)} */}
                <br />
                {
                    items.map(item => {
                        return <li key={item.id}>{item.item}</li>
                    })
                }
            </center>            
        </div>
    )
}
