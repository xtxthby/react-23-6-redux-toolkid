// //  це папка конфігурації src/app/store.js
// // забіраємо configureStore з Redux Store Toolkit
// import { configureStore } from '@reduxjs/toolkit';
// // import logger from 'redux-logger';
// // import { userSlice } from './userSlice';
// import { createAction, createReducer } from '@reduxjs/toolkit';


// // В createReducer початковий стан може бути що завгодно
// //  число наприклад 10 або (), {}, [].
// // другим в обэкті те що необхідно зробити для createAction

// const myReduser = createReducer(10, {});

// export const store = configureStore({
//   // в стейті буде myValue і за ньго відповідає myReduser
//   // тобіш myReduser буде отримувати значення з myValue
//   reducer: {
//       myValue: myReduser,
//     }
// })

// ==================================================
// поки не треба

// export const store = configureStore({
//   // це корневий reducer
//   reducer: {
//     user: userSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });

// ==========================================================


// далі працюємо з createAction


// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// // викликаємо функцію і передаємо тип
// const increment = createAction('myValue/increment');
// // отримаэмо вункцыю яка будуэ екшин
// console.log(increment);
// // тепер з викликом ми отримаємо функцію з
// // {type: 'myValue/increment', payload: undefined}
// console.log(increment());
// // якщо рередамо 100
// // { type: 'myValue/increment', payload: 100 }
// console.log(increment(100));
// // як отримати тип екшина. ионо видасть myValue/increment
// console.log(increment.toString());
// // В createReducer початковий стан може бути що завгодно
// //  число наприклад 10 або (), {}, [].
// // другим в обэкті те що необхідно зробити для createAction

// const myReduser = createReducer(10, {});

// export const store = configureStore({
//   // в стейті буде myValue і за ньго відповідає myReduser
//   // тобіш myReduser буде отримувати значення з myValue
//   reducer: {
//       myValue: myReduser,
//     }
// })

// ==================================================

// працюємо з increment
// і decrement

//  це  все використаємо в лояуті


// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// // викликаємо функцію і передаємо тип
// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');
// // отримаэмо вункцыю яка будуэ екшин
// console.log(increment);
// // тепер з викликом ми отримаємо функцію з
// // {type: 'myValue/increment', payload: undefined}
// console.log(increment());
// // якщо рередамо 100
// // { type: 'myValue/increment', payload: 100 }
// console.log(increment(100));
// // як отримати тип екшина. ионо видасть myValue/increment
// console.log(increment.toString());
// // В createReducer початковий стан може бути що завгодно
// //  число наприклад 10 або (), {}, [].
// // другим в обэкті те що необхідно зробити для createAction

// const myReduser = createReducer(10, {
//   // за рахунок масива який викликає toString в ньому буде значення
//   // 'myValue/increment'і далі буде функція яка має стейт
//   //  i екшин і повинна повернути наступний стейт
//   //  state це в редюсе myValue:
//   [increment]:(state, action) => state + action.payload,
//   [decrement]:(state, action) => state - action.payload,
// });

// export const store = configureStore({
//   // в стейті буде myValue і за ньго відповідає myReduser
//   // тобіш myReduser буде отримувати значення з myValue
//   reducer: {
//     // при роботі з myValue -reducerповинен відрегаувати 
//     // на  increment і зробити там щось ми ставимо
//     // increment в  myReduser як свойство {}
//       myValue: myReduser,
//     }
// })




// ================================================== 

// перепишемо на createSlice





// import { configureStore } from '@reduxjs/toolkit';
// // import { createSlice } from '@reduxjs/toolkit';
// // для того щоб завжди в консолі висвітлювалися дані 
// // при якійсь дії наприклад ми при натисканні кнопки
// //  це те саме що будемо набірати console.log()
// //  є  в 'redux-logger' - logger 
// import logger from 'redux-logger'
// //  тут імпортуємо з userSlice.js
// import {myValueSlice} from './myValue/slice'
// import {itemsSlice} from './item/slice'

// /це переносимо в ./myValue/slice/ 
// // createSlice автоматом будується action і  reducer
// const myValueSlice = createSlice({
//   name: "myValue",
//   initialState: 100,
//   reducers: {
//     increment(state, action) {
//       // це повернення для числа 100
//       return state + action.payload
//       // це для обекта initialState: {value: 100};
//       // state.value += action.payload
//     },
//     decrement(state, action) {
//       // це повернення для числа 100
//       return state - action.payload
//       // це для обекта initialState: {value: 100};
//       // state.value += action.payload
//     },
//   },
// });
// // {name: 'myValue', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// console.log(myValueSlice);

// // тепер експортуємо
// export const{increment, decrement} = myValueSlice.actions



// export const store = configureStore({
//   // в стейті буде myValue і за ньго відповідає myReduser
//   // тобіш myReduser буде отримувати значення з myValue
//   reducer: {
//     // при роботі з myValue -reducerповинен відрегаувати 
//     // на  increment і зробити там щось ми ставимо
//     // increment в  myReduser як свойство {}
//       myValue: myValueSlice.reducer,
//     }
// })

// =================================================


// // варіант 2
// // працюэ так само
// /це переносимо в ./itemSlice/slice 
// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       //  тут ми мутуємо тому return  не потрібен
//       state.push(action.payload)
//     },
//     remove(state, action) {
//       // так як філтр не міняє стан на пряму а робить новий стан
//       // тому треба return
//       return state.filter(item => item.id !== action.payload);
//     },
//   },

// });

// export const { add, remove } = itemsSlice.actions;




// // те що залишилося
// export const store = configureStore({
//   // в стейті буде myValue і за ньго відповідає myReduser
//   // тобіш myReduser буде отримувати значення з myValue
//   // так само і items
//   reducer: {

//     myValue: myValueSlice.reducer,
//     items: itemsSlice.reducer,
//   },
//   // тут функція повертає список дефолтних прослоєк
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
// });










// ===========================================================


import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import {myValueSlice} from './myValue/slice'
import {itemsSlice} from './item/slice'
import {userSlice} from './userSlice'


export const store = configureStore({
  // в стейті буде myValue і за ньго відповідає myReduser
  // тобіш myReduser буде отримувати значення з myValue
  // так само і items
  reducer: {

    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
  // тут функція повертає список дефолтних прослоєк
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
