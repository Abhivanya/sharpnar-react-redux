import { createStore } from "redux";

const initialState = { counter: 0 };
const counterDispatch = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "DECREMENTBY5") {
    return { counter: state.counter - 5 };
  }
  return state;
};

export const store = createStore(counterDispatch);
