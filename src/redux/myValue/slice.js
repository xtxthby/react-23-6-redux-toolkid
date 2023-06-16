// перша частина до  редаксу із store.js
// ======================================================== 

//  все що стосується слаісів їх виносять окремо


import { createSlice } from '@reduxjs/toolkit';

// createSlice автоматом будується action і  reducer
export const myValueSlice = createSlice({
  name: "myValue",
  initialState: 100,
  reducers: {
    increment(state, action) {
      // це повернення для числа 100
      return state + action.payload
      // це для обекта initialState: {value: 100};
      // state.value += action.payload
    },
    decrement(state, action) {
      // це повернення для числа 100
      return state - action.payload
      // це для обекта initialState: {value: 100};
      // state.value += action.payload
    },
  },
});
// {name: 'myValue', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
console.log(myValueSlice);

// тепер експортуємо
export const{increment, decrement} = myValueSlice.actions