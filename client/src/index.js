import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Dev tests
// import axios from 'axios';
// window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
   document.querySelector('#root')
);

// console.log('STRIPE KEY IS: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Enviornment is ', process.env.NODE_ENV);
