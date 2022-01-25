import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counterReducer.counter);
  const show = useSelector(state => state.counterReducer.show);

  const incrementHandler = () => dispatch(counterActions.increment());
  const increaseHandler = () => dispatch(counterActions.increase(10));
  const decreaseHandler = () => dispatch(counterActions.decrease(10));
  const decrementHandler = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

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
