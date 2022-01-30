import classes from './Counter.module.css';
import CounterContext from '../store';
import { useContext } from 'react';

const Counter = () => {
  
  const ctx = useContext(CounterContext);
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>{ctx.counter}</div>
      <button onClick={ctx.increment}>Increment</button>
      <button onClick={ctx.decrement}>Decrement</button>
      <button onClick={() => ctx.increasBy(10)}>Increase by 10</button>
      <button onClick={() => ctx.decreasBy(10)}>Decrease by 10</button>
    </main>
  );
};

export default Counter;
