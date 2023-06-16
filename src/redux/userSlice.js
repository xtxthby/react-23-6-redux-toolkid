import { createSlice } from '@reduxjs/toolkit';
// це для форми
export const userSlice = createSlice({
  name: 'user',
  // попередній стан юзера де зберігається
  // порожня строка
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      // сюди пишемо імя людини тобіш те що нам принесуть 
      // з інпуту
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      // тут повертаємо початковий стан тобіш 
      // очищаємо інпут
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;



