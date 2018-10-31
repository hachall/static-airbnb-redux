import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer.js';
import selectedFlatReducer from './reducers/selected_flat_reducer.js';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

import App from './components/app';



ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
