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

const collection = require('./imports/api/collection/collection.js');

module.exports = (obj) => {
  const appName = obj.appName;
  console.log('writing files in root directory');
  fs.writeFileSync(`./${appName}/packages.json`, npmPackages(appName));
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
  console.log('writing files in directory imports');
  const collections = obj.collections || [];
  collections.map((oneCollection) => {
    fs.mkdirSync(`./${appName}/imports/${oneCollection.dbName}`);
    fs.writeFileSync(`./${appName}/imports/${oneCollection.dbName}/${oneCollection.dbName}.js`, collection(oneCollection));
  });
};