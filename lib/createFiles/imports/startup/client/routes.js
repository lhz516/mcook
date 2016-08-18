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
  const fs = require('fs');
  output = fs.readFileSync(require.resolve('./routes_file'), 'utf8');
  output = output.replace('{importsString}', importsString);
  output = output.replace('{routesString}', routesString.substring(0, routesString.length -1)); // remove the last '\n' in the string
  return output;
};
