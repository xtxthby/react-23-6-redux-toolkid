// варіант 2
// працюэ так само
import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      //  тут ми мутуємо тому return  не потрібен
      state.push(action.payload)
    },
    remove(state, action) {
      // так як філтр не міняє стан на пряму а робить новий стан
      // тому треба return
      return state.filter(item => item.id !== action.payload);
    },
  },

});

export const { add, remove } = itemsSlice.actions;

