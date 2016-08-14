'use strict';

module.exports = () => {
  let output;
  output = 'import React  from \'react\';\n' +
    'import { Router, Route, Redirect, browserHistory } from \'react-router\';\n' +
    'import { Provider } from \'react-redux\';\n' +
    'import { syncHistoryWithStore } from \'react-router-redux\';\n' +
    'import store from \'./store\';\n' +
    'import MainLayout from \'../../ui/components/layout\';\n' +
    'import Home from \'../../ui/components/home\';\n' +
    'import Posts from \'../../ui/components/posts\';\n\n' +
    'const history = syncHistoryWithStore(browserHistory, store);\n\n' +
    'const routes = () => (\n' +
    '  <Provider store={store}>\n' +
    '    <Router history={history}>\n' +
    '      <Route component={MainLayout}>\n' +
    '        <Route path="/" component={Home} />\n' +
    '        <Route path="/posts" component={Posts} />\n' +
    '      </Route>\n' +
    '    </Router>\n' +
    '  </Provider>\n' +
    ');\n\n' +
    'export default routes\n';
  return output;
};
