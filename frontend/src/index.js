import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import store from './modules/store';
import MainRouter from './MainRouter';
import './style/globalStyle.css';


const theme = createMuiTheme({
  palette: {
    //type: 'light', // Switching the dark mode on is a single property value change.
    /* background: {
        paper: '#eeeef4',
        appBar: '#f00'
    },
    text: {
        primary: '#fff',
        icon: '#f00'
    } */
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
