#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1', '-v, --version')
  .command('init [config]')
  .description('initialize a project')
  .action(function (file) {
    console.log(file);
  });

program
  .command('*')
  .action(function (env) {
    console.log('\'%s\' is not a mcook command, see \'mcook --help\'', env);
  });

program.parse(process.argv);
