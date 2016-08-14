'use strict';

const fs = require('fs');
const npmPackages = require('./packages');
const rootGitignore = require('./gitignore');
const release = require('./meteor/release');
const platform = require('./meteor/platform');
const packages = require('./meteor/packages');
const id = require('./meteor/id');
const finishedUpgraders = require('./meteor/finished-upgraders');
const gitignore = require('./meteor/gitignore');

const collection = require('./imports/api/collection/collection');

const routes = require('./imports/startup/client/routes');
const store = require('./imports/startup/client/store');
const clientIndex = require('./imports/startup/client/index');

const serverIndex = require('./imports/startup/server/index');

const component = require('./imports/ui/components/component.js');

const clientMain = require('./client/main.js');
const clientHtml = require('./client/html.js');
const serverMain = require('./server/main.js');

module.exports = (obj) => {
  const appName = obj.appName;
  console.log('writing files in root directory');
  fs.writeFileSync(`./${appName}/package.json`, npmPackages(appName));
  fs.writeFileSync(`./${appName}/.gitignore`, rootGitignore());

  console.log('creating \'.meteor\' directory');
  fs.mkdirSync(`./${appName}/.meteor`);
  console.log('writing files in directory .meteor');
  fs.writeFileSync(`./${appName}/.meteor/release`, release(obj.meteorCore.version));
  fs.writeFileSync(`./${appName}/.meteor/platform`, platform());
  fs.writeFileSync(`./${appName}/.meteor/packages`, packages());
  fs.writeFileSync(`./${appName}/.meteor/.id`, id());
  fs.writeFileSync(`./${appName}/.meteor/.finished-upgraders`, finishedUpgraders());
  fs.writeFileSync(`./${appName}/.meteor/.gitignore`, gitignore());

  console.log('creating \'imports\' directory');
  fs.mkdirSync(`./${appName}/imports`);

  console.log('writing files in directory /imports');
  fs.mkdirSync(`./${appName}/imports/api`);
  const collections = obj.collections || [];
  collections.map((oneCollection) => {
    fs.mkdirSync(`./${appName}/imports/api/${oneCollection.dbName}`);
    fs.writeFileSync(`./${appName}/imports/api/${oneCollection.dbName}/${oneCollection.dbName}.js`, collection(oneCollection));
  });

  fs.mkdirSync(`./${appName}/imports/startup`);
  fs.mkdirSync(`./${appName}/imports/startup/client`);
  fs.writeFileSync(`./${appName}/imports/startup/client/routes.js`, routes(obj.router));
  fs.writeFileSync(`./${appName}/imports/startup/client/store.js`, store());
  fs.writeFileSync(`./${appName}/imports/startup/client/index.js`, clientIndex());

  fs.mkdirSync(`./${appName}/imports/startup/server`);
  fs.writeFileSync(`./${appName}/imports/startup/server/index.js`, serverIndex());

  fs.mkdirSync(`./${appName}/imports/ui`);
  fs.mkdirSync(`./${appName}/imports/ui/components`);
  const AllRoutes = obj.router.routes;
  const renderRoutes = (routes, parent) => {
    parent = parent || '';
    routes.map((route) => {
      let wrappedBy = '';
      if (parent) {
        wrappedBy = `${parent}/`;
      }
      fs.mkdirSync(`./${appName}/imports/ui/components/${wrappedBy}${route.name}`);
      if (route.childRoutes) {
        fs.writeFileSync(
          `./${appName}/imports/ui/components/${wrappedBy}${route.name}/index.js`,
          component(route.name, route.component, route.subComponents, route.childRoutes)
        );
        if (route.wrapChildRoutes) {
          renderRoutes(route.childRoutes, wrappedBy + route.name);
        } else {
          renderRoutes(route.childRoutes, wrappedBy);
        }
      } else {
        fs.writeFileSync(
          `./${appName}/imports/ui/components/${wrappedBy}${route.name}/index.js`,
          component(route.name, route.component, route.subComponents, route.childRoutes)
        );
      }
      if (route.subComponents) {
        route.subComponents.map((subComponent) => {
          fs.writeFileSync(
            `./${appName}/imports/ui/components/${wrappedBy ? wrappedBy`/` : ''}${route.name}/${subComponent.name}.js`,
            component(subComponent.name, subComponent.component)
          );
        });
      }
    });
  };
  renderRoutes(AllRoutes);

  fs.mkdirSync(`./${appName}/client`);
  fs.writeFileSync(`./${appName}/client/main.js`, clientMain());
  fs.writeFileSync(`./${appName}/client/main.html`, clientHtml());
  fs.mkdirSync(`./${appName}/server`);
  fs.writeFileSync(`./${appName}/server/main.js`, serverMain());
};
