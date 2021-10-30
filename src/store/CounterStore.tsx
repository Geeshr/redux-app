import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter < 50 ? state.counter++ : '';
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter < 50 ? state.counter = state.counter + action.payload : '';
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    clear(state) {
      state.counter = 0;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;


export default store;
