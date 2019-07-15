import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Amplify from "aws-amplify";
import config from "./config";

import App from './components/App';
import reducers from './reducers';

Amplify.configure({
  Auth: {
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "user",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.render(
  <Provider store={store}><App /></Provider>,
   document.querySelector('#root')
);

// console.log('STRIPE KEY IS: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Enviornment is ', process.env.NODE_ENV);
