import React  from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
{importsString}

const history = syncHistoryWithStore(browserHistory, store);

const routes = () => (
  <Provider store={store}>
    <Router history={history}>
{routesString}
    </Router>
  </Provider>
);

export default routes;
