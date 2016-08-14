'use strict';

module.exports = (router) => {
  let output;
  const allRoutes = router.routes;
  let routesString = '';
  let importsString = '';
  const renderRoutes = (routes, indentNum, parent, isWrapped) => {
    routes.map((route) => {
      let wrappedBy = '';
      if (isWrapped) {
        wrappedBy = `${parent}/`;
      }
      importsString += `import ${route.component} from '../../ui/components/${wrappedBy}${route.name}';\n`;
      let indent = 0;
      let tabs = '';
      while (indent < indentNum) {
        tabs += '  ';
        indent ++;
      }
      let path = '';
      if (route.path) {
        path = ` path="${route.path}"`;
      }
      const routeTag = route.isIndex ? 'IndexRoute' : 'Route';
      if (!route.childRoutes) {
        routesString += `${tabs}<${routeTag}${path} component={${route.component}} />\n`;
      } else {
        routesString += `${tabs}<${routeTag}${path} component={${route.component}}>\n`;
        renderRoutes(route.childRoutes, indentNum + 1, wrappedBy + route.name, route.wrapChildRoutes);
        routesString += `${tabs}</Route>\n`;
      }
    });
  };
  renderRoutes(allRoutes, 3);
  output = 'import React  from \'react\';\n' +
    'import { Router, Route, IndexRoute, Redirect, browserHistory } from \'react-router\';\n' +
    'import { Provider } from \'react-redux\';\n' +
    'import { syncHistoryWithStore } from \'react-router-redux\';\n' +
    'import store from \'./store\';\n' +
    importsString +
    '\n' +
    'const history = syncHistoryWithStore(browserHistory, store);\n\n' +
    'const routes = () => (\n' +
    '  <Provider store={store}>\n' +
    '    <Router history={history}>\n' +
    routesString +
    '    </Router>\n' +
    '  </Provider>\n' +
    ');\n\n' +
    'export default routes;\n';
  return output;
};
