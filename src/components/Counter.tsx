import React from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {counterActions} from '../store/CounterStore';
import './Counter.css';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector( (state: RootStateOrAny) => state.counter);
  const show = useSelector((state: RootStateOrAny) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const clearHandler = () => {
    dispatch(counterActions.clear());
  };

  return (
    <main className='counter'>
      <div className='toggleButton'>
        <button
          className='toggle'
          onClick={toggleCounterHandler}>
          Toggle Counter</button>
        <button
          onClick={clearHandler}>Clear All</button>
      </div>
      <h1>Redux Counter</h1>
      {show && <div
        className='counterNumber'>
        {counter}
      </div>}
      <div>
        <div>
          <button
            className='addButton decrement'
            onClick={decrementHandler}>-</button>
          <button
            className='addButton increment'
            onClick={incrementHandler}>+</button>
        </div>
        <div>
          <button
            className='addFive increaseFive'
            onClick={decreaseHandler}>-5</button>
          <button
            className='addFive decreaseFive'
            onClick={increaseHandler}>+5</button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
