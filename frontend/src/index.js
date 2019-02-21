import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import store, { history } from './store'
import App from './App'
import * as serviceWorker from './serviceWorker';

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  target
);
serviceWorker.unregister();
