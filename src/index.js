import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux';
import {store} from './datasource/dataStore';


ReactDOM.render(
  (<Provider store={store}>
  <AppRouter/>
  </Provider>),
  document.getElementById('root')
);