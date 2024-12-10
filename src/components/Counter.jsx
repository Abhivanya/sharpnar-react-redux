// import { useSelector, useDispatch } from "react-redux";
// import classes from "./Counter.module.css";

// // using redux

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const toggleCounter = useSelector((state) => state.toggleCounter);
//   const dispatch = useDispatch();

//   const toggleCounterHandler = () => {
//     dispatch({ type: "ToggleCounter" });
//   };

//   const incrementBy5Handler = () => {
//     dispatch({ type: "INCREMENT", amount: 5 });
//   };
//   const DecrementBy5Handler = () => {
//     dispatch({ type: "DECREMENTBY5" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       {toggleCounter && (
//         <div>
//           <button onClick={incrementBy5Handler}>Increment</button>
//           <button onClick={DecrementBy5Handler}>Decrement</button>
//         </div>
//       )}
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// using redux toolkit

// import { counterActions } from "../store";
// import { useSelector, useDispatch } from "react-redux";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const toggleCounter = useSelector((state) => state.toggleCounter);
//   const dispatch = useDispatch();

//   const toggleCounterHandler = () => {
//     dispatch(counterActions.toggleCounter());
//   };

//   const incrementBy5Handler = () => {
//     dispatch(counterActions.incrementBYValue(5));
//   };
//   const DecrementBy5Handler = () => {
//     dispatch(counterActions.decrement());
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       {toggleCounter && (
//         <div>
//           <button onClick={incrementBy5Handler}>Increment by 5</button>
//           <button onClick={DecrementBy5Handler}>Decrement</button>
//         </div>
//       )}
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// using two slice
import { counterActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.toggleCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBYValue(5));
  };
  const DecrementBy5Handler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {toggleCounter && (
        <div>
          <button onClick={incrementBy5Handler}>Increment by 5</button>
          <button onClick={DecrementBy5Handler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
