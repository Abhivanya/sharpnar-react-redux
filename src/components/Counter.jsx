import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementBy5Handler = () => {
    dispatch({ type: "INCREMENT", amount: 5 });
  };
  const DecrementBy5Handler = () => {
    dispatch({ type: "DECREMENTBY5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementBy5Handler}>Increment</button>
        <button onClick={DecrementBy5Handler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
