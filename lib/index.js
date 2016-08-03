'use strict';

const fs = require('fs');

module.exports = class Mcook {
  constructor(obj) {
    this.obj = obj;
  }
  validateConfiguration(cb) {
    const obj = this.obj;
    if (!obj.appName) {
      return cb(new Error('appName is required!'));
    }
    try {
      fs.accessSync(`./${obj.appName}`);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return cb();
      }
      return cb(new Error(err));
    }
    return cb(new Error(`'${obj.appName}' is already exist`));
  }
  createProject(cb) {
    const createMeteorCore = require('./createFiles');
    console.log(`creating '${this.obj.appName}' directory`);
    fs.mkdirSync(`./${this.obj.appName}`);
    createMeteorCore(this.obj);
    return console.log('ready');
  }
};