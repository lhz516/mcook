'use strict';

const fs = require('fs');
const release = require('./meteor/release');
const platform = require('./meteor/release');
const packages = require('./meteor/packages');
const id = require('./meteor/id');
const finishedUpgraders = require('./meteor/finished-upgraders');
const gitignore = require('./meteor/gitignore');

module.exports = (obj) => {
  console.log('writing directory .meteor');
  const appName = obj.appName;
  fs.mkdirSync(`./${appName}/.meteor`);
  fs.writeFileSync(`./${appName}/.meteor/release`, release(obj.meteorVersion));
  fs.writeFileSync(`./${appName}/.meteor/platform`, platform());
  fs.writeFileSync(`./${appName}/.meteor/packages`, packages());
  fs.writeFileSync(`./${appName}/.meteor/.id`, id());
  fs.writeFileSync(`./${appName}/.meteor/.finished-upgraders`, finishedUpgraders());
  fs.writeFileSync(`./${appName}/.meteor/.gitignore`, gitignore());
};