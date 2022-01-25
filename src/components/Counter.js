import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show);

  const incrementHandler = () => dispatch({ type: 'increment' });
  const increaseHandler = () => dispatch({ type: 'increase', amount: 10 });
  const decreaseHandler = () => dispatch({ type: 'decrease', amount: 10 });
  const decrementHandler = () => dispatch({ type: 'decrement' });
  const toggleCounterHandler = () => dispatch({ type: 'toggle' });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={decreaseHandler}>Decrease by 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
