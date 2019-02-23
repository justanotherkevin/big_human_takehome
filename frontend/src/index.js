import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import store, { history } from './store'
import * as serviceWorker from './serviceWorker';

import { setAuthTokenToAxiosHeader } from './helpers/authHelpers';
import { setCurrentUserActionObj, logoutUser } from './actions/authActions';
import jwt_decode from 'jwt-decode';

import App from './App'
import './index.css'

const target = document.querySelector('#root')

// auto auth if jwtToken 
// ? if token expired => delete token + logout
if (localStorage.jwtToken) {
  let decoded = jwt_decode(localStorage.jwtToken);
  setAuthTokenToAxiosHeader(localStorage.jwtToken);
  // decode then dispatch
  store.dispatch(
    setCurrentUserActionObj(decoded)
  )

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    history.push('/auth')
  }
}

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  target
);
serviceWorker.unregister();
