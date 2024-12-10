// // using redux

// import { createStore } from "redux";

// const initialState = { counter: 0, toggleCounter: false };
// const counterDispatch = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + action.amount,
//       toggleCounter: state.toggleCounter,
//     };
//   }
//   if (action.type === "DECREMENTBY5") {
//     return { counter: state.counter - 5, toggleCounter: state.toggleCounter };
//   }
//   if (action.type === "ToggleCounter") {
//     return { counter: state.counter, toggleCounter: !state.toggleCounter };
//   }
//   return state;
// };

// export const store = createStore(counterDispatch);

//  using reduxjs/toolkit

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const sliceInitialState = { counter: 0, toggleCounter: false };

// const counterSlice = createSlice({
//   name: "slice",
//   initialState: sliceInitialState,
//   reducers: {
//     increment: (state) => {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     incrementBYValue(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state, action) {
//       state.toggleCounter = !state.toggleCounter;
//     },
//   },
// });

// export const counterActions = counterSlice.actions;

// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// using 2 slice

import { createSlice, configureStore } from "@reduxjs/toolkit";

const sliceInitialState = { counter: 0, toggleCounter: false };

const counterSlice = createSlice({
  name: "slice",
  initialState: sliceInitialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBYValue(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state, action) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

const authInitialState = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login() {
      isAuthenticated = true;
    },
    logout: () => {
      isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
