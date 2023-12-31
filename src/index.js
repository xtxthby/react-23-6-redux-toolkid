import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// витягуэмо з react-redux  --Provider
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';
import { theme } from 'constants/theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* обгортаэмо в Provider ш передамо store із 
        import { store } from './redux/store'; */}
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
