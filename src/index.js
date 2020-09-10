import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Router } from 'react-router';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import store from './store/store';
import App from './App';

import './styles/app.css';

axios.defaults.baseURL = 'https://swapi.dev/';
export const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
);
